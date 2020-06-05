applyStyles(styles)
  {
    if(!document.getElementById("appstylesheet")) {
      let style=document.createElement('style')
      style.id='appstylesheet'
      style.type="text/css"
      document.head.appendChild(style)
    }

    let mySheet=document.getElementById("appstylesheet").sheet
    let rules = mySheet.cssRules ? mySheet.cssRules : mySheet.rules
    for(let selector in styles)
    {
      for(let selectorContentId in styles[selector]){
        if(selectorContentId.indexOf('olor')!=-1) {
          document.querySelector(":root").style.setProperty('--' + selector + '-' + selectorContentId, styles[selector][selectorContentId])
        }
      }

      var mselector="."+selector

      if(selector.indexOf(':focus')!=-1) mselector=mselector.replace(':focus','')+":focus:not(.active)"
      if(selector.indexOf(':hover')!=-1) mselector=mselector.replace(':hover','')+":hover:not(.active)"
      if(selector.indexOf(':active')!=-1) mselector=mselector.replace(':active','')+".active"
      let ruleIndex = -1
      for (let i=0; i<rules.length; i++)
      {
        if (rules[i].selectorText == mselector)
        {
          ruleIndex = i;
          assign(rules[i].style, styles[selector])
          break;
        }
      }
      if(ruleIndex==-1)
      {
        let cssStr=""
        ruleIndex=mySheet.insertRule(mselector + '{' + cssStr + '}', rules.length)
        assign(rules[ruleIndex].style, styles[selector])
      }
    }
  }
