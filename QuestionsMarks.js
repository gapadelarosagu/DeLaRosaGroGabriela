function QuestionsMarks(str) {
    let num = [];
    let ban = false;
  
    for (let i = 0, len = str.length; i < len; i++) {
      if (/\d/.test(str[i])) {
        num.push(i);
      }
    }
  
    let numCount = num.length;
    for (let i = 0; i < numCount - 1; i++) {
      if (parseInt(str[num[i]], 10) + parseInt(str[num[i + 1]], 10) === 10) {
        ban = true;
        let strSeg = str.slice(num[i], num[i + 1]);
  
        strSeg = strSeg.replace(/[^\?]/g, '');
        if (strSeg !== '???') {
          return false;
        }
      }
    }
    return ban;
  }
     
  console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));