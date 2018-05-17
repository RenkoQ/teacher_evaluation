(function () {
    let frame = document.getElementById('iframeautoheight');
    let cntDoc = frame.contentDocument || frame.contentWindow.document;
    const classNum = cntDoc.querySelectorAll('#pjkc option').length;
    let cl = 0;

    function evaluate(n) {
        let classes = frame.contentDocument.getElementById('pjkc');
        let dateList = frame.contentDocument.getElementById('DataGrid1');
        let selects = dateList.querySelectorAll('select');
        let sl = selects.length;
        let i = 0;
        selects.forEach(element => {
            element.options[1].selected = true;
            if (++i % 9 == 0) {
                element.options[2].selected = true;
            }
        });
        let saveBtn = frame.contentDocument.getElementById('Button1');
        for (let index = 0; index < classNum; index++) {
            saveBtn.click();
        }
    }

    evaluate(0);

    frame.onload = function () {
        if (++cl < classNum) {
            evaluate(cl);
        } else {
            console.log('Already evaluate' + cl + 'classes!');
        }
    };
})();