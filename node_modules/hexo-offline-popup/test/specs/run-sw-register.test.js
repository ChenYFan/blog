/**
 * @file inject to html file's test
 * @author mj(zoumiaoijiang@gmail.com)
 */

import tap from 'tap';
import fs from 'fs-extra';
import path from 'path';
import runSWRegister from '../../src/run-sw-register';

/* eslint-disable fecs-camelcase */
let test = tap.test;

test('sw-regisrer should generate ok', t => {
    let publicDir = path.resolve('./sw-register.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirSync(publicDir);

    let context = {
        public_dir: publicDir,
        config: {
            root: '/',
            service_worker: {}
        },
        log: console
    };

    return runSWRegister.call(context).then(() => {
        let workerPath = path.join(publicDir, 'sw-register.js');
        let swRegisterFileCon = fs.readFileSync(workerPath, 'utf-8');

        t.ok(fs.existsSync(workerPath));
        t.ok(swRegisterFileCon.includes('sw.js'));
        t.ok(/sw\.js\?v=\d{14}/.test(swRegisterFileCon));
        fs.existsSync(publicDir) && fs.removeSync(publicDir);
        t.end();
    }, error => {
        console.error(error);
        fs.existsSync(publicDir) && fs.removeSync(publicDir);
        t.end();
    });
});
