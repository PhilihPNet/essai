var maListe=liste;
console.log(monUL);
var monUL=document.getElementById('listeconteneur');
console.log(monUL);
var listeOrd=[];
String.prototype.ucfirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
}
liste.forEach(function(e){
	var s='';var shtml='';
	for(var key in e){
		s +=(s==''?'':"\\n")+'"'+key+' : "'+e[key]+'"';
		shtml +=(shtml==''?'':"<br>")+'"'+key+' : "'+e[key]+'"';
	}
	listeOrd[listeOrd.length]=[
	"<span>"+e.Nom.toUpperCase()+'\u0020'+e.Prenom.ucfirst()+"</span>",
	"Nom : "+e.Nom.toUpperCase()+"\\n"+"Prenom : "+e.Prenom.ucfirst() +"\\n"+"Javascript : "+e.Javascript +"\\n"+"site_pref : "+e.site_pref +"\\n"+"Pourquoi_S : "+e.Pourquoi_S +"\\n"+"app_pref : "+e.app_pref +"\\n"+"Pourquoi_A : "+e.Pourquoi_A +"\\n"+"before_IFA : "+e.before_IFA +"\\n"+"pourquoi_IFA : "+e.pourquoi_IFA +"\\n"+"Mail : "+e.Mail,
	encodeURIComponent(/* JSON.stringify */("<u><b>"+e.Nom.toUpperCase() +"&nbsp;"+e.Prenom.ucfirst() +"<b></u><br>"+"Javascript : "+e.Javascript +"<br>"+"site_pref : "+e.site_pref +"<br>"+"Pourquoi_S : "+e.Pourquoi_S +"<br>"+"app_pref : "+e.app_pref +"<br>"+"Pourquoi_A : "+e.Pourquoi_A +"<br>"+"before_IFA : "+e.before_IFA +"<br>"+"pourquoi_IFA : "+e.pourquoi_IFA +"<br>"+"Mail : <a href='mailto:"+e.Mail+"'>"+e.Mail+"</>"))
	,e.id
	,s,shtml
	];
	});
	
	
listeOrd.sort();
listeOrd.forEach(function(e){
	var li=document.createElement('li');
	li.innerHTML=e[0];
	//li.innerHTML='<a onclick="alert(\''+e[1]+'\');">'+e[0]+'</a>';
	//li.innerHTML='<a href="afficheFiche.html?'+e[2]+'">'+e[0]+'</a>';
	li.addEventListener('click',function(){
		//window.location.href="afficheFiche.html?id="+e[2];
		window.location.href="afficheFiche.html?id="+e[3];
	});
	li.addEventListener('mouseover',function(){
		document.getElementById('info').innerHTML=decodeURIComponent(e[2]);
		document.getElementById('info').style.display="inline-block";
	});
	li.addEventListener('mouseout',function(){
		document.getElementById('info').innerHTML="";
		document.getElementById('info').style.display="none";
	});
	li.style.cursor="pointer";
	monUL.appendChild(li);
	/* console.log(e.Nom+'  '+e.Prenom) */});