import { readFileSync } from 'node:fs'

export const getContentFromFile = (path: string): string => {
  return readFileSync(path, 'utf-8')
}
