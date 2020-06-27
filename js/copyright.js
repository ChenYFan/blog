document.body.addEventListener('copy', function (e) {
    if (window.getSelection().toString() && window.getSelection().toString().length > 50) {
        setClipboardText(e);
        alert('萌萌哒博主提醒您，您复制的东西太多了，已加上版权著名，仅用于非商业转载哦！');
    }
});
 
function setClipboardText(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
        event.preventDefault();
 
        var htmlData = ''
			+ '==========<br>'
            + '著作权归作者所有。<br>'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。【滑稽】<br>'
            + '作者：CYF <br>'
            + '链接：' + window.location.href + '<br>'
            + '来源：CYF<br>'
			+ '若复制出现换行错误,请不要用记事本粘贴,使用Notepad++<br>'
			+ '以下是原内容<br>'
			+ '==========<br><br>'
		    + window.getSelection().toString();
        var textData = ''
			+ '==========\n'
            + '著作权归作者所有。\n'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。【滑稽】 \n'
            + '作者：CYF\n'
            + '链接：' + window.location.href + '\n'
            + '来源：CYF\n\n'
			+ '若复制出现换行错误,请不要用记事本粘贴,使用Notepad++\n'
			+ '以下是原内容\n'						
			+ '==========\n\n'
		    + window.getSelection().toString();
        clipboardData.setData('text/html', htmlData);
        clipboardData.setData('text/plain',textData);
    }
}

