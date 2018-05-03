function addWord() {
    var text = document.getElementById('words');
    var strSplit = texts.value.split(" ");
    var Arr = strSplit.sort(compare);
    function compare(a, b) {
        if (a.length > b.length) {
            return -1; }
        if (a.length < b.length) {
            return 1; }
        return 0; }
    words.innerHTML = Arr[0] + '; ' + Arr[1] + '; ' + Arr[2] + ";"; }

    button.addEventListener('click', addWord);