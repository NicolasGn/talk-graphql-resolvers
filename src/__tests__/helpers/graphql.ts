import schema from 'api';
import { getContext } from 'api/context';
import { ExecutionResult, graphql } from 'graphql';

export const exql = async <
  TArgs extends { readonly [variable: string]: unknown } = any,
  TRes = any,
>(
  queryOrMutation: string,
  args?: TArgs,
) => {
  const result = await graphql({
    source: queryOrMutation,
    schema,
    contextValue: getContext(),
    variableValues: args,
  });

  const { data, ...resultRest } = result;

  return {
    ...resultRest,
    data: result.data ?? (null as TRes | null),
    errorCodes: getGraphqlErrorCodes(result),
  };
};

export const getGraphqlErrorCodes = (
  result: ExecutionResult,
): (string | undefined)[] => {
  if (!result.errors) {
    return [];
  }
  return result.errors.map((error) => {
    const { code } = error.extensions;
    if (!code) {
      return undefined;
    }
    return code as string;
  });
};
