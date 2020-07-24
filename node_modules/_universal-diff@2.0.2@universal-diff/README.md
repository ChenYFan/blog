universal-diff
==========

diff &amp; merge algorithm realized with Javascript

### Usage

 - nodejs

		var _ = require('universal-diff'),
			compare = _.compare,
			merge = _.merge,
			compareStr = _.compareStr,
			mergeStr = _.mergeStr;

 - browser
 
		<script type="text/javascript" src="diff.min.js"></script>
		<script type="text/javascript">
			var _ = window.diff,
				compare = _.compare,
				merge = _.merge,
				compareStr = _.compareStr,
				mergeStr = _.mergeStr;
		</script>

### Compare

	var seq1 = [1, 2, 'a', 'b'],
		seq2 = [1, 2, 'c', 'b'];

	var seqResult = compare(seq1, seq2); 			// seqResult: [[2, 1, ['c']]

	var s1 = 'abc',
		s2 = 'abcd',
		splitter = '';

	var strResult = compareStr(s1, s2, splitter); 	// strResult: { splitter: '', diff: [[3, 0, 'd']] }

### Merge

	var seq3 = merge(seq1, seqResult); 				// seq3: [1, 2, 'b']

	var s3 = mergeStr(s1, strResult);				// s3: 'abcd'

### Test

	gulp test

### Build

	gulp

### Algorithm

MYERS': https://neil.fraser.name/software/diff_match_patch/myers.pdf
