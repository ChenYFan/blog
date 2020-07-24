var input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    var lines = input.split('\n');
    var meta = lines.shift().split(' ');
    var T = meta[0] | 0;
    var N = meta[1] | 0;
    var M = 0;
    var sum = 0;
    var max = Number.MIN_VALUE;

    for (var i = 0; i < N; i++) {
        M = lines[i] | 0;
        sum += M;

        if (i >= T) {
            sum -= lines[i - T] | 0;
        }

        if (sum > max) max = sum;
    }

    console.log(max);
});