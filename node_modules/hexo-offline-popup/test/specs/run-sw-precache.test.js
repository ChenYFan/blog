/**
 * @file test of sw-precache
 * @author mj(zoumiaojiang@gmail.com)
 */

import {test} from 'tap';
import fs from 'fs-extra';
import path from 'path';
import runSWPrecache from '../../src/run-sw-precache';
import {SW_FILE_NAME} from '../../src/config';

/* eslint-disable fecs-camelcase */
test('run-sw-precache should generate sw.js when index.html presents', t => {
    let publicDir = path.resolve('./run-sw-precache.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirpSync(publicDir);

    let context = {
        public_dir: publicDir,
        config: {
            root: '/',
            service_worker: {}
        },
        log: console
    };

    let cleanup = () => {
        fs.existsSync(publicDir) && fs.removeSync(publicDir);
    };

    return runSWPrecache.call(context).then(() => {
        let workerPath = path.join(publicDir, SW_FILE_NAME);
        t.ok(fs.existsSync(workerPath));
        cleanup();
        t.end();
    }, error => {
        console.error(error);
        cleanup();
        t.end();
    });
});

test('run-sw-precache should generate sw.js when use custom sw.tmpl', t => {
    let publicDir = path.resolve('./run-sw-precache.test');
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

    let cleanup = () => {
        fs.existsSync(publicDir) && fs.removeSync(publicDir);
    };

    return runSWPrecache.call(context).then(() => {
        let workerPath = path.join(publicDir, SW_FILE_NAME);
        let swCon = fs.readFileSync(workerPath, 'utf-8');
        t.ok(swCon.includes('sw.update'));
        cleanup();
        t.end();
    }, error => {
        console.error(error);
        cleanup();
        t.end();
    });
});
