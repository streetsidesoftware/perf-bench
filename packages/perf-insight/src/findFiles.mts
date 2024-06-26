import { globby, type Options as GlobbyOptions } from 'globby';

const excludes = ['node_modules'];

export interface FindFileOptions {
    onlyFiles?: boolean;
    cwd?: string;
    excludes?: string[];
}

export async function findFiles(globs: string[], options?: FindFileOptions) {
    const globOptions: GlobbyOptions = {
        ignore: options?.excludes ?? excludes,
        onlyFiles: options?.onlyFiles ?? true,
        cwd: options?.cwd || process.cwd(),
    };
    const files = await globby(
        globs.map((a) => a.trim()).filter((a) => !!a),
        globOptions,
    );
    // console.log('%o', files);
    return files;
}
