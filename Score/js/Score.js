
//获取class
function getByClass(parent,sclass){
	var aAll=parent.getElementsByTagName('*');
	var arr=[];
	for (var i=0; i<aAll.length; i++){
		
		var Cla=aAll[i].className.split(' ');
		for (var j=0; j<Cla.length; j++){
			if (Cla[j]==sclass){
				arr.push(aAll[i]);
			};
		};
	};
	return arr;
};


function score(wrap,branch,txt){
	var _this=this;
	_this.wrap=document.getElementById(wrap);
	_this.branch=_this.wrap.getElementsByTagName(branch);
	_this.txt=getByClass(_this.wrap,txt)[0];
	_this.arr=['很差','较差','还行','推荐','力荐'];
	var t=_this.txt.innerHTML;
	var n=-1;		//记录选择的分数
	
	for (var i=0; i<_this.branch.length; i++){
		_this.branch[i].index=i;
		//鼠标移入
		_this.branch[i].onmouseover=function (){
			score.txt.innerHTML=score.arr[this.index];
			score.seRet(this.index);
			score.setScore(this.index);
		};
		
		_this.branch[i].onclick=function (){
			t=score.arr[this.index];
			n=this.index;
		};
		
		_this.branch[i].onmouseout=function (){
			score.txt.innerHTML=t;
			score.seRet(n);
			score.setScore(n);
		};
	};
};


//分数
score.prototype.setScore=function (num){
	for (var i=0; i<=num; i++){
		if (num<2){
			this.branch[i].style.backgroundPosition='0px -44px'
		}
		else
		{
			this.branch[i].style.backgroundPosition='0px -22px';
		};
	};
};

//重置
score.prototype.seRet=function (num){
	for (var i=0; i<this.branch.length; i++){
		this.branch[i].style.backgroundPosition='0px 0px';
	};
};

















