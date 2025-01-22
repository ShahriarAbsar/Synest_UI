import{a as L,b as A}from"./chunk-7FSFUT3M.js";import{a as H,b as R}from"./chunk-4EUSMHX5.js";import"./chunk-5VIEGPGW.js";import{a as D,b as U}from"./chunk-GGBIJVRT.js";import{c as S,e as T,g as k,k as F}from"./chunk-BFK4AOP3.js";import{Cb as g,Dc as I,Fb as M,Kb as v,Lb as l,Mb as m,Na as h,Nb as w,Oa as u,Sa as i,Sb as x,Ta as O,Vb as y,Y as P,Yb as z,hb as d,jb as s,sb as o,tb as a,ub as p,vb as f,wb as C,wc as b,xc as E}from"./chunk-MOL3RU3W.js";var j={data:[{type:"video",url:"https://www.youtube.com/embed/kmJYu6bYfls?si=4nsnr7TPv0WMXRXr",date:"19 FEB 2021",title:"EIZO CG319X 4K HDR Reference Monitor - Review"},{type:"written",product:"EIZO CS2740 - An Evaluation by Image Science ",date:"DEC 2020",reviewer:"Jeremy Daalder, Image Science",content:"This 4K Eizo ColorEdge monitor offers excellent quality at a relatively affordable price (~$3000), making it a valuable tool for serious imaging professionals. With a lifespan of 5-10 years, it's a worthwhile investment. However, ensure your computer supports 4K at 60Hz; older systems might struggle with performance at lower refresh rates, leading to frustration."},{type:"video",url:"https://www.youtube.com/embed/i8jWtO3Dq8g?si=_u5yeIr6q45_4-lg",date:"03 JUN 2021",title:"Eizo CS2740 - Highest quality 4K 27-inch monitor on the market"}]};var K=(e,n)=>["/",e,n];function W(e,n){if(e&1&&(o(0,"a",7)(1,"div",8),p(2,"img",9),a(),o(3,"div",10)(4,"h3",11),l(5),a(),o(6,"span",12),l(7),a()()()),e&2){let t=n.$implicit,r=n.index,c=g(2);s("routerLink",y(4,K,c.selectedType,r)),i(2),M("src",t.img,h),i(3),m(t.truncated_title),i(2),m(t.date)}}function J(e,n){if(e&1&&(f(0),d(1,W,8,7,"a",6),C()),e&2){let t=g();i(),s("ngForOf",t.data)}}function N(e,n){if(e&1&&(f(0),o(1,"div",16),p(2,"iframe",17),a(),o(3,"div",10)(4,"h3",11),l(5),a(),o(6,"span",12),l(7),a()(),C()),e&2){let t=g().$implicit;i(2),M("title",t.title),s("src",t.url,u),i(3),m(t.title),i(2),m(t.date)}}function X(e,n){if(e&1&&(f(0),o(1,"p",18),l(2),a(),o(3,"h3",19),l(4),a(),o(5,"p",20),l(6),a(),o(7,"span",21),l(8),a(),C()),e&2){let t=g().$implicit;i(2),m(t.product),i(2),m(t.reviewer),i(2),m(t.content),i(2),m(t.date)}}function Y(e,n){if(e&1&&(o(0,"div",14),d(1,N,8,4,"ng-container",15)(2,X,9,4,"ng-container",15),a()),e&2){let t=n.$implicit;i(),s("ngIf",t.type=="video"),i(),s("ngIf",t.type=="written")}}function Z(e,n){if(e&1&&d(0,Y,3,2,"div",13),e&2){let t=g();s("ngForOf",t.data)}}var me=(()=>{let n=class n{get press_articles(){return L.data}get conference_articles(){return A.data}get review_articles(){return j.data}constructor(r,c){this.route=r,this.sanitizer=c,this.youtubeSettings="&controls=0&fs=0&modestbranding=1&playsinline=1",this.data=[],this.page_title="",this.selectedType="press",this.headerTitle="",this.headerlink=[]}ngOnInit(){this.route.params.subscribe(r=>{this.selectedType=r.type,this.selectedType=="press"?(this.page_title="What the Media is Saying About Synest",this.data=this.press_articles.slice()):this.selectedType=="conference"?(this.page_title="Highlights from Synest Conferences",this.data=this.conference_articles.slice()):this.selectedType=="review"&&(this.page_title="Experiences from Our Clients",this.data=this.review_articles.slice()),this.headerTitle=this.capitalizeFirstLetter(this.selectedType),this.headerlink=["/",this.selectedType],this.selectedType!="review"?this.truncateTitles(60):this.sanitizeAllURL()})}sanitizeAllURL(){for(let r of this.data)r.url=this.sanitizer.bypassSecurityTrustResourceUrl(r.url+this.youtubeSettings)}truncateTitles(r){for(let c of this.data)c.truncated_title=c.title.substring(0,r)+"..."}capitalizeFirstLetter(r){return r.charAt(0).toUpperCase()+r.slice(1)}};n.\u0275fac=function(c){return new(c||n)(O(T),O(S))},n.\u0275cmp=P({type:n,selectors:[["app-press"]],standalone:!0,features:[x],decls:10,vars:5,consts:[["fragment","blogCards",3,"headerText","link"],[1,"container"],[1,"title"],[1,"article-container"],[4,"ngIf","ngIfElse"],["reviewCard",""],["class","article-card",3,"routerLink",4,"ngFor","ngForOf"],[1,"article-card",3,"routerLink"],[1,"article-img"],["alt","article Img",3,"src"],[1,"article-info"],[1,"article-title"],[1,"article-date"],["class","review-card",4,"ngFor","ngForOf"],[1,"review-card"],[4,"ngIf"],[1,"article-video"],["allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",3,"src","title"],[1,"product"],[1,"reviewer"],[1,"content"],[1,"date"]],template:function(c,_){if(c&1&&(p(0,"app-header",0),o(1,"section")(2,"div",1)(3,"h1",2),l(4),a(),o(5,"div",3),d(6,J,2,1,"ng-container",4)(7,Z,1,1,"ng-template",null,5,z),a()()(),p(9,"app-contact-us")),c&2){let $=v(8);s("headerText",_.headerTitle)("link",_.headerlink),i(4),w(" ",_.page_title," "),i(2),s("ngIf",_.selectedType!="review")("ngIfElse",$)}},dependencies:[I,b,E,F,k,R,H,U,D],styles:["section[_ngcontent-%COMP%]{margin-top:2.5rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding-inline:1.25rem}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;text-align:center;font-family:Helvetica,sans-serif;font-size:3rem;font-style:normal;font-weight:500;line-height:105%}@media (max-width: 1200px){section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2.5rem}}@media (max-width: 900px){section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.75rem}}@media (max-width: 650px){section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]{margin-top:3.75rem;display:grid;grid-template-columns:repeat(3,1fr);row-gap:3.12rem;column-gap:1.25rem;margin-bottom:7.5rem}@media (max-width: 1000px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 670px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:2.5rem;grid-template-columns:repeat(1,1fr);row-gap:2rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%]{border-radius:.625rem}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:.625rem;aspect-ratio:33.75/35.875;object-fit:cover;object-position:center}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]{margin-top:1.25rem}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{color:#000;font-family:Helvetica,sans-serif;font-size:1.25rem;font-style:normal;font-weight:500;line-height:120%;letter-spacing:-.01375rem;text-transform:capitalize}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{font-size:.875rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-date[_ngcontent-%COMP%]{display:inline-block;margin-top:.5rem;color:#404040;font-family:Helvetica,sans-serif;font-size:1rem;font-style:normal;font-weight:400;line-height:120%;letter-spacing:-.011rem;text-transform:capitalize}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-date[_ngcontent-%COMP%]{font-size:.875rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]{color:#000;font-family:Helvetica,sans-serif;font-size:1.25rem;font-style:normal;font-weight:400;line-height:127%;letter-spacing:-.01375rem;padding:2.06rem;background-color:#fff;border-radius:.625rem}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]{font-size:1rem;padding:1rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-video[_ngcontent-%COMP%]{width:100%;border-radius:.625rem}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{aspect-ratio:16/9;width:100%;border:0px;border-radius:.625rem}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]{margin-top:1.25rem}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{color:#000;font-family:Helvetica,sans-serif;font-size:1.25rem;font-style:normal;font-weight:500;line-height:120%;letter-spacing:-.01375rem;text-transform:capitalize}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{font-size:.875rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-date[_ngcontent-%COMP%]{display:inline-block;margin-top:1.5rem;color:#404040;font-family:Helvetica,sans-serif;font-size:1rem;font-style:normal;font-weight:400;line-height:120%;letter-spacing:-.011rem;text-transform:capitalize}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .article-info[_ngcontent-%COMP%]   .article-date[_ngcontent-%COMP%]{font-size:.875rem}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{margin-top:3rem!important}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{margin-top:1rem!important}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .reviewer[_ngcontent-%COMP%]{margin-top:1.06rem!important;font-size:1.5rem;font-weight:500}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .reviewer[_ngcontent-%COMP%]{font-size:1rem;margin-top:.8rem!important}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:2.3rem!important;font-size:1.25rem}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:1rem;margin-top:1.44rem!important}}section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{display:inline-block;margin-top:5.75rem;font-size:.875rem;color:#404040}@media (max-width: 600px){section[_ngcontent-%COMP%]   .article-container[_ngcontent-%COMP%]   .review-card[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-top:1.44rem!important;margin-bottom:.5rem;font-size:.8rem}}"]});let e=n;return e})();export{me as PressComponent};
