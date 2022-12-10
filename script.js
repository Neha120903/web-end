function getFile(filename) {
    const content = fs.readFileSync(filename,'utf-8').split('\n');
    console.log(content);
    document.getElementById('para').innerText = content;
}

getFile('AliceInWonderland.txt');

