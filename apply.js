applyStyles(styles) //apply styles
	{
		if($('#appstylesheet').length === 0) {
			$('<style id="appstylesheet" type="text/css"></style>').appendTo("head")
		}

		mySheet=document.getElementById("appstylesheet").sheet
		var rules = mySheet.cssRules ? mySheet.cssRules : mySheet.rules
		for(var selector in styles)
		{
			for(var selectorContentId in styles[selector]){
				if(selectorContentId.indexOf('olor')!=-1) {
					$('body').css('--' + selector + '-' + selectorContentId, styles[selector][selectorContentId])
				}
			}

			var mselector="."+selector
			
			if(selector.indexOf('Hover')!=-1) mselector=mselector.replace('Hover','')+":hover:not(.active)"
			if(selector.indexOf('Active')!=-1) mselector=mselector.replace('Active','')+".active"
			var ruleIndex = -1
			for (i=0; i<rules.length; i++)
			{
				if (rules[i].selectorText == mselector)
				{
					ruleIndex = i;
					$.extend(rules[i].style, styles[selector])
					break;
				}
			}
			if(ruleIndex==-1)
			{
				cssStr=""
				ruleIndex=mySheet.insertRule(mselector + '{' + cssStr + '}', rules.length)
				$.extend(rules[ruleIndex].style, styles[selector])
			}
		}
	}
