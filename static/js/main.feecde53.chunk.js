(this["webpackJsonp@socialgouv/standup"]=this["webpackJsonp@socialgouv/standup"]||[]).push([[0],{10:function(e,t,r){e.exports=r(19)},18:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r(2),a=r(4),s=r(3),o=r(5),c=r(0),l=r.n(c),u=r(7),d=r.n(u),p=r(8),m=r.n(p),h=(r(18),r(9)),f=function(e){return String(e<10?"0"+e:e)},v=function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={start:null},r.tick=function(){r.forceUpdate()},r}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({start:new Date}),this.interval=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentWillReceiveProps",value:function(){this.setState({start:new Date})}},{key:"render",value:function(){var e=this.state.start&&parseInt(((new Date).getTime()-this.state.start.getTime())/1e3,10)||0;return this.props.render({elapsed:e})}}]),t}(l.a.Component),g=function(e){var t=e.onClick;return l.a.createElement("div",null,l.a.createElement("h1",null,"STAND-UP"),l.a.createElement("button",{className:"start-button",onClick:t},"COMMENCER"))},b=function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={index:-1},r.next=function(){Math.min(r.props.startups.length-1,r.state.index+1)!==r.state.index&&r.setState(function(e){return{index:Math.min(r.props.startups.length-1,e.index+1)}})},r.prev=function(){Math.max(0,r.state.index-1)!==r.state.index&&r.setState(function(e){return{index:Math.max(0,e.index-1)}})},r.onKeyEvent=function(e){"left"===e?r.prev():"right"===e?r.next():"space"===e&&r.next()},r}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){if(-1===this.state.index)return l.a.createElement(g,{onClick:this.next});var e=this.props.startups[this.state.index],t=this.state.index<this.props.startups.length-1&&this.props.startups[this.state.index+1];return l.a.createElement("div",{className:"container",onClick:this.next},l.a.createElement(m.a,{handleKeys:["left","right","space"],onKeyEvent:this.onKeyEvent}),l.a.createElement("h2",{className:"timed-slide__title"},e.titre),l.a.createElement("h3",{className:"timed-slide__subtitle",dangerouslySetInnerHTML:{__html:e.description}}),e.url&&l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{color:"#0091ff",fontSize:"1.5em",textDecoration:"underline"},onClick:function(e){return e.stopPropagation()}},"slides"),l.a.createElement(v,{render:function(t){var r=t.elapsed;return l.a.createElement(x,{seconds:r,timeout:e.timeout})}}),t&&l.a.createElement("div",{className:"next-slide"},"> ",t.titre))}}]),t}(l.a.Component),x=function(e){var t=e.seconds,r=e.timeout,i=void 0===r?4:r;return l.a.createElement("div",{className:"elapsed-time ".concat(t>i?"ending-soon":"")},function(e){var t=0,r=0;return r=e>=60?e-60*(t=Math.floor(e/60)):e,"".concat(f(t),":").concat(f(r))}(t))},E=document.getElementById("root");d.a.render(l.a.createElement(b,{startups:h}),E)},9:function(e){e.exports=JSON.parse('[{"titre":"Maraudes","timeout":60,"description":"Le dossier social partag\xe9 des personnes \xe0 la rue"},{"titre":"MedL\xe9","timeout":60,"description":"Observatoire Interminist\xe9riel de la M\xe9decine L\xe9gale<br>Plateforme permettant aux \xe9tablissements de sant\xe9 de d\xe9clarer leur activit\xe9 m\xe9dico-l\xe9gale"},{"titre":"Pass Pr\xe9servatif","timeout":60,"description":"-"},{"titre":"TextStyle","timeout":60,"description":"TextStyle simplifie la r\xe9daction des textes juridiques."},{"titre":"Work In France","timeout":60,"description":"La plateforme de demande d\'autorisation provisoire de travail pour les \xe9tudiants \xe9trangers<br/><br/><img src=\'images/work-in-france.png\'/>"},{"titre":"e-MJPM","timeout":60,"description":"Trouver rapidement le bon professionnel pour les majeurs \xe0 prot\xe9ger."},{"titre":"DomiFa","timeout":60,"description":"Faciliter l\'acc\xe8s aux droits pour les personnes sans domicile stable, en simplifiant la gestion de la domiciliation"},{"titre":"Code du travail num\xe9rique","timeout":60,"description":"Faciliter l\'acc\xe8s au droit du travail pour les employeur\xb7e\xb7s et les employ\xe9\xb7e\xb7s.<br/><br/><img src=\'images/cdtn.png\'/>"},{"titre":"Siao Data","timeout":60,"description":"Comment l\'analyse des donn\xe9es peut aider le 115 \xe0 mieux r\xe9pondre aux demandes des personnes en d\xe9tresse<br/><br/><img src=\'images/datalab.png\'/>"},{"titre":"Ops","timeout":60,"description":"Mettre \xe0 disposition une infrastructure DevOps pour r\xe9duire le time-to-market des d\xe9veloppements et am\xe9liorer la qualit\xe9"},{"titre":"FCE","timeout":60,"description":"Un portail pour faciliter l\u2019acc\xe8s aux informations disponibles sur les entreprises et les \xe9changes entre services"},{"titre":"Archifiltre","timeout":60,"description":"Aider les archivistes et les producteurs de documents bureautiques \xe0 appr\xe9hender des arborescences compl\xe8tes de fichiers pour les traiter"},{"titre":"EgaPro","timeout":60,"description":"Calculer et transmettre l\'index \xe9galit\xe9 professionnelle hommes - femmes d\'une entreprise<br/><br/><img src=\'images/egapro.png\'/>"},{"titre":"RAMSES","timeout":60,"description":"R\xe9guler et Accompagner la Masse Salariale et l\u2019Emploi du Secteur social et m\xe9dico-social."},{"titre":"Sujets transverses","timeout":300,"description":"\ud83c\udf89<br>Petit d\xe9jeuner de l\u2019incubateur - Jeudi 3 Octobre (09:30 \xe0 10:00) - D\xe9mo ?<br>Mardi 1 Octobre 14-15h Atelier KPI <br>Prochain seminaire (VIIIe) le Vendredi 04 Octobre 2019 15h @ Rhino"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.feecde53.chunk.js.map