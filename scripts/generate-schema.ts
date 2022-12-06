import fs from 'fs';
import { print } from 'graphql';
import schema from '../src/api/schema';

const stringifiedSchema = schema.map((s) => print(s)).join('\n');

fs.writeFileSync(`schema.graphql`, stringifiedSchema);
