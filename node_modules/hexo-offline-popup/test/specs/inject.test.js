/**
 * @file inject to html file's test
 * @author mj(zoumiaoijiang@gmail.com)
 */

import tap from 'tap';
import fs from 'fs-extra';
import path from 'path';
import injectSWRegisterEntry from '../../src/inject';


let test = tap.test;

test('inject should inject script when index.html presents', t => {
    let publicDir = path.resolve('./inject.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirSync(publicDir);

    let html = [
        '<html>',
        '<body>',
        '</body>  ',
        '</html>'
    ].join('\n');

    let indexHTMLPath = path.join(publicDir, 'index.html');
    fs.writeFileSync(indexHTMLPath, html);

    injectSWRegisterEntry(publicDir);
    let content = fs.readFileSync(indexHTMLPath, 'utf-8');
    t.ok(content.includes('</script></body></html>'));
    t.ok(content.includes('sw-register.js'));
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    t.end();
});

test('inject should success when html file in sub dir', t => {
    let publicDir = path.resolve('./inject.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirpSync(path.resolve(publicDir, 'subdir'));
    let html = [
        '<html>',
        '<body>',
        '</body>  ',
        '</html>'
    ].join('\n');

    let indexfirstLevelHTMLPath = path.join('./inject.test', 'index.html');
    let index2LevelHTMLPath = path.join('./inject.test/subdir', 'index.html');

    fs.writeFileSync(indexfirstLevelHTMLPath, html);
    fs.writeFileSync(index2LevelHTMLPath, html);

    injectSWRegisterEntry(publicDir);
    let content = fs.readFileSync(indexfirstLevelHTMLPath, 'utf-8');
    let content2 = fs.readFileSync(index2LevelHTMLPath, 'utf-8');
    t.ok(content.includes('</script></body></html>'));
    t.ok(content2.includes('</script></body></html>'));
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    t.end();
});

test('inject should not throw when index.html is not found', t => {
    let publicDir = path.resolve('./inject.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirSync(publicDir);

    t.doesNotThrow(() => injectSWRegisterEntry(publicDir));
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    t.end();
});

test('inject-sw-register should not inject script agian once injected', t => {
    let publicDir = path.resolve('./inject.test');
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    fs.mkdirSync(publicDir);

    let html = [
        '<html>',
        '<body>',
        '</body>  ',
        '</html>'
    ].join('\n');

    let indexHTMLPath = path.join(publicDir, 'index.html');
    fs.writeFileSync(indexHTMLPath, html);

    injectSWRegisterEntry(publicDir);
    let content = fs.readFileSync(indexHTMLPath, 'utf-8');

    injectSWRegisterEntry(publicDir);
    let newContent = fs.readFileSync(indexHTMLPath, 'utf-8');

    t.equal(content, newContent);
    fs.existsSync(publicDir) && fs.removeSync(publicDir);
    t.end();
});
