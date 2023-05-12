(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))Q(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&Q(w)}).observe(document,{childList:!0,subtree:!0});function i(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function Q(o){if(o.ep)return;o.ep=!0;const h=i(o);fetch(o.href,h)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hr="148",AE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ay=0,Yc=1,gy=2,ed=1,ty=2,yn=3,EQ=0,Ji=1,Sn=2,Ho=3,wC=0,DE=1,vc=2,Hc=3,qc=4,Iy=5,lE=100,ey=101,iy=102,Tc=103,_c=104,By=200,Cy=201,Qy=202,Ey=203,id=204,Bd=205,ny=206,oy=207,sy=208,ay=209,ry=210,hy=0,cy=1,ly=2,Cr=3,dy=4,uy=5,Dy=6,fy=7,cr=0,wy=1,py=2,OB=0,yy=1,My=2,my=3,Ry=4,Gy=5,Cd=300,wE=301,pE=302,Qr=303,Er=304,rs=306,nr=1e3,Xi=1001,or=1002,$e=1003,Wc=1004,Sa=1005,Li=1006,Sy=1007,Fn=1008,nQ=1009,Fy=1010,Ny=1011,Qd=1012,Uy=1013,iQ=1014,BQ=1015,Nn=1016,ky=1017,Ly=1018,fE=1020,xy=1021,Jy=1022,zi=1023,by=1024,Ky=1025,CQ=1026,yE=1027,Yy=1028,vy=1029,Hy=1030,qy=1031,Ty=1033,Fa=33776,Na=33777,Ua=33778,ka=33779,Pc=35840,Oc=35841,Vc=35842,Zc=35843,_y=36196,Xc=37492,zc=37496,jc=37808,$c=37809,Al=37810,gl=37811,tl=37812,Il=37813,el=37814,il=37815,Bl=37816,Cl=37817,Ql=37818,El=37819,nl=37820,ol=37821,sl=36492,oQ=3e3,WI=3001,Wy=3200,Py=3201,hs=0,Oy=1,cB="srgb",Un="srgb-linear",La=7680,Vy=519,al=35044,rl="300 es",sr=1035;class hQ{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const Q=this._listeners;Q[t]===void 0&&(Q[t]=[]),Q[t].indexOf(i)===-1&&Q[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const Q=this._listeners;return Q[t]!==void 0&&Q[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const h=o.indexOf(i);h!==-1&&o.splice(h,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const Q=this._listeners[t.type];if(Q!==void 0){t.target=this;const o=Q.slice(0);for(let h=0,w=o.length;h<w;h++)o[h].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const Rn=Math.PI/180,ss=180/Math.PI;function mE(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,Q=Math.random()*4294967295|0;return(He[c&255]+He[c>>8&255]+He[c>>16&255]+He[c>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[i&63|128]+He[i>>8&255]+"-"+He[i>>16&255]+He[i>>24&255]+He[Q&255]+He[Q>>8&255]+He[Q>>16&255]+He[Q>>24&255]).toLowerCase()}function Ai(c,t,i){return Math.max(t,Math.min(i,c))}function lr(c,t){return(c%t+t)%t}function Zy(c,t,i,Q,o){return Q+(c-t)*(o-Q)/(i-t)}function Xy(c,t,i){return c!==t?(i-c)/(t-c):0}function Gn(c,t,i){return(1-i)*c+i*t}function zy(c,t,i,Q){return Gn(c,t,1-Math.exp(-i*Q))}function jy(c,t=1){return t-Math.abs(lr(c,t*2)-t)}function $y(c,t,i){return c<=t?0:c>=i?1:(c=(c-t)/(i-t),c*c*(3-2*c))}function AM(c,t,i){return c<=t?0:c>=i?1:(c=(c-t)/(i-t),c*c*c*(c*(c*6-15)+10))}function gM(c,t){return c+Math.floor(Math.random()*(t-c+1))}function tM(c,t){return c+Math.random()*(t-c)}function IM(c){return c*(.5-Math.random())}function eM(c){c!==void 0&&(hl=c);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iM(c){return c*Rn}function BM(c){return c*ss}function ar(c){return(c&c-1)===0&&c!==0}function CM(c){return Math.pow(2,Math.ceil(Math.log(c)/Math.LN2))}function as(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function QM(c,t,i,Q,o){const h=Math.cos,w=Math.sin,d=h(i/2),F=w(i/2),G=h((t+Q)/2),N=w((t+Q)/2),x=h((t-Q)/2),L=w((t-Q)/2),H=h((Q-t)/2),AA=w((Q-t)/2);switch(o){case"XYX":c.set(d*N,F*x,F*L,d*G);break;case"YZY":c.set(F*L,d*N,F*x,d*G);break;case"ZXZ":c.set(F*x,F*L,d*N,d*G);break;case"XZX":c.set(d*N,F*AA,F*H,d*G);break;case"YXY":c.set(F*H,d*N,F*AA,d*G);break;case"ZYZ":c.set(F*AA,F*H,d*N,d*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Mn(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Bi(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}var EM=Object.freeze({__proto__:null,DEG2RAD:Rn,RAD2DEG:ss,generateUUID:mE,clamp:Ai,euclideanModulo:lr,mapLinear:Zy,inverseLerp:Xy,lerp:Gn,damp:zy,pingpong:jy,smoothstep:$y,smootherstep:AM,randInt:gM,randFloat:tM,randFloatSpread:IM,seededRandom:eM,degToRad:iM,radToDeg:BM,isPowerOfTwo:ar,ceilPowerOfTwo:CM,floorPowerOfTwo:as,setQuaternionFromProperEuler:QM,normalize:Bi,denormalize:Mn});class tI{constructor(t=0,i=0){tI.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,Q=this.y,o=t.elements;return this.x=o[0]*i+o[3]*Q+o[6],this.y=o[1]*i+o[4]*Q+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(t,Math.min(i,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,Q=this.y-t.y;return i*i+Q*Q}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,Q){return this.x=t.x+(i.x-t.x)*Q,this.y=t.y+(i.y-t.y)*Q,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const Q=Math.cos(i),o=Math.sin(i),h=this.x-t.x,w=this.y-t.y;return this.x=h*Q-w*o+t.x,this.y=h*o+w*Q+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(){Di.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,i,Q,o,h,w,d,F,G){const N=this.elements;return N[0]=t,N[1]=o,N[2]=d,N[3]=i,N[4]=h,N[5]=F,N[6]=Q,N[7]=w,N[8]=G,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,Q=t.elements;return i[0]=Q[0],i[1]=Q[1],i[2]=Q[2],i[3]=Q[3],i[4]=Q[4],i[5]=Q[5],i[6]=Q[6],i[7]=Q[7],i[8]=Q[8],this}extractBasis(t,i,Q){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const Q=t.elements,o=i.elements,h=this.elements,w=Q[0],d=Q[3],F=Q[6],G=Q[1],N=Q[4],x=Q[7],L=Q[2],H=Q[5],AA=Q[8],J=o[0],U=o[3],X=o[6],oA=o[1],nA=o[4],cA=o[7],eA=o[2],MA=o[5],qA=o[8];return h[0]=w*J+d*oA+F*eA,h[3]=w*U+d*nA+F*MA,h[6]=w*X+d*cA+F*qA,h[1]=G*J+N*oA+x*eA,h[4]=G*U+N*nA+x*MA,h[7]=G*X+N*cA+x*qA,h[2]=L*J+H*oA+AA*eA,h[5]=L*U+H*nA+AA*MA,h[8]=L*X+H*cA+AA*qA,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],Q=t[1],o=t[2],h=t[3],w=t[4],d=t[5],F=t[6],G=t[7],N=t[8];return i*w*N-i*d*G-Q*h*N+Q*d*F+o*h*G-o*w*F}invert(){const t=this.elements,i=t[0],Q=t[1],o=t[2],h=t[3],w=t[4],d=t[5],F=t[6],G=t[7],N=t[8],x=N*w-d*G,L=d*F-N*h,H=G*h-w*F,AA=i*x+Q*L+o*H;if(AA===0)return this.set(0,0,0,0,0,0,0,0,0);const J=1/AA;return t[0]=x*J,t[1]=(o*G-N*Q)*J,t[2]=(d*Q-o*w)*J,t[3]=L*J,t[4]=(N*i-o*F)*J,t[5]=(o*h-d*i)*J,t[6]=H*J,t[7]=(Q*F-G*i)*J,t[8]=(w*i-Q*h)*J,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,Q,o,h,w,d){const F=Math.cos(h),G=Math.sin(h);return this.set(Q*F,Q*G,-Q*(F*w+G*d)+w+t,-o*G,o*F,-o*(-G*w+F*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xa.makeScale(t,i)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,i){return this.premultiply(xa.makeTranslation(t,i)),this}makeTranslation(t,i){return this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),Q=Math.sin(t);return this.set(i,-Q,0,Q,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,Q=t.elements;for(let o=0;o<9;o++)if(i[o]!==Q[o])return!1;return!0}fromArray(t,i=0){for(let Q=0;Q<9;Q++)this.elements[Q]=t[Q+i];return this}toArray(t=[],i=0){const Q=this.elements;return t[i]=Q[0],t[i+1]=Q[1],t[i+2]=Q[2],t[i+3]=Q[3],t[i+4]=Q[4],t[i+5]=Q[5],t[i+6]=Q[6],t[i+7]=Q[7],t[i+8]=Q[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Di;function Ed(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function kn(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function QQ(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function ns(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Ja={[cB]:{[Un]:QQ},[Un]:{[cB]:ns}},ze={legacyMode:!0,get workingColorSpace(){return Un},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,i){if(this.legacyMode||t===i||!t||!i)return c;if(Ja[t]&&Ja[t][i]!==void 0){const Q=Ja[t][i];return c.r=Q(c.r),c.g=Q(c.g),c.b=Q(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pe={r:0,g:0,b:0},Oi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function ba(c,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?c+(t-c)*6*i:i<1/2?t:i<2/3?c+(t-c)*6*(2/3-i):c}function To(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class xI{constructor(t,i,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&Q===void 0?this.set(t):this.setRGB(t,i,Q)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=cB){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(t,i,Q,o=ze.workingColorSpace){return this.r=t,this.g=i,this.b=Q,ze.toWorkingColorSpace(this,o),this}setHSL(t,i,Q,o=ze.workingColorSpace){if(t=lr(t,1),i=Ai(i,0,1),Q=Ai(Q,0,1),i===0)this.r=this.g=this.b=Q;else{const h=Q<=.5?Q*(1+i):Q+i-Q*i,w=2*Q-h;this.r=ba(w,h,t+1/3),this.g=ba(w,h,t),this.b=ba(w,h,t-1/3)}return ze.toWorkingColorSpace(this,o),this}setStyle(t,i=cB){function Q(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let h;const w=o[1],d=o[2];switch(w){case"rgb":case"rgba":if(h=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(h[1],10))/255,this.g=Math.min(255,parseInt(h[2],10))/255,this.b=Math.min(255,parseInt(h[3],10))/255,ze.toWorkingColorSpace(this,i),Q(h[4]),this;if(h=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(h[1],10))/100,this.g=Math.min(100,parseInt(h[2],10))/100,this.b=Math.min(100,parseInt(h[3],10))/100,ze.toWorkingColorSpace(this,i),Q(h[4]),this;break;case"hsl":case"hsla":if(h=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)){const F=parseFloat(h[1])/360,G=parseFloat(h[2])/100,N=parseFloat(h[3])/100;return Q(h[4]),this.setHSL(F,G,N,i)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const h=o[1],w=h.length;if(w===3)return this.r=parseInt(h.charAt(0)+h.charAt(0),16)/255,this.g=parseInt(h.charAt(1)+h.charAt(1),16)/255,this.b=parseInt(h.charAt(2)+h.charAt(2),16)/255,ze.toWorkingColorSpace(this,i),this;if(w===6)return this.r=parseInt(h.charAt(0)+h.charAt(1),16)/255,this.g=parseInt(h.charAt(2)+h.charAt(3),16)/255,this.b=parseInt(h.charAt(4)+h.charAt(5),16)/255,ze.toWorkingColorSpace(this,i),this}return t&&t.length>0?this.setColorName(t,i):this}setColorName(t,i=cB){const Q=nd[t.toLowerCase()];return Q!==void 0?this.setHex(Q,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=QQ(t.r),this.g=QQ(t.g),this.b=QQ(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cB){return ze.fromWorkingColorSpace(To(this,pe),t),Ai(pe.r*255,0,255)<<16^Ai(pe.g*255,0,255)<<8^Ai(pe.b*255,0,255)<<0}getHexString(t=cB){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.fromWorkingColorSpace(To(this,pe),i);const Q=pe.r,o=pe.g,h=pe.b,w=Math.max(Q,o,h),d=Math.min(Q,o,h);let F,G;const N=(d+w)/2;if(d===w)F=0,G=0;else{const x=w-d;switch(G=N<=.5?x/(w+d):x/(2-w-d),w){case Q:F=(o-h)/x+(o<h?6:0);break;case o:F=(h-Q)/x+2;break;case h:F=(Q-o)/x+4;break}F/=6}return t.h=F,t.s=G,t.l=N,t}getRGB(t,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(To(this,pe),i),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=cB){return ze.fromWorkingColorSpace(To(this,pe),t),t!==cB?`color(${t} ${pe.r} ${pe.g} ${pe.b})`:`rgb(${pe.r*255|0},${pe.g*255|0},${pe.b*255|0})`}offsetHSL(t,i,Q){return this.getHSL(Oi),Oi.h+=t,Oi.s+=i,Oi.l+=Q,this.setHSL(Oi.h,Oi.s,Oi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,Q){return this.r=t.r+(i.r-t.r)*Q,this.g=t.g+(i.g-t.g)*Q,this.b=t.b+(i.b-t.b)*Q,this}lerpHSL(t,i){this.getHSL(Oi),t.getHSL(qo);const Q=Gn(Oi.h,qo.h,i),o=Gn(Oi.s,qo.s,i),h=Gn(Oi.l,qo.l,i);return this.setHSL(Q,o,h),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xI.NAMES=nd;let tE;class od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tE===void 0&&(tE=kn("canvas")),tE.width=t.width,tE.height=t.height;const Q=tE.getContext("2d");t instanceof ImageData?Q.putImageData(t,0,0):Q.drawImage(t,0,0,t.width,t.height),i=tE}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kn("canvas");i.width=t.width,i.height=t.height;const Q=i.getContext("2d");Q.drawImage(t,0,0,t.width,t.height);const o=Q.getImageData(0,0,t.width,t.height),h=o.data;for(let w=0;w<h.length;w++)h[w]=QQ(h[w]/255)*255;return Q.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let Q=0;Q<i.length;Q++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[Q]=Math.floor(QQ(i[Q]/255)*255):i[Q]=QQ(i[Q]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class sd{constructor(t=null){this.isSource=!0,this.uuid=mE(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const Q={uuid:this.uuid,url:""},o=this.data;if(o!==null){let h;if(Array.isArray(o)){h=[];for(let w=0,d=o.length;w<d;w++)o[w].isDataTexture?h.push(Ka(o[w].image)):h.push(Ka(o[w]))}else h=Ka(o);Q.url=h}return i||(t.images[this.uuid]=Q),Q}}function Ka(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?od.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;class Ci extends hQ{constructor(t=Ci.DEFAULT_IMAGE,i=Ci.DEFAULT_MAPPING,Q=Xi,o=Xi,h=Li,w=Fn,d=zi,F=nQ,G=Ci.DEFAULT_ANISOTROPY,N=oQ){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=mE(),this.name="",this.source=new sd(t),this.mipmaps=[],this.mapping=i,this.wrapS=Q,this.wrapT=o,this.magFilter=h,this.minFilter=w,this.anisotropy=G,this.format=d,this.internalFormat=null,this.type=F,this.offset=new tI(0,0),this.repeat=new tI(1,1),this.center=new tI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Di,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=N,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const Q={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(Q.userData=this.userData),i||(t.textures[this.uuid]=Q),Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=Cd;Ci.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,i=0,Q=0,o=1){Ue.prototype.isVector4=!0,this.x=t,this.y=i,this.z=Q,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,Q,o){return this.x=t,this.y=i,this.z=Q,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,Q=this.y,o=this.z,h=this.w,w=t.elements;return this.x=w[0]*i+w[4]*Q+w[8]*o+w[12]*h,this.y=w[1]*i+w[5]*Q+w[9]*o+w[13]*h,this.z=w[2]*i+w[6]*Q+w[10]*o+w[14]*h,this.w=w[3]*i+w[7]*Q+w[11]*o+w[15]*h,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,Q,o,h;const F=t.elements,G=F[0],N=F[4],x=F[8],L=F[1],H=F[5],AA=F[9],J=F[2],U=F[6],X=F[10];if(Math.abs(N-L)<.01&&Math.abs(x-J)<.01&&Math.abs(AA-U)<.01){if(Math.abs(N+L)<.1&&Math.abs(x+J)<.1&&Math.abs(AA+U)<.1&&Math.abs(G+H+X-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const nA=(G+1)/2,cA=(H+1)/2,eA=(X+1)/2,MA=(N+L)/4,qA=(x+J)/4,P=(AA+U)/4;return nA>cA&&nA>eA?nA<.01?(Q=0,o=.707106781,h=.707106781):(Q=Math.sqrt(nA),o=MA/Q,h=qA/Q):cA>eA?cA<.01?(Q=.707106781,o=0,h=.707106781):(o=Math.sqrt(cA),Q=MA/o,h=P/o):eA<.01?(Q=.707106781,o=.707106781,h=0):(h=Math.sqrt(eA),Q=qA/h,o=P/h),this.set(Q,o,h,i),this}let oA=Math.sqrt((U-AA)*(U-AA)+(x-J)*(x-J)+(L-N)*(L-N));return Math.abs(oA)<.001&&(oA=1),this.x=(U-AA)/oA,this.y=(x-J)/oA,this.z=(L-N)/oA,this.w=Math.acos((G+H+X-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(t,Math.min(i,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,Q){return this.x=t.x+(i.x-t.x)*Q,this.y=t.y+(i.y-t.y)*Q,this.z=t.z+(i.z-t.z)*Q,this.w=t.w+(i.w-t.w)*Q,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sQ extends hQ{constructor(t=1,i=1,Q={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ue(0,0,t,i),this.scissorTest=!1,this.viewport=new Ue(0,0,t,i);const o={width:t,height:i,depth:1};this.texture=new Ci(o,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.internalFormat=Q.internalFormat!==void 0?Q.internalFormat:null,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:Li,this.depthBuffer=Q.depthBuffer!==void 0?Q.depthBuffer:!0,this.stencilBuffer=Q.stencilBuffer!==void 0?Q.stencilBuffer:!1,this.depthTexture=Q.depthTexture!==void 0?Q.depthTexture:null,this.samples=Q.samples!==void 0?Q.samples:0}setSize(t,i,Q=1){(this.width!==t||this.height!==i||this.depth!==Q)&&(this.width=t,this.height=i,this.depth=Q,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=Q,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new sd(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ad extends Ci{constructor(t=null,i=1,Q=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:Q,depth:o},this.magFilter=$e,this.minFilter=$e,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends Ci{constructor(t=null,i=1,Q=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:Q,depth:o},this.magFilter=$e,this.minFilter=$e,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aQ{constructor(t=0,i=0,Q=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=Q,this._w=o}static slerpFlat(t,i,Q,o,h,w,d){let F=Q[o+0],G=Q[o+1],N=Q[o+2],x=Q[o+3];const L=h[w+0],H=h[w+1],AA=h[w+2],J=h[w+3];if(d===0){t[i+0]=F,t[i+1]=G,t[i+2]=N,t[i+3]=x;return}if(d===1){t[i+0]=L,t[i+1]=H,t[i+2]=AA,t[i+3]=J;return}if(x!==J||F!==L||G!==H||N!==AA){let U=1-d;const X=F*L+G*H+N*AA+x*J,oA=X>=0?1:-1,nA=1-X*X;if(nA>Number.EPSILON){const eA=Math.sqrt(nA),MA=Math.atan2(eA,X*oA);U=Math.sin(U*MA)/eA,d=Math.sin(d*MA)/eA}const cA=d*oA;if(F=F*U+L*cA,G=G*U+H*cA,N=N*U+AA*cA,x=x*U+J*cA,U===1-d){const eA=1/Math.sqrt(F*F+G*G+N*N+x*x);F*=eA,G*=eA,N*=eA,x*=eA}}t[i]=F,t[i+1]=G,t[i+2]=N,t[i+3]=x}static multiplyQuaternionsFlat(t,i,Q,o,h,w){const d=Q[o],F=Q[o+1],G=Q[o+2],N=Q[o+3],x=h[w],L=h[w+1],H=h[w+2],AA=h[w+3];return t[i]=d*AA+N*x+F*H-G*L,t[i+1]=F*AA+N*L+G*x-d*H,t[i+2]=G*AA+N*H+d*L-F*x,t[i+3]=N*AA-d*x-F*L-G*H,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,Q,o){return this._x=t,this._y=i,this._z=Q,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i){const Q=t._x,o=t._y,h=t._z,w=t._order,d=Math.cos,F=Math.sin,G=d(Q/2),N=d(o/2),x=d(h/2),L=F(Q/2),H=F(o/2),AA=F(h/2);switch(w){case"XYZ":this._x=L*N*x+G*H*AA,this._y=G*H*x-L*N*AA,this._z=G*N*AA+L*H*x,this._w=G*N*x-L*H*AA;break;case"YXZ":this._x=L*N*x+G*H*AA,this._y=G*H*x-L*N*AA,this._z=G*N*AA-L*H*x,this._w=G*N*x+L*H*AA;break;case"ZXY":this._x=L*N*x-G*H*AA,this._y=G*H*x+L*N*AA,this._z=G*N*AA+L*H*x,this._w=G*N*x-L*H*AA;break;case"ZYX":this._x=L*N*x-G*H*AA,this._y=G*H*x+L*N*AA,this._z=G*N*AA-L*H*x,this._w=G*N*x+L*H*AA;break;case"YZX":this._x=L*N*x+G*H*AA,this._y=G*H*x+L*N*AA,this._z=G*N*AA-L*H*x,this._w=G*N*x-L*H*AA;break;case"XZY":this._x=L*N*x-G*H*AA,this._y=G*H*x-L*N*AA,this._z=G*N*AA+L*H*x,this._w=G*N*x+L*H*AA;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+w)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const Q=i/2,o=Math.sin(Q);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,Q=i[0],o=i[4],h=i[8],w=i[1],d=i[5],F=i[9],G=i[2],N=i[6],x=i[10],L=Q+d+x;if(L>0){const H=.5/Math.sqrt(L+1);this._w=.25/H,this._x=(N-F)*H,this._y=(h-G)*H,this._z=(w-o)*H}else if(Q>d&&Q>x){const H=2*Math.sqrt(1+Q-d-x);this._w=(N-F)/H,this._x=.25*H,this._y=(o+w)/H,this._z=(h+G)/H}else if(d>x){const H=2*Math.sqrt(1+d-Q-x);this._w=(h-G)/H,this._x=(o+w)/H,this._y=.25*H,this._z=(F+N)/H}else{const H=2*Math.sqrt(1+x-Q-d);this._w=(w-o)/H,this._x=(h+G)/H,this._y=(F+N)/H,this._z=.25*H}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let Q=t.dot(i)+1;return Q<Number.EPSILON?(Q=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=Q):(this._x=0,this._y=-t.z,this._z=t.y,this._w=Q)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=Q),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ai(this.dot(t),-1,1)))}rotateTowards(t,i){const Q=this.angleTo(t);if(Q===0)return this;const o=Math.min(1,i/Q);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const Q=t._x,o=t._y,h=t._z,w=t._w,d=i._x,F=i._y,G=i._z,N=i._w;return this._x=Q*N+w*d+o*G-h*F,this._y=o*N+w*F+h*d-Q*G,this._z=h*N+w*G+Q*F-o*d,this._w=w*N-Q*d-o*F-h*G,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const Q=this._x,o=this._y,h=this._z,w=this._w;let d=w*t._w+Q*t._x+o*t._y+h*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=w,this._x=Q,this._y=o,this._z=h,this;const F=1-d*d;if(F<=Number.EPSILON){const H=1-i;return this._w=H*w+i*this._w,this._x=H*Q+i*this._x,this._y=H*o+i*this._y,this._z=H*h+i*this._z,this.normalize(),this._onChangeCallback(),this}const G=Math.sqrt(F),N=Math.atan2(G,d),x=Math.sin((1-i)*N)/G,L=Math.sin(i*N)/G;return this._w=w*x+this._w*L,this._x=Q*x+this._x*L,this._y=o*x+this._y*L,this._z=h*x+this._z*L,this._onChangeCallback(),this}slerpQuaternions(t,i,Q){return this.copy(t).slerp(i,Q)}random(){const t=Math.random(),i=Math.sqrt(1-t),Q=Math.sqrt(t),o=2*Math.PI*Math.random(),h=2*Math.PI*Math.random();return this.set(i*Math.cos(o),Q*Math.sin(h),Q*Math.cos(h),i*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class OA{constructor(t=0,i=0,Q=0){OA.prototype.isVector3=!0,this.x=t,this.y=i,this.z=Q}set(t,i,Q){return Q===void 0&&(Q=this.z),this.x=t,this.y=i,this.z=Q,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(cl.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,Q=this.y,o=this.z,h=t.elements;return this.x=h[0]*i+h[3]*Q+h[6]*o,this.y=h[1]*i+h[4]*Q+h[7]*o,this.z=h[2]*i+h[5]*Q+h[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,Q=this.y,o=this.z,h=t.elements,w=1/(h[3]*i+h[7]*Q+h[11]*o+h[15]);return this.x=(h[0]*i+h[4]*Q+h[8]*o+h[12])*w,this.y=(h[1]*i+h[5]*Q+h[9]*o+h[13])*w,this.z=(h[2]*i+h[6]*Q+h[10]*o+h[14])*w,this}applyQuaternion(t){const i=this.x,Q=this.y,o=this.z,h=t.x,w=t.y,d=t.z,F=t.w,G=F*i+w*o-d*Q,N=F*Q+d*i-h*o,x=F*o+h*Q-w*i,L=-h*i-w*Q-d*o;return this.x=G*F+L*-h+N*-d-x*-w,this.y=N*F+L*-w+x*-h-G*-d,this.z=x*F+L*-d+G*-w-N*-h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,Q=this.y,o=this.z,h=t.elements;return this.x=h[0]*i+h[4]*Q+h[8]*o,this.y=h[1]*i+h[5]*Q+h[9]*o,this.z=h[2]*i+h[6]*Q+h[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(t,Math.min(i,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,Q){return this.x=t.x+(i.x-t.x)*Q,this.y=t.y+(i.y-t.y)*Q,this.z=t.z+(i.z-t.z)*Q,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const Q=t.x,o=t.y,h=t.z,w=i.x,d=i.y,F=i.z;return this.x=o*F-h*d,this.y=h*w-Q*F,this.z=Q*d-o*w,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const Q=t.dot(this)/i;return this.copy(t).multiplyScalar(Q)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const Q=this.dot(t)/i;return Math.acos(Ai(Q,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,Q=this.y-t.y,o=this.z-t.z;return i*i+Q*Q+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,Q){const o=Math.sin(i)*t;return this.x=o*Math.sin(Q),this.y=Math.cos(i)*t,this.z=o*Math.cos(Q),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,Q){return this.x=t*Math.sin(i),this.y=Q,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),Q=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=Q,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,Q=Math.sqrt(1-t**2);return this.x=Q*Math.cos(i),this.y=Q*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new OA,cl=new aQ;class Ln{constructor(t=new OA(1/0,1/0,1/0),i=new OA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){let i=1/0,Q=1/0,o=1/0,h=-1/0,w=-1/0,d=-1/0;for(let F=0,G=t.length;F<G;F+=3){const N=t[F],x=t[F+1],L=t[F+2];N<i&&(i=N),x<Q&&(Q=x),L<o&&(o=L),N>h&&(h=N),x>w&&(w=x),L>d&&(d=L)}return this.min.set(i,Q,o),this.max.set(h,w,d),this}setFromBufferAttribute(t){let i=1/0,Q=1/0,o=1/0,h=-1/0,w=-1/0,d=-1/0;for(let F=0,G=t.count;F<G;F++){const N=t.getX(F),x=t.getY(F),L=t.getZ(F);N<i&&(i=N),x<Q&&(Q=x),L<o&&(o=L),N>h&&(h=N),x>w&&(w=x),L>d&&(d=L)}return this.min.set(i,Q,o),this.max.set(h,w,d),this}setFromPoints(t){this.makeEmpty();for(let i=0,Q=t.length;i<Q;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const Q=jC.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(Q),this.max.copy(t).add(Q),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const Q=t.geometry;if(Q!==void 0)if(i&&Q.attributes!=null&&Q.attributes.position!==void 0){const h=Q.attributes.position;for(let w=0,d=h.count;w<d;w++)jC.fromBufferAttribute(h,w).applyMatrix4(t.matrixWorld),this.expandByPoint(jC)}else Q.boundingBox===null&&Q.computeBoundingBox(),va.copy(Q.boundingBox),va.applyMatrix4(t.matrixWorld),this.union(va);const o=t.children;for(let h=0,w=o.length;h<w;h++)this.expandByObject(o[h],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jC),jC.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,Q;return t.normal.x>0?(i=t.normal.x*this.min.x,Q=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,Q=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,Q+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,Q+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,Q+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,Q+=t.normal.z*this.min.z),i<=-t.constant&&Q>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cn),_o.subVectors(this.max,cn),IE.subVectors(t.a,cn),eE.subVectors(t.b,cn),iE.subVectors(t.c,cn),lC.subVectors(eE,IE),dC.subVectors(iE,eE),$C.subVectors(IE,iE);let i=[0,-lC.z,lC.y,0,-dC.z,dC.y,0,-$C.z,$C.y,lC.z,0,-lC.x,dC.z,0,-dC.x,$C.z,0,-$C.x,-lC.y,lC.x,0,-dC.y,dC.x,0,-$C.y,$C.x,0];return!Ha(i,IE,eE,iE,_o)||(i=[1,0,0,0,1,0,0,0,1],!Ha(i,IE,eE,iE,_o))?!1:(Wo.crossVectors(lC,dC),i=[Wo.x,Wo.y,Wo.z],Ha(i,IE,eE,iE,_o))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jC.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(jC).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(HB[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),HB[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),HB[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),HB[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),HB[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),HB[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),HB[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),HB[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(HB),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const HB=[new OA,new OA,new OA,new OA,new OA,new OA,new OA,new OA],jC=new OA,va=new Ln,IE=new OA,eE=new OA,iE=new OA,lC=new OA,dC=new OA,$C=new OA,cn=new OA,_o=new OA,Wo=new OA,AQ=new OA;function Ha(c,t,i,Q,o){for(let h=0,w=c.length-3;h<=w;h+=3){AQ.fromArray(c,h);const d=o.x*Math.abs(AQ.x)+o.y*Math.abs(AQ.y)+o.z*Math.abs(AQ.z),F=t.dot(AQ),G=i.dot(AQ),N=Q.dot(AQ);if(Math.max(-Math.max(F,G,N),Math.min(F,G,N))>d)return!1}return!0}const sM=new Ln,ln=new OA,qa=new OA;class dr{constructor(t=new OA,i=-1){this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const Q=this.center;i!==void 0?Q.copy(i):sM.setFromPoints(t).getCenter(Q);let o=0;for(let h=0,w=t.length;h<w;h++)o=Math.max(o,Q.distanceToSquared(t[h]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const Q=this.center.distanceToSquared(t);return i.copy(t),Q>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ln.subVectors(t,this.center);const i=ln.lengthSq();if(i>this.radius*this.radius){const Q=Math.sqrt(i),o=(Q-this.radius)*.5;this.center.addScaledVector(ln,o/Q),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ln.copy(t.center).add(qa)),this.expandByPoint(ln.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qB=new OA,Ta=new OA,Po=new OA,uC=new OA,_a=new OA,Oo=new OA,Wa=new OA;class aM{constructor(t=new OA,i=new OA(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qB)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const Q=i.dot(this.direction);return Q<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(Q).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=qB.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(qB.copy(this.direction).multiplyScalar(i).add(this.origin),qB.distanceToSquared(t))}distanceSqToSegment(t,i,Q,o){Ta.copy(t).add(i).multiplyScalar(.5),Po.copy(i).sub(t).normalize(),uC.copy(this.origin).sub(Ta);const h=t.distanceTo(i)*.5,w=-this.direction.dot(Po),d=uC.dot(this.direction),F=-uC.dot(Po),G=uC.lengthSq(),N=Math.abs(1-w*w);let x,L,H,AA;if(N>0)if(x=w*F-d,L=w*d-F,AA=h*N,x>=0)if(L>=-AA)if(L<=AA){const J=1/N;x*=J,L*=J,H=x*(x+w*L+2*d)+L*(w*x+L+2*F)+G}else L=h,x=Math.max(0,-(w*L+d)),H=-x*x+L*(L+2*F)+G;else L=-h,x=Math.max(0,-(w*L+d)),H=-x*x+L*(L+2*F)+G;else L<=-AA?(x=Math.max(0,-(-w*h+d)),L=x>0?-h:Math.min(Math.max(-h,-F),h),H=-x*x+L*(L+2*F)+G):L<=AA?(x=0,L=Math.min(Math.max(-h,-F),h),H=L*(L+2*F)+G):(x=Math.max(0,-(w*h+d)),L=x>0?h:Math.min(Math.max(-h,-F),h),H=-x*x+L*(L+2*F)+G);else L=w>0?-h:h,x=Math.max(0,-(w*L+d)),H=-x*x+L*(L+2*F)+G;return Q&&Q.copy(this.direction).multiplyScalar(x).add(this.origin),o&&o.copy(Po).multiplyScalar(L).add(Ta),H}intersectSphere(t,i){qB.subVectors(t.center,this.origin);const Q=qB.dot(this.direction),o=qB.dot(qB)-Q*Q,h=t.radius*t.radius;if(o>h)return null;const w=Math.sqrt(h-o),d=Q-w,F=Q+w;return d<0&&F<0?null:d<0?this.at(F,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const Q=-(this.origin.dot(t.normal)+t.constant)/i;return Q>=0?Q:null}intersectPlane(t,i){const Q=this.distanceToPlane(t);return Q===null?null:this.at(Q,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let Q,o,h,w,d,F;const G=1/this.direction.x,N=1/this.direction.y,x=1/this.direction.z,L=this.origin;return G>=0?(Q=(t.min.x-L.x)*G,o=(t.max.x-L.x)*G):(Q=(t.max.x-L.x)*G,o=(t.min.x-L.x)*G),N>=0?(h=(t.min.y-L.y)*N,w=(t.max.y-L.y)*N):(h=(t.max.y-L.y)*N,w=(t.min.y-L.y)*N),Q>w||h>o||((h>Q||isNaN(Q))&&(Q=h),(w<o||isNaN(o))&&(o=w),x>=0?(d=(t.min.z-L.z)*x,F=(t.max.z-L.z)*x):(d=(t.max.z-L.z)*x,F=(t.min.z-L.z)*x),Q>F||d>o)||((d>Q||Q!==Q)&&(Q=d),(F<o||o!==o)&&(o=F),o<0)?null:this.at(Q>=0?Q:o,i)}intersectsBox(t){return this.intersectBox(t,qB)!==null}intersectTriangle(t,i,Q,o,h){_a.subVectors(i,t),Oo.subVectors(Q,t),Wa.crossVectors(_a,Oo);let w=this.direction.dot(Wa),d;if(w>0){if(o)return null;d=1}else if(w<0)d=-1,w=-w;else return null;uC.subVectors(this.origin,t);const F=d*this.direction.dot(Oo.crossVectors(uC,Oo));if(F<0)return null;const G=d*this.direction.dot(_a.cross(uC));if(G<0||F+G>w)return null;const N=-d*uC.dot(Wa);return N<0?null:this.at(N/w,h)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,i,Q,o,h,w,d,F,G,N,x,L,H,AA,J,U){const X=this.elements;return X[0]=t,X[4]=i,X[8]=Q,X[12]=o,X[1]=h,X[5]=w,X[9]=d,X[13]=F,X[2]=G,X[6]=N,X[10]=x,X[14]=L,X[3]=H,X[7]=AA,X[11]=J,X[15]=U,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const i=this.elements,Q=t.elements;return i[0]=Q[0],i[1]=Q[1],i[2]=Q[2],i[3]=Q[3],i[4]=Q[4],i[5]=Q[5],i[6]=Q[6],i[7]=Q[7],i[8]=Q[8],i[9]=Q[9],i[10]=Q[10],i[11]=Q[11],i[12]=Q[12],i[13]=Q[13],i[14]=Q[14],i[15]=Q[15],this}copyPosition(t){const i=this.elements,Q=t.elements;return i[12]=Q[12],i[13]=Q[13],i[14]=Q[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,Q){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(t,i,Q){return this.set(t.x,i.x,Q.x,0,t.y,i.y,Q.y,0,t.z,i.z,Q.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,Q=t.elements,o=1/BE.setFromMatrixColumn(t,0).length(),h=1/BE.setFromMatrixColumn(t,1).length(),w=1/BE.setFromMatrixColumn(t,2).length();return i[0]=Q[0]*o,i[1]=Q[1]*o,i[2]=Q[2]*o,i[3]=0,i[4]=Q[4]*h,i[5]=Q[5]*h,i[6]=Q[6]*h,i[7]=0,i[8]=Q[8]*w,i[9]=Q[9]*w,i[10]=Q[10]*w,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,Q=t.x,o=t.y,h=t.z,w=Math.cos(Q),d=Math.sin(Q),F=Math.cos(o),G=Math.sin(o),N=Math.cos(h),x=Math.sin(h);if(t.order==="XYZ"){const L=w*N,H=w*x,AA=d*N,J=d*x;i[0]=F*N,i[4]=-F*x,i[8]=G,i[1]=H+AA*G,i[5]=L-J*G,i[9]=-d*F,i[2]=J-L*G,i[6]=AA+H*G,i[10]=w*F}else if(t.order==="YXZ"){const L=F*N,H=F*x,AA=G*N,J=G*x;i[0]=L+J*d,i[4]=AA*d-H,i[8]=w*G,i[1]=w*x,i[5]=w*N,i[9]=-d,i[2]=H*d-AA,i[6]=J+L*d,i[10]=w*F}else if(t.order==="ZXY"){const L=F*N,H=F*x,AA=G*N,J=G*x;i[0]=L-J*d,i[4]=-w*x,i[8]=AA+H*d,i[1]=H+AA*d,i[5]=w*N,i[9]=J-L*d,i[2]=-w*G,i[6]=d,i[10]=w*F}else if(t.order==="ZYX"){const L=w*N,H=w*x,AA=d*N,J=d*x;i[0]=F*N,i[4]=AA*G-H,i[8]=L*G+J,i[1]=F*x,i[5]=J*G+L,i[9]=H*G-AA,i[2]=-G,i[6]=d*F,i[10]=w*F}else if(t.order==="YZX"){const L=w*F,H=w*G,AA=d*F,J=d*G;i[0]=F*N,i[4]=J-L*x,i[8]=AA*x+H,i[1]=x,i[5]=w*N,i[9]=-d*N,i[2]=-G*N,i[6]=H*x+AA,i[10]=L-J*x}else if(t.order==="XZY"){const L=w*F,H=w*G,AA=d*F,J=d*G;i[0]=F*N,i[4]=-x,i[8]=G*N,i[1]=L*x+J,i[5]=w*N,i[9]=H*x-AA,i[2]=AA*x-H,i[6]=d*N,i[10]=J*x+L}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rM,t,hM)}lookAt(t,i,Q){const o=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),DC.crossVectors(Q,di),DC.lengthSq()===0&&(Math.abs(Q.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),DC.crossVectors(Q,di)),DC.normalize(),Vo.crossVectors(di,DC),o[0]=DC.x,o[4]=Vo.x,o[8]=di.x,o[1]=DC.y,o[5]=Vo.y,o[9]=di.y,o[2]=DC.z,o[6]=Vo.z,o[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const Q=t.elements,o=i.elements,h=this.elements,w=Q[0],d=Q[4],F=Q[8],G=Q[12],N=Q[1],x=Q[5],L=Q[9],H=Q[13],AA=Q[2],J=Q[6],U=Q[10],X=Q[14],oA=Q[3],nA=Q[7],cA=Q[11],eA=Q[15],MA=o[0],qA=o[4],P=o[8],wA=o[12],WA=o[1],eg=o[5],bg=o[9],kA=o[13],JA=o[2],gg=o[6],yg=o[10],mg=o[14],Bg=o[3],O=o[7],j=o[11],gA=o[15];return h[0]=w*MA+d*WA+F*JA+G*Bg,h[4]=w*qA+d*eg+F*gg+G*O,h[8]=w*P+d*bg+F*yg+G*j,h[12]=w*wA+d*kA+F*mg+G*gA,h[1]=N*MA+x*WA+L*JA+H*Bg,h[5]=N*qA+x*eg+L*gg+H*O,h[9]=N*P+x*bg+L*yg+H*j,h[13]=N*wA+x*kA+L*mg+H*gA,h[2]=AA*MA+J*WA+U*JA+X*Bg,h[6]=AA*qA+J*eg+U*gg+X*O,h[10]=AA*P+J*bg+U*yg+X*j,h[14]=AA*wA+J*kA+U*mg+X*gA,h[3]=oA*MA+nA*WA+cA*JA+eA*Bg,h[7]=oA*qA+nA*eg+cA*gg+eA*O,h[11]=oA*P+nA*bg+cA*yg+eA*j,h[15]=oA*wA+nA*kA+cA*mg+eA*gA,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],Q=t[4],o=t[8],h=t[12],w=t[1],d=t[5],F=t[9],G=t[13],N=t[2],x=t[6],L=t[10],H=t[14],AA=t[3],J=t[7],U=t[11],X=t[15];return AA*(+h*F*x-o*G*x-h*d*L+Q*G*L+o*d*H-Q*F*H)+J*(+i*F*H-i*G*L+h*w*L-o*w*H+o*G*N-h*F*N)+U*(+i*G*x-i*d*H-h*w*x+Q*w*H+h*d*N-Q*G*N)+X*(-o*d*N-i*F*x+i*d*L+o*w*x-Q*w*L+Q*F*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,Q){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=Q),this}invert(){const t=this.elements,i=t[0],Q=t[1],o=t[2],h=t[3],w=t[4],d=t[5],F=t[6],G=t[7],N=t[8],x=t[9],L=t[10],H=t[11],AA=t[12],J=t[13],U=t[14],X=t[15],oA=x*U*G-J*L*G+J*F*H-d*U*H-x*F*X+d*L*X,nA=AA*L*G-N*U*G-AA*F*H+w*U*H+N*F*X-w*L*X,cA=N*J*G-AA*x*G+AA*d*H-w*J*H-N*d*X+w*x*X,eA=AA*x*F-N*J*F-AA*d*L+w*J*L+N*d*U-w*x*U,MA=i*oA+Q*nA+o*cA+h*eA;if(MA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const qA=1/MA;return t[0]=oA*qA,t[1]=(J*L*h-x*U*h-J*o*H+Q*U*H+x*o*X-Q*L*X)*qA,t[2]=(d*U*h-J*F*h+J*o*G-Q*U*G-d*o*X+Q*F*X)*qA,t[3]=(x*F*h-d*L*h-x*o*G+Q*L*G+d*o*H-Q*F*H)*qA,t[4]=nA*qA,t[5]=(N*U*h-AA*L*h+AA*o*H-i*U*H-N*o*X+i*L*X)*qA,t[6]=(AA*F*h-w*U*h-AA*o*G+i*U*G+w*o*X-i*F*X)*qA,t[7]=(w*L*h-N*F*h+N*o*G-i*L*G-w*o*H+i*F*H)*qA,t[8]=cA*qA,t[9]=(AA*x*h-N*J*h-AA*Q*H+i*J*H+N*Q*X-i*x*X)*qA,t[10]=(w*J*h-AA*d*h+AA*Q*G-i*J*G-w*Q*X+i*d*X)*qA,t[11]=(N*d*h-w*x*h-N*Q*G+i*x*G+w*Q*H-i*d*H)*qA,t[12]=eA*qA,t[13]=(N*J*o-AA*x*o+AA*Q*L-i*J*L-N*Q*U+i*x*U)*qA,t[14]=(AA*d*o-w*J*o-AA*Q*F+i*J*F+w*Q*U-i*d*U)*qA,t[15]=(w*x*o-N*d*o+N*Q*F-i*x*F-w*Q*L+i*d*L)*qA,this}scale(t){const i=this.elements,Q=t.x,o=t.y,h=t.z;return i[0]*=Q,i[4]*=o,i[8]*=h,i[1]*=Q,i[5]*=o,i[9]*=h,i[2]*=Q,i[6]*=o,i[10]*=h,i[3]*=Q,i[7]*=o,i[11]*=h,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],Q=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,Q,o))}makeTranslation(t,i,Q){return this.set(1,0,0,t,0,1,0,i,0,0,1,Q,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),Q=Math.sin(t);return this.set(1,0,0,0,0,i,-Q,0,0,Q,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),Q=Math.sin(t);return this.set(i,0,Q,0,0,1,0,0,-Q,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),Q=Math.sin(t);return this.set(i,-Q,0,0,Q,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const Q=Math.cos(i),o=Math.sin(i),h=1-Q,w=t.x,d=t.y,F=t.z,G=h*w,N=h*d;return this.set(G*w+Q,G*d-o*F,G*F+o*d,0,G*d+o*F,N*d+Q,N*F-o*w,0,G*F-o*d,N*F+o*w,h*F*F+Q,0,0,0,0,1),this}makeScale(t,i,Q){return this.set(t,0,0,0,0,i,0,0,0,0,Q,0,0,0,0,1),this}makeShear(t,i,Q,o,h,w){return this.set(1,Q,h,0,t,1,w,0,i,o,1,0,0,0,0,1),this}compose(t,i,Q){const o=this.elements,h=i._x,w=i._y,d=i._z,F=i._w,G=h+h,N=w+w,x=d+d,L=h*G,H=h*N,AA=h*x,J=w*N,U=w*x,X=d*x,oA=F*G,nA=F*N,cA=F*x,eA=Q.x,MA=Q.y,qA=Q.z;return o[0]=(1-(J+X))*eA,o[1]=(H+cA)*eA,o[2]=(AA-nA)*eA,o[3]=0,o[4]=(H-cA)*MA,o[5]=(1-(L+X))*MA,o[6]=(U+oA)*MA,o[7]=0,o[8]=(AA+nA)*qA,o[9]=(U-oA)*qA,o[10]=(1-(L+J))*qA,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,Q){const o=this.elements;let h=BE.set(o[0],o[1],o[2]).length();const w=BE.set(o[4],o[5],o[6]).length(),d=BE.set(o[8],o[9],o[10]).length();this.determinant()<0&&(h=-h),t.x=o[12],t.y=o[13],t.z=o[14],Vi.copy(this);const G=1/h,N=1/w,x=1/d;return Vi.elements[0]*=G,Vi.elements[1]*=G,Vi.elements[2]*=G,Vi.elements[4]*=N,Vi.elements[5]*=N,Vi.elements[6]*=N,Vi.elements[8]*=x,Vi.elements[9]*=x,Vi.elements[10]*=x,i.setFromRotationMatrix(Vi),Q.x=h,Q.y=w,Q.z=d,this}makePerspective(t,i,Q,o,h,w){const d=this.elements,F=2*h/(i-t),G=2*h/(Q-o),N=(i+t)/(i-t),x=(Q+o)/(Q-o),L=-(w+h)/(w-h),H=-2*w*h/(w-h);return d[0]=F,d[4]=0,d[8]=N,d[12]=0,d[1]=0,d[5]=G,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=L,d[14]=H,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,Q,o,h,w){const d=this.elements,F=1/(i-t),G=1/(Q-o),N=1/(w-h),x=(i+t)*F,L=(Q+o)*G,H=(w+h)*N;return d[0]=2*F,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*G,d[9]=0,d[13]=-L,d[2]=0,d[6]=0,d[10]=-2*N,d[14]=-H,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,Q=t.elements;for(let o=0;o<16;o++)if(i[o]!==Q[o])return!1;return!0}fromArray(t,i=0){for(let Q=0;Q<16;Q++)this.elements[Q]=t[Q+i];return this}toArray(t=[],i=0){const Q=this.elements;return t[i]=Q[0],t[i+1]=Q[1],t[i+2]=Q[2],t[i+3]=Q[3],t[i+4]=Q[4],t[i+5]=Q[5],t[i+6]=Q[6],t[i+7]=Q[7],t[i+8]=Q[8],t[i+9]=Q[9],t[i+10]=Q[10],t[i+11]=Q[11],t[i+12]=Q[12],t[i+13]=Q[13],t[i+14]=Q[14],t[i+15]=Q[15],t}}const BE=new OA,Vi=new ye,rM=new OA(0,0,0),hM=new OA(1,1,1),DC=new OA,Vo=new OA,di=new OA,ll=new ye,dl=new aQ;class xn{constructor(t=0,i=0,Q=0,o=xn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=i,this._z=Q,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,Q,o=this._order){return this._x=t,this._y=i,this._z=Q,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,Q=!0){const o=t.elements,h=o[0],w=o[4],d=o[8],F=o[1],G=o[5],N=o[9],x=o[2],L=o[6],H=o[10];switch(i){case"XYZ":this._y=Math.asin(Ai(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-N,H),this._z=Math.atan2(-w,h)):(this._x=Math.atan2(L,G),this._z=0);break;case"YXZ":this._x=Math.asin(-Ai(N,-1,1)),Math.abs(N)<.9999999?(this._y=Math.atan2(d,H),this._z=Math.atan2(F,G)):(this._y=Math.atan2(-x,h),this._z=0);break;case"ZXY":this._x=Math.asin(Ai(L,-1,1)),Math.abs(L)<.9999999?(this._y=Math.atan2(-x,H),this._z=Math.atan2(-w,G)):(this._y=0,this._z=Math.atan2(F,h));break;case"ZYX":this._y=Math.asin(-Ai(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(L,H),this._z=Math.atan2(F,h)):(this._x=0,this._z=Math.atan2(-w,G));break;case"YZX":this._z=Math.asin(Ai(F,-1,1)),Math.abs(F)<.9999999?(this._x=Math.atan2(-N,G),this._y=Math.atan2(-x,h)):(this._x=0,this._y=Math.atan2(d,H));break;case"XZY":this._z=Math.asin(-Ai(w,-1,1)),Math.abs(w)<.9999999?(this._x=Math.atan2(L,G),this._y=Math.atan2(d,h)):(this._x=Math.atan2(-N,H),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,Q===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,Q){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,i,Q)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xn.DefaultOrder="XYZ";xn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cM=0;const ul=new OA,CE=new aQ,TB=new ye,Zo=new OA,dn=new OA,lM=new OA,dM=new aQ,Dl=new OA(1,0,0),fl=new OA(0,1,0),wl=new OA(0,0,1),uM={type:"added"},pl={type:"removed"};class Ke extends hQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=mE(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DefaultUp.clone();const t=new OA,i=new xn,Q=new aQ,o=new OA(1,1,1);function h(){Q.setFromEuler(i,!1)}function w(){i.setFromQuaternion(Q,void 0,!1)}i._onChange(h),Q._onChange(w),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ye},normalMatrix:{value:new Di}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ke.DefaultMatrixWorldAutoUpdate,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return CE.setFromAxisAngle(t,i),this.quaternion.multiply(CE),this}rotateOnWorldAxis(t,i){return CE.setFromAxisAngle(t,i),this.quaternion.premultiply(CE),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,i){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(TB.copy(this.matrixWorld).invert())}lookAt(t,i,Q){t.isVector3?Zo.copy(t):Zo.set(t,i,Q);const o=this.parent;this.updateWorldMatrix(!0,!1),dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?TB.lookAt(dn,Zo,this.up):TB.lookAt(Zo,dn,this.up),this.quaternion.setFromRotationMatrix(TB),o&&(TB.extractRotation(o.matrixWorld),CE.setFromRotationMatrix(TB),this.quaternion.premultiply(CE.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(uM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const i=this.children[t];i.parent=null,i.dispatchEvent(pl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),TB.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),TB.multiply(t.parent.matrixWorld)),t.applyMatrix4(TB),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let Q=0,o=this.children.length;Q<o;Q++){const w=this.children[Q].getObjectByProperty(t,i);if(w!==void 0)return w}}getObjectsByProperty(t,i){let Q=[];this[t]===i&&Q.push(this);for(let o=0,h=this.children.length;o<h;o++){const w=this.children[o].getObjectsByProperty(t,i);w.length>0&&(Q=Q.concat(w))}return Q}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dn,t,lM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dn,dM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let Q=0,o=i.length;Q<o;Q++)i[Q].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let Q=0,o=i.length;Q<o;Q++)i[Q].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let Q=0,o=i.length;Q<o;Q++){const h=i[Q];(h.matrixWorldAutoUpdate===!0||t===!0)&&h.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const Q=this.parent;if(t===!0&&Q!==null&&Q.matrixWorldAutoUpdate===!0&&Q.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const o=this.children;for(let h=0,w=o.length;h<w;h++){const d=o[h];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",Q={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function h(d,F){return d[F.uuid]===void 0&&(d[F.uuid]=F.toJSON(t)),F.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=h(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const F=d.shapes;if(Array.isArray(F))for(let G=0,N=F.length;G<N;G++){const x=F[G];h(t.shapes,x)}else h(t.shapes,F)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(h(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let F=0,G=this.material.length;F<G;F++)d.push(h(t.materials,this.material[F]));o.material=d}else o.material=h(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const F=this.animations[d];o.animations.push(h(t.animations,F))}}if(i){const d=w(t.geometries),F=w(t.materials),G=w(t.textures),N=w(t.images),x=w(t.shapes),L=w(t.skeletons),H=w(t.animations),AA=w(t.nodes);d.length>0&&(Q.geometries=d),F.length>0&&(Q.materials=F),G.length>0&&(Q.textures=G),N.length>0&&(Q.images=N),x.length>0&&(Q.shapes=x),L.length>0&&(Q.skeletons=L),H.length>0&&(Q.animations=H),AA.length>0&&(Q.nodes=AA)}return Q.object=o,Q;function w(d){const F=[];for(const G in d){const N=d[G];delete N.metadata,F.push(N)}return F}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let Q=0;Q<t.children.length;Q++){const o=t.children[Q];this.add(o.clone())}return this}}Ke.DefaultUp=new OA(0,1,0);Ke.DefaultMatrixAutoUpdate=!0;Ke.DefaultMatrixWorldAutoUpdate=!0;const Zi=new OA,_B=new OA,Pa=new OA,WB=new OA,QE=new OA,EE=new OA,yl=new OA,Oa=new OA,Va=new OA,Za=new OA;class PB{constructor(t=new OA,i=new OA,Q=new OA){this.a=t,this.b=i,this.c=Q}static getNormal(t,i,Q,o){o.subVectors(Q,i),Zi.subVectors(t,i),o.cross(Zi);const h=o.lengthSq();return h>0?o.multiplyScalar(1/Math.sqrt(h)):o.set(0,0,0)}static getBarycoord(t,i,Q,o,h){Zi.subVectors(o,i),_B.subVectors(Q,i),Pa.subVectors(t,i);const w=Zi.dot(Zi),d=Zi.dot(_B),F=Zi.dot(Pa),G=_B.dot(_B),N=_B.dot(Pa),x=w*G-d*d;if(x===0)return h.set(-2,-1,-1);const L=1/x,H=(G*F-d*N)*L,AA=(w*N-d*F)*L;return h.set(1-H-AA,AA,H)}static containsPoint(t,i,Q,o){return this.getBarycoord(t,i,Q,o,WB),WB.x>=0&&WB.y>=0&&WB.x+WB.y<=1}static getUV(t,i,Q,o,h,w,d,F){return this.getBarycoord(t,i,Q,o,WB),F.set(0,0),F.addScaledVector(h,WB.x),F.addScaledVector(w,WB.y),F.addScaledVector(d,WB.z),F}static isFrontFacing(t,i,Q,o){return Zi.subVectors(Q,i),_B.subVectors(t,i),Zi.cross(_B).dot(o)<0}set(t,i,Q){return this.a.copy(t),this.b.copy(i),this.c.copy(Q),this}setFromPointsAndIndices(t,i,Q,o){return this.a.copy(t[i]),this.b.copy(t[Q]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,Q,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,Q),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),_B.subVectors(this.a,this.b),Zi.cross(_B).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return PB.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return PB.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,Q,o,h){return PB.getUV(t,this.a,this.b,this.c,i,Q,o,h)}containsPoint(t){return PB.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return PB.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const Q=this.a,o=this.b,h=this.c;let w,d;QE.subVectors(o,Q),EE.subVectors(h,Q),Oa.subVectors(t,Q);const F=QE.dot(Oa),G=EE.dot(Oa);if(F<=0&&G<=0)return i.copy(Q);Va.subVectors(t,o);const N=QE.dot(Va),x=EE.dot(Va);if(N>=0&&x<=N)return i.copy(o);const L=F*x-N*G;if(L<=0&&F>=0&&N<=0)return w=F/(F-N),i.copy(Q).addScaledVector(QE,w);Za.subVectors(t,h);const H=QE.dot(Za),AA=EE.dot(Za);if(AA>=0&&H<=AA)return i.copy(h);const J=H*G-F*AA;if(J<=0&&G>=0&&AA<=0)return d=G/(G-AA),i.copy(Q).addScaledVector(EE,d);const U=N*AA-H*x;if(U<=0&&x-N>=0&&H-AA>=0)return yl.subVectors(h,o),d=(x-N)/(x-N+(H-AA)),i.copy(o).addScaledVector(yl,d);const X=1/(U+J+L);return w=J*X,d=L*X,i.copy(Q).addScaledVector(QE,w).addScaledVector(EE,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let DM=0;class cQ extends hQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=mE(),this.name="",this.type="Material",this.blending=DE,this.side=EQ,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=id,this.blendDst=Bd,this.blendEquation=lE,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const Q=t[i];if(Q===void 0){console.warn("THREE.Material: '"+i+"' parameter is undefined.");continue}const o=this[i];if(o===void 0){console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.");continue}o&&o.isColor?o.set(Q):o&&o.isVector3&&Q&&Q.isVector3?o.copy(Q):this[i]=Q}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const Q={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};Q.uuid=this.uuid,Q.type=this.type,this.name!==""&&(Q.name=this.name),this.color&&this.color.isColor&&(Q.color=this.color.getHex()),this.roughness!==void 0&&(Q.roughness=this.roughness),this.metalness!==void 0&&(Q.metalness=this.metalness),this.sheen!==void 0&&(Q.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(Q.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(Q.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(Q.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(Q.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(Q.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(Q.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(Q.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(Q.shininess=this.shininess),this.clearcoat!==void 0&&(Q.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(Q.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(Q.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(Q.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(Q.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(Q.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(Q.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(Q.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(Q.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(Q.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(Q.lightMap=this.lightMap.toJSON(t).uuid,Q.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(Q.aoMap=this.aoMap.toJSON(t).uuid,Q.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(Q.bumpMap=this.bumpMap.toJSON(t).uuid,Q.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(Q.normalMap=this.normalMap.toJSON(t).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(Q.displacementMap=this.displacementMap.toJSON(t).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(Q.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(Q.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(Q.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(Q.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(Q.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(Q.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(Q.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(Q.combine=this.combine)),this.envMapIntensity!==void 0&&(Q.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(Q.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(Q.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(Q.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(Q.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(Q.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(Q.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(Q.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(Q.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(Q.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(Q.size=this.size),this.shadowSide!==null&&(Q.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(Q.sizeAttenuation=this.sizeAttenuation),this.blending!==DE&&(Q.blending=this.blending),this.side!==EQ&&(Q.side=this.side),this.vertexColors&&(Q.vertexColors=!0),this.opacity<1&&(Q.opacity=this.opacity),this.transparent===!0&&(Q.transparent=this.transparent),Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.stencilWrite=this.stencilWrite,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(Q.rotation=this.rotation),this.polygonOffset===!0&&(Q.polygonOffset=!0),this.polygonOffsetFactor!==0&&(Q.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(Q.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(Q.linewidth=this.linewidth),this.dashSize!==void 0&&(Q.dashSize=this.dashSize),this.gapSize!==void 0&&(Q.gapSize=this.gapSize),this.scale!==void 0&&(Q.scale=this.scale),this.dithering===!0&&(Q.dithering=!0),this.alphaTest>0&&(Q.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(Q.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(Q.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(Q.wireframe=this.wireframe),this.wireframeLinewidth>1&&(Q.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(Q.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(Q.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(Q.flatShading=this.flatShading),this.visible===!1&&(Q.visible=!1),this.toneMapped===!1&&(Q.toneMapped=!1),this.fog===!1&&(Q.fog=!1),Object.keys(this.userData).length>0&&(Q.userData=this.userData);function o(h){const w=[];for(const d in h){const F=h[d];delete F.metadata,w.push(F)}return w}if(i){const h=o(t.textures),w=o(t.images);h.length>0&&(Q.textures=h),w.length>0&&(Q.images=w)}return Q}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let Q=null;if(i!==null){const o=i.length;Q=new Array(o);for(let h=0;h!==o;++h)Q[h]=i[h].clone()}return this.clippingPlanes=Q,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ur extends cQ{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new OA,Xo=new tI;class dB{constructor(t,i,Q=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=Q,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,i,Q){t*=this.itemSize,Q*=i.itemSize;for(let o=0,h=this.itemSize;o<h;o++)this.array[t+o]=i.array[Q+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,Q=this.count;i<Q;i++)Xo.fromBufferAttribute(this,i),Xo.applyMatrix3(t),this.setXY(i,Xo.x,Xo.y);else if(this.itemSize===3)for(let i=0,Q=this.count;i<Q;i++)le.fromBufferAttribute(this,i),le.applyMatrix3(t),this.setXYZ(i,le.x,le.y,le.z);return this}applyMatrix4(t){for(let i=0,Q=this.count;i<Q;i++)le.fromBufferAttribute(this,i),le.applyMatrix4(t),this.setXYZ(i,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let i=0,Q=this.count;i<Q;i++)le.fromBufferAttribute(this,i),le.applyNormalMatrix(t),this.setXYZ(i,le.x,le.y,le.z);return this}transformDirection(t){for(let i=0,Q=this.count;i<Q;i++)le.fromBufferAttribute(this,i),le.transformDirection(t),this.setXYZ(i,le.x,le.y,le.z);return this}set(t,i=0){return this.array.set(t,i),this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Mn(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Mn(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Mn(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Mn(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,Q){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),Q=Bi(Q,this.array)),this.array[t+0]=i,this.array[t+1]=Q,this}setXYZ(t,i,Q,o){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),Q=Bi(Q,this.array),o=Bi(o,this.array)),this.array[t+0]=i,this.array[t+1]=Q,this.array[t+2]=o,this}setXYZW(t,i,Q,o,h){return t*=this.itemSize,this.normalized&&(i=Bi(i,this.array),Q=Bi(Q,this.array),o=Bi(o,this.array),h=Bi(h,this.array)),this.array[t+0]=i,this.array[t+1]=Q,this.array[t+2]=o,this.array[t+3]=h,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hd extends dB{constructor(t,i,Q){super(new Uint16Array(t),i,Q)}}class cd extends dB{constructor(t,i,Q){super(new Uint32Array(t),i,Q)}}class uB extends dB{constructor(t,i,Q){super(new Float32Array(t),i,Q)}}let fM=0;const ki=new ye,Xa=new Ke,nE=new OA,ui=new Ln,un=new Ln,Ne=new OA;class pC extends hQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=mE(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?cd:hd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,Q=0){this.groups.push({start:t,count:i,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const Q=this.attributes.normal;if(Q!==void 0){const h=new Di().getNormalMatrix(t);Q.applyNormalMatrix(h),Q.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,i,Q){return ki.makeTranslation(t,i,Q),this.applyMatrix4(ki),this}scale(t,i,Q){return ki.makeScale(t,i,Q),this.applyMatrix4(ki),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nE).negate(),this.translate(nE.x,nE.y,nE.z),this}setFromPoints(t){const i=[];for(let Q=0,o=t.length;Q<o;Q++){const h=t[Q];i.push(h.x,h.y,h.z||0)}return this.setAttribute("position",new uB(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new OA(-1/0,-1/0,-1/0),new OA(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let Q=0,o=i.length;Q<o;Q++){const h=i[Q];ui.setFromBufferAttribute(h),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new OA,1/0);return}if(t){const Q=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let h=0,w=i.length;h<w;h++){const d=i[h];un.setFromBufferAttribute(d),this.morphTargetsRelative?(Ne.addVectors(ui.min,un.min),ui.expandByPoint(Ne),Ne.addVectors(ui.max,un.max),ui.expandByPoint(Ne)):(ui.expandByPoint(un.min),ui.expandByPoint(un.max))}ui.getCenter(Q);let o=0;for(let h=0,w=t.count;h<w;h++)Ne.fromBufferAttribute(t,h),o=Math.max(o,Q.distanceToSquared(Ne));if(i)for(let h=0,w=i.length;h<w;h++){const d=i[h],F=this.morphTargetsRelative;for(let G=0,N=d.count;G<N;G++)Ne.fromBufferAttribute(d,G),F&&(nE.fromBufferAttribute(t,G),Ne.add(nE)),o=Math.max(o,Q.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const Q=t.array,o=i.position.array,h=i.normal.array,w=i.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dB(new Float32Array(4*d),4));const F=this.getAttribute("tangent").array,G=[],N=[];for(let WA=0;WA<d;WA++)G[WA]=new OA,N[WA]=new OA;const x=new OA,L=new OA,H=new OA,AA=new tI,J=new tI,U=new tI,X=new OA,oA=new OA;function nA(WA,eg,bg){x.fromArray(o,WA*3),L.fromArray(o,eg*3),H.fromArray(o,bg*3),AA.fromArray(w,WA*2),J.fromArray(w,eg*2),U.fromArray(w,bg*2),L.sub(x),H.sub(x),J.sub(AA),U.sub(AA);const kA=1/(J.x*U.y-U.x*J.y);isFinite(kA)&&(X.copy(L).multiplyScalar(U.y).addScaledVector(H,-J.y).multiplyScalar(kA),oA.copy(H).multiplyScalar(J.x).addScaledVector(L,-U.x).multiplyScalar(kA),G[WA].add(X),G[eg].add(X),G[bg].add(X),N[WA].add(oA),N[eg].add(oA),N[bg].add(oA))}let cA=this.groups;cA.length===0&&(cA=[{start:0,count:Q.length}]);for(let WA=0,eg=cA.length;WA<eg;++WA){const bg=cA[WA],kA=bg.start,JA=bg.count;for(let gg=kA,yg=kA+JA;gg<yg;gg+=3)nA(Q[gg+0],Q[gg+1],Q[gg+2])}const eA=new OA,MA=new OA,qA=new OA,P=new OA;function wA(WA){qA.fromArray(h,WA*3),P.copy(qA);const eg=G[WA];eA.copy(eg),eA.sub(qA.multiplyScalar(qA.dot(eg))).normalize(),MA.crossVectors(P,eg);const kA=MA.dot(N[WA])<0?-1:1;F[WA*4]=eA.x,F[WA*4+1]=eA.y,F[WA*4+2]=eA.z,F[WA*4+3]=kA}for(let WA=0,eg=cA.length;WA<eg;++WA){const bg=cA[WA],kA=bg.start,JA=bg.count;for(let gg=kA,yg=kA+JA;gg<yg;gg+=3)wA(Q[gg+0]),wA(Q[gg+1]),wA(Q[gg+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new dB(new Float32Array(i.count*3),3),this.setAttribute("normal",Q);else for(let L=0,H=Q.count;L<H;L++)Q.setXYZ(L,0,0,0);const o=new OA,h=new OA,w=new OA,d=new OA,F=new OA,G=new OA,N=new OA,x=new OA;if(t)for(let L=0,H=t.count;L<H;L+=3){const AA=t.getX(L+0),J=t.getX(L+1),U=t.getX(L+2);o.fromBufferAttribute(i,AA),h.fromBufferAttribute(i,J),w.fromBufferAttribute(i,U),N.subVectors(w,h),x.subVectors(o,h),N.cross(x),d.fromBufferAttribute(Q,AA),F.fromBufferAttribute(Q,J),G.fromBufferAttribute(Q,U),d.add(N),F.add(N),G.add(N),Q.setXYZ(AA,d.x,d.y,d.z),Q.setXYZ(J,F.x,F.y,F.z),Q.setXYZ(U,G.x,G.y,G.z)}else for(let L=0,H=i.count;L<H;L+=3)o.fromBufferAttribute(i,L+0),h.fromBufferAttribute(i,L+1),w.fromBufferAttribute(i,L+2),N.subVectors(w,h),x.subVectors(o,h),N.cross(x),Q.setXYZ(L+0,N.x,N.y,N.z),Q.setXYZ(L+1,N.x,N.y,N.z),Q.setXYZ(L+2,N.x,N.y,N.z);this.normalizeNormals(),Q.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let i=0,Q=t.count;i<Q;i++)Ne.fromBufferAttribute(t,i),Ne.normalize(),t.setXYZ(i,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(d,F){const G=d.array,N=d.itemSize,x=d.normalized,L=new G.constructor(F.length*N);let H=0,AA=0;for(let J=0,U=F.length;J<U;J++){d.isInterleavedBufferAttribute?H=F[J]*d.data.stride+d.offset:H=F[J]*N;for(let X=0;X<N;X++)L[AA++]=G[H++]}return new dB(L,N,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pC,Q=this.index.array,o=this.attributes;for(const d in o){const F=o[d],G=t(F,Q);i.setAttribute(d,G)}const h=this.morphAttributes;for(const d in h){const F=[],G=h[d];for(let N=0,x=G.length;N<x;N++){const L=G[N],H=t(L,Q);F.push(H)}i.morphAttributes[d]=F}i.morphTargetsRelative=this.morphTargetsRelative;const w=this.groups;for(let d=0,F=w.length;d<F;d++){const G=w[d];i.addGroup(G.start,G.count,G.materialIndex)}return i}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const F=this.parameters;for(const G in F)F[G]!==void 0&&(t[G]=F[G]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const Q=this.attributes;for(const F in Q){const G=Q[F];t.data.attributes[F]=G.toJSON(t.data)}const o={};let h=!1;for(const F in this.morphAttributes){const G=this.morphAttributes[F],N=[];for(let x=0,L=G.length;x<L;x++){const H=G[x];N.push(H.toJSON(t.data))}N.length>0&&(o[F]=N,h=!0)}h&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const w=this.groups;w.length>0&&(t.data.groups=JSON.parse(JSON.stringify(w)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const Q=t.index;Q!==null&&this.setIndex(Q.clone(i));const o=t.attributes;for(const G in o){const N=o[G];this.setAttribute(G,N.clone(i))}const h=t.morphAttributes;for(const G in h){const N=[],x=h[G];for(let L=0,H=x.length;L<H;L++)N.push(x[L].clone(i));this.morphAttributes[G]=N}this.morphTargetsRelative=t.morphTargetsRelative;const w=t.groups;for(let G=0,N=w.length;G<N;G++){const x=w[G];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const F=t.boundingSphere;return F!==null&&(this.boundingSphere=F.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new ye,oE=new aM,za=new dr,Dn=new OA,fn=new OA,wn=new OA,ja=new OA,zo=new OA,jo=new tI,$o=new tI,As=new tI,$a=new OA,gs=new OA;class fi extends Ke{constructor(t=new pC,i=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,Q=Object.keys(i);if(Q.length>0){const o=i[Q[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let h=0,w=o.length;h<w;h++){const d=o[h].name||String(h);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=h}}}}getVertexPosition(t,i){const Q=this.geometry,o=Q.attributes.position,h=Q.morphAttributes.position,w=Q.morphTargetsRelative;i.fromBufferAttribute(o,t);const d=this.morphTargetInfluences;if(h&&d){zo.set(0,0,0);for(let F=0,G=h.length;F<G;F++){const N=d[F],x=h[F];N!==0&&(ja.fromBufferAttribute(x,t),w?zo.addScaledVector(ja,N):zo.addScaledVector(ja.sub(i),N))}i.add(zo)}return this.isSkinnedMesh&&this.boneTransform(t,i),i}raycast(t,i){const Q=this.geometry,o=this.material,h=this.matrixWorld;if(o===void 0||(Q.boundingSphere===null&&Q.computeBoundingSphere(),za.copy(Q.boundingSphere),za.applyMatrix4(h),t.ray.intersectsSphere(za)===!1)||(Ml.copy(h).invert(),oE.copy(t.ray).applyMatrix4(Ml),Q.boundingBox!==null&&oE.intersectsBox(Q.boundingBox)===!1))return;let w;const d=Q.index,F=Q.attributes.position,G=Q.attributes.uv,N=Q.attributes.uv2,x=Q.groups,L=Q.drawRange;if(d!==null)if(Array.isArray(o))for(let H=0,AA=x.length;H<AA;H++){const J=x[H],U=o[J.materialIndex],X=Math.max(J.start,L.start),oA=Math.min(d.count,Math.min(J.start+J.count,L.start+L.count));for(let nA=X,cA=oA;nA<cA;nA+=3){const eA=d.getX(nA),MA=d.getX(nA+1),qA=d.getX(nA+2);w=ts(this,U,t,oE,G,N,eA,MA,qA),w&&(w.faceIndex=Math.floor(nA/3),w.face.materialIndex=J.materialIndex,i.push(w))}}else{const H=Math.max(0,L.start),AA=Math.min(d.count,L.start+L.count);for(let J=H,U=AA;J<U;J+=3){const X=d.getX(J),oA=d.getX(J+1),nA=d.getX(J+2);w=ts(this,o,t,oE,G,N,X,oA,nA),w&&(w.faceIndex=Math.floor(J/3),i.push(w))}}else if(F!==void 0)if(Array.isArray(o))for(let H=0,AA=x.length;H<AA;H++){const J=x[H],U=o[J.materialIndex],X=Math.max(J.start,L.start),oA=Math.min(F.count,Math.min(J.start+J.count,L.start+L.count));for(let nA=X,cA=oA;nA<cA;nA+=3){const eA=nA,MA=nA+1,qA=nA+2;w=ts(this,U,t,oE,G,N,eA,MA,qA),w&&(w.faceIndex=Math.floor(nA/3),w.face.materialIndex=J.materialIndex,i.push(w))}}else{const H=Math.max(0,L.start),AA=Math.min(F.count,L.start+L.count);for(let J=H,U=AA;J<U;J+=3){const X=J,oA=J+1,nA=J+2;w=ts(this,o,t,oE,G,N,X,oA,nA),w&&(w.faceIndex=Math.floor(J/3),i.push(w))}}}}function wM(c,t,i,Q,o,h,w,d){let F;if(t.side===Ji?F=Q.intersectTriangle(w,h,o,!0,d):F=Q.intersectTriangle(o,h,w,t.side===EQ,d),F===null)return null;gs.copy(d),gs.applyMatrix4(c.matrixWorld);const G=i.ray.origin.distanceTo(gs);return G<i.near||G>i.far?null:{distance:G,point:gs.clone(),object:c}}function ts(c,t,i,Q,o,h,w,d,F){c.getVertexPosition(w,Dn),c.getVertexPosition(d,fn),c.getVertexPosition(F,wn);const G=wM(c,t,i,Q,Dn,fn,wn,$a);if(G){o&&(jo.fromBufferAttribute(o,w),$o.fromBufferAttribute(o,d),As.fromBufferAttribute(o,F),G.uv=PB.getUV($a,Dn,fn,wn,jo,$o,As,new tI)),h&&(jo.fromBufferAttribute(h,w),$o.fromBufferAttribute(h,d),As.fromBufferAttribute(h,F),G.uv2=PB.getUV($a,Dn,fn,wn,jo,$o,As,new tI));const N={a:w,b:d,c:F,normal:new OA,materialIndex:0};PB.getNormal(Dn,fn,wn,N.normal),G.face=N}return G}class yC extends pC{constructor(t=1,i=1,Q=1,o=1,h=1,w=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:Q,widthSegments:o,heightSegments:h,depthSegments:w};const d=this;o=Math.floor(o),h=Math.floor(h),w=Math.floor(w);const F=[],G=[],N=[],x=[];let L=0,H=0;AA("z","y","x",-1,-1,Q,i,t,w,h,0),AA("z","y","x",1,-1,Q,i,-t,w,h,1),AA("x","z","y",1,1,t,Q,i,o,w,2),AA("x","z","y",1,-1,t,Q,-i,o,w,3),AA("x","y","z",1,-1,t,i,Q,o,h,4),AA("x","y","z",-1,-1,t,i,-Q,o,h,5),this.setIndex(F),this.setAttribute("position",new uB(G,3)),this.setAttribute("normal",new uB(N,3)),this.setAttribute("uv",new uB(x,2));function AA(J,U,X,oA,nA,cA,eA,MA,qA,P,wA){const WA=cA/qA,eg=eA/P,bg=cA/2,kA=eA/2,JA=MA/2,gg=qA+1,yg=P+1;let mg=0,Bg=0;const O=new OA;for(let j=0;j<yg;j++){const gA=j*eg-kA;for(let QA=0;QA<gg;QA++){const yA=QA*WA-bg;O[J]=yA*oA,O[U]=gA*nA,O[X]=JA,G.push(O.x,O.y,O.z),O[J]=0,O[U]=0,O[X]=MA>0?1:-1,N.push(O.x,O.y,O.z),x.push(QA/qA),x.push(1-j/P),mg+=1}}for(let j=0;j<P;j++)for(let gA=0;gA<qA;gA++){const QA=L+gA+gg*j,yA=L+gA+gg*(j+1),YA=L+(gA+1)+gg*(j+1),tg=L+(gA+1)+gg*j;F.push(QA,yA,tg),F.push(yA,YA,tg),Bg+=6}d.addGroup(H,Bg,wA),H+=Bg,L+=mg}}static fromJSON(t){return new yC(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ME(c){const t={};for(const i in c){t[i]={};for(const Q in c[i]){const o=c[i][Q];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[i][Q]=o.clone():Array.isArray(o)?t[i][Q]=o.slice():t[i][Q]=o}}return t}function je(c){const t={};for(let i=0;i<c.length;i++){const Q=ME(c[i]);for(const o in Q)t[o]=Q[o]}return t}function pM(c){const t=[];for(let i=0;i<c.length;i++)t.push(c[i].clone());return t}function ld(c){return c.getRenderTarget()===null&&c.outputEncoding===WI?cB:Un}const yM={clone:ME,merge:je};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rQ extends cQ{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ME(t.uniforms),this.uniformsGroups=pM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const w=this.uniforms[o].value;w&&w.isTexture?i.uniforms[o]={type:"t",value:w.toJSON(t).uuid}:w&&w.isColor?i.uniforms[o]={type:"c",value:w.getHex()}:w&&w.isVector2?i.uniforms[o]={type:"v2",value:w.toArray()}:w&&w.isVector3?i.uniforms[o]={type:"v3",value:w.toArray()}:w&&w.isVector4?i.uniforms[o]={type:"v4",value:w.toArray()}:w&&w.isMatrix3?i.uniforms[o]={type:"m3",value:w.toArray()}:w&&w.isMatrix4?i.uniforms[o]={type:"m4",value:w.toArray()}:i.uniforms[o]={value:w}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;const Q={};for(const o in this.extensions)this.extensions[o]===!0&&(Q[o]=!0);return Object.keys(Q).length>0&&(i.extensions=Q),i}}class dd extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xi extends dd{constructor(t=50,i=1,Q=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=Q,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Rn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,Q,o,h,w){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=Q,this.view.offsetY=o,this.view.width=h,this.view.height=w,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Rn*.5*this.fov)/this.zoom,Q=2*i,o=this.aspect*Q,h=-.5*o;const w=this.view;if(this.view!==null&&this.view.enabled){const F=w.fullWidth,G=w.fullHeight;h+=w.offsetX*o/F,i-=w.offsetY*Q/G,o*=w.width/F,Q*=w.height/G}const d=this.filmOffset;d!==0&&(h+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(h,h+o,i,i-Q,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const sE=-90,aE=1;class RM extends Ke{constructor(t,i,Q){super(),this.type="CubeCamera",this.renderTarget=Q;const o=new xi(sE,aE,t,i);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const h=new xi(sE,aE,t,i);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(-1,0,0),this.add(h);const w=new xi(sE,aE,t,i);w.layers=this.layers,w.up.set(0,0,-1),w.lookAt(0,1,0),this.add(w);const d=new xi(sE,aE,t,i);d.layers=this.layers,d.up.set(0,0,1),d.lookAt(0,-1,0),this.add(d);const F=new xi(sE,aE,t,i);F.layers=this.layers,F.up.set(0,1,0),F.lookAt(0,0,1),this.add(F);const G=new xi(sE,aE,t,i);G.layers=this.layers,G.up.set(0,1,0),G.lookAt(0,0,-1),this.add(G)}update(t,i){this.parent===null&&this.updateMatrixWorld();const Q=this.renderTarget,[o,h,w,d,F,G]=this.children,N=t.getRenderTarget(),x=t.toneMapping,L=t.xr.enabled;t.toneMapping=OB,t.xr.enabled=!1;const H=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,t.setRenderTarget(Q,0),t.render(i,o),t.setRenderTarget(Q,1),t.render(i,h),t.setRenderTarget(Q,2),t.render(i,w),t.setRenderTarget(Q,3),t.render(i,d),t.setRenderTarget(Q,4),t.render(i,F),Q.texture.generateMipmaps=H,t.setRenderTarget(Q,5),t.render(i,G),t.setRenderTarget(N),t.toneMapping=x,t.xr.enabled=L,Q.texture.needsPMREMUpdate=!0}}class ud extends Ci{constructor(t,i,Q,o,h,w,d,F,G,N){t=t!==void 0?t:[],i=i!==void 0?i:wE,super(t,i,Q,o,h,w,d,F,G,N),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class GM extends sQ{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const Q={width:t,height:t,depth:1},o=[Q,Q,Q,Q,Q,Q];this.texture=new ud(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.encoding=i.encoding,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new yC(5,5,5),h=new rQ({name:"CubemapFromEquirect",uniforms:ME(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:Ji,blending:wC});h.uniforms.tEquirect.value=i;const w=new fi(o,h),d=i.minFilter;return i.minFilter===Fn&&(i.minFilter=Li),new RM(1,10,this).update(t,w),i.minFilter=d,w.geometry.dispose(),w.material.dispose(),this}clear(t,i,Q,o){const h=t.getRenderTarget();for(let w=0;w<6;w++)t.setRenderTarget(this,w),t.clear(i,Q,o);t.setRenderTarget(h)}}const Ar=new OA,SM=new OA,FM=new Di;class tQ{constructor(t=new OA(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,Q,o){return this.normal.set(t,i,Q),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,Q){const o=Ar.subVectors(Q,i).cross(SM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,i){const Q=t.delta(Ar),o=this.normal.dot(Q);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/o;return h<0||h>1?null:i.copy(Q).multiplyScalar(h).add(t.start)}intersectsLine(t){const i=this.distanceToPoint(t.start),Q=this.distanceToPoint(t.end);return i<0&&Q>0||Q<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const Q=i||FM.getNormalMatrix(t),o=this.coplanarPoint(Ar).applyMatrix4(t),h=this.normal.applyMatrix3(Q).normalize();return this.constant=-o.dot(h),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rE=new dr,Is=new OA;class Dr{constructor(t=new tQ,i=new tQ,Q=new tQ,o=new tQ,h=new tQ,w=new tQ){this.planes=[t,i,Q,o,h,w]}set(t,i,Q,o,h,w){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(Q),d[3].copy(o),d[4].copy(h),d[5].copy(w),this}copy(t){const i=this.planes;for(let Q=0;Q<6;Q++)i[Q].copy(t.planes[Q]);return this}setFromProjectionMatrix(t){const i=this.planes,Q=t.elements,o=Q[0],h=Q[1],w=Q[2],d=Q[3],F=Q[4],G=Q[5],N=Q[6],x=Q[7],L=Q[8],H=Q[9],AA=Q[10],J=Q[11],U=Q[12],X=Q[13],oA=Q[14],nA=Q[15];return i[0].setComponents(d-o,x-F,J-L,nA-U).normalize(),i[1].setComponents(d+o,x+F,J+L,nA+U).normalize(),i[2].setComponents(d+h,x+G,J+H,nA+X).normalize(),i[3].setComponents(d-h,x-G,J-H,nA-X).normalize(),i[4].setComponents(d-w,x-N,J-AA,nA-oA).normalize(),i[5].setComponents(d+w,x+N,J+AA,nA+oA).normalize(),this}intersectsObject(t){const i=t.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),rE.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(rE)}intersectsSprite(t){return rE.center.set(0,0,0),rE.radius=.7071067811865476,rE.applyMatrix4(t.matrixWorld),this.intersectsSphere(rE)}intersectsSphere(t){const i=this.planes,Q=t.center,o=-t.radius;for(let h=0;h<6;h++)if(i[h].distanceToPoint(Q)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let Q=0;Q<6;Q++){const o=i[Q];if(Is.x=o.normal.x>0?t.max.x:t.min.x,Is.y=o.normal.y>0?t.max.y:t.min.y,Is.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let Q=0;Q<6;Q++)if(i[Q].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dd(){let c=null,t=!1,i=null,Q=null;function o(h,w){i(h,w),Q=c.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(Q=c.requestAnimationFrame(o),t=!0)},stop:function(){c.cancelAnimationFrame(Q),t=!1},setAnimationLoop:function(h){i=h},setContext:function(h){c=h}}}function NM(c,t){const i=t.isWebGL2,Q=new WeakMap;function o(G,N){const x=G.array,L=G.usage,H=c.createBuffer();c.bindBuffer(N,H),c.bufferData(N,x,L),G.onUploadCallback();let AA;if(x instanceof Float32Array)AA=5126;else if(x instanceof Uint16Array)if(G.isFloat16BufferAttribute)if(i)AA=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else AA=5123;else if(x instanceof Int16Array)AA=5122;else if(x instanceof Uint32Array)AA=5125;else if(x instanceof Int32Array)AA=5124;else if(x instanceof Int8Array)AA=5120;else if(x instanceof Uint8Array)AA=5121;else if(x instanceof Uint8ClampedArray)AA=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:H,type:AA,bytesPerElement:x.BYTES_PER_ELEMENT,version:G.version}}function h(G,N,x){const L=N.array,H=N.updateRange;c.bindBuffer(x,G),H.count===-1?c.bufferSubData(x,0,L):(i?c.bufferSubData(x,H.offset*L.BYTES_PER_ELEMENT,L,H.offset,H.count):c.bufferSubData(x,H.offset*L.BYTES_PER_ELEMENT,L.subarray(H.offset,H.offset+H.count)),H.count=-1),N.onUploadCallback()}function w(G){return G.isInterleavedBufferAttribute&&(G=G.data),Q.get(G)}function d(G){G.isInterleavedBufferAttribute&&(G=G.data);const N=Q.get(G);N&&(c.deleteBuffer(N.buffer),Q.delete(G))}function F(G,N){if(G.isGLBufferAttribute){const L=Q.get(G);(!L||L.version<G.version)&&Q.set(G,{buffer:G.buffer,type:G.type,bytesPerElement:G.elementSize,version:G.version});return}G.isInterleavedBufferAttribute&&(G=G.data);const x=Q.get(G);x===void 0?Q.set(G,o(G,N)):x.version<G.version&&(h(x.buffer,G,N),x.version=G.version)}return{get:w,remove:d,update:F}}class cs extends pC{constructor(t=1,i=1,Q=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:Q,heightSegments:o};const h=t/2,w=i/2,d=Math.floor(Q),F=Math.floor(o),G=d+1,N=F+1,x=t/d,L=i/F,H=[],AA=[],J=[],U=[];for(let X=0;X<N;X++){const oA=X*L-w;for(let nA=0;nA<G;nA++){const cA=nA*x-h;AA.push(cA,-oA,0),J.push(0,0,1),U.push(nA/d),U.push(1-X/F)}}for(let X=0;X<F;X++)for(let oA=0;oA<d;oA++){const nA=oA+G*X,cA=oA+G*(X+1),eA=oA+1+G*(X+1),MA=oA+1+G*X;H.push(nA,cA,MA),H.push(cA,eA,MA)}this.setIndex(H),this.setAttribute("position",new uB(AA,3)),this.setAttribute("normal",new uB(J,3)),this.setAttribute("uv",new uB(U,2))}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM="vec3 transformed = vec3( position );",YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,AR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,IR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nR=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oR=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,sR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,wR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pR=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yR=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,MR=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,RR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,GR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,SR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JR=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_R=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BG=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,QG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sI={alphamap_fragment:UM,alphamap_pars_fragment:kM,alphatest_fragment:LM,alphatest_pars_fragment:xM,aomap_fragment:JM,aomap_pars_fragment:bM,begin_vertex:KM,beginnormal_vertex:YM,bsdfs:vM,iridescence_fragment:HM,bumpmap_pars_fragment:qM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:WM,clipping_planes_vertex:PM,color_fragment:OM,color_pars_fragment:VM,color_pars_vertex:ZM,color_vertex:XM,common:zM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:$M,displacementmap_pars_vertex:Am,displacementmap_vertex:gm,emissivemap_fragment:tm,emissivemap_pars_fragment:Im,encodings_fragment:em,encodings_pars_fragment:im,envmap_fragment:Bm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Qm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:om,fog_pars_vertex:sm,fog_fragment:am,fog_pars_fragment:rm,gradientmap_pars_fragment:hm,lightmap_fragment:cm,lightmap_pars_fragment:lm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:um,lights_pars_begin:Dm,lights_toon_fragment:wm,lights_toon_pars_fragment:pm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:mm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Gm,lights_fragment_maps:Sm,lights_fragment_end:Fm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Lm,map_fragment:xm,map_pars_fragment:Jm,map_particle_fragment:bm,map_particle_pars_fragment:Km,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:vm,morphcolor_vertex:Hm,morphnormal_vertex:qm,morphtarget_pars_vertex:Tm,morphtarget_vertex:_m,normal_fragment_begin:Wm,normal_fragment_maps:Pm,normal_pars_fragment:Om,normal_pars_vertex:Vm,normal_vertex:Zm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:AR,output_fragment:gR,packing:tR,premultiplied_alpha_fragment:IR,project_vertex:eR,dithering_fragment:iR,dithering_pars_fragment:BR,roughnessmap_fragment:CR,roughnessmap_pars_fragment:QR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:nR,shadowmap_vertex:oR,shadowmask_pars_fragment:sR,skinbase_vertex:aR,skinning_pars_vertex:rR,skinning_vertex:hR,skinnormal_vertex:cR,specularmap_fragment:lR,specularmap_pars_fragment:dR,tonemapping_fragment:uR,tonemapping_pars_fragment:DR,transmission_fragment:fR,transmission_pars_fragment:wR,uv_pars_fragment:pR,uv_pars_vertex:yR,uv_vertex:MR,uv2_pars_fragment:mR,uv2_pars_vertex:RR,uv2_vertex:GR,worldpos_vertex:SR,background_vert:FR,background_frag:NR,backgroundCube_vert:UR,backgroundCube_frag:kR,cube_vert:LR,cube_frag:xR,depth_vert:JR,depth_frag:bR,distanceRGBA_vert:KR,distanceRGBA_frag:YR,equirect_vert:vR,equirect_frag:HR,linedashed_vert:qR,linedashed_frag:TR,meshbasic_vert:_R,meshbasic_frag:WR,meshlambert_vert:PR,meshlambert_frag:OR,meshmatcap_vert:VR,meshmatcap_frag:ZR,meshnormal_vert:XR,meshnormal_frag:zR,meshphong_vert:jR,meshphong_frag:$R,meshphysical_vert:AG,meshphysical_frag:gG,meshtoon_vert:tG,meshtoon_frag:IG,points_vert:eG,points_frag:iG,shadow_vert:BG,shadow_frag:CG,sprite_vert:QG,sprite_frag:EG},It={common:{diffuse:{value:new xI(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Di},uv2Transform:{value:new Di},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tI(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Di}},sprite:{diffuse:{value:new xI(16777215)},opacity:{value:1},center:{value:new tI(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Di}}},lB={basic:{uniforms:je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:sI.meshbasic_vert,fragmentShader:sI.meshbasic_frag},lambert:{uniforms:je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xI(0)}}]),vertexShader:sI.meshlambert_vert,fragmentShader:sI.meshlambert_frag},phong:{uniforms:je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xI(0)},specular:{value:new xI(1118481)},shininess:{value:30}}]),vertexShader:sI.meshphong_vert,fragmentShader:sI.meshphong_frag},standard:{uniforms:je([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new xI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:sI.meshphysical_vert,fragmentShader:sI.meshphysical_frag},toon:{uniforms:je([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new xI(0)}}]),vertexShader:sI.meshtoon_vert,fragmentShader:sI.meshtoon_frag},matcap:{uniforms:je([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:sI.meshmatcap_vert,fragmentShader:sI.meshmatcap_frag},points:{uniforms:je([It.points,It.fog]),vertexShader:sI.points_vert,fragmentShader:sI.points_frag},dashed:{uniforms:je([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:sI.linedashed_vert,fragmentShader:sI.linedashed_frag},depth:{uniforms:je([It.common,It.displacementmap]),vertexShader:sI.depth_vert,fragmentShader:sI.depth_frag},normal:{uniforms:je([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:sI.meshnormal_vert,fragmentShader:sI.meshnormal_frag},sprite:{uniforms:je([It.sprite,It.fog]),vertexShader:sI.sprite_vert,fragmentShader:sI.sprite_frag},background:{uniforms:{uvTransform:{value:new Di},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:sI.background_vert,fragmentShader:sI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:sI.backgroundCube_vert,fragmentShader:sI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:sI.cube_vert,fragmentShader:sI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:sI.equirect_vert,fragmentShader:sI.equirect_frag},distanceRGBA:{uniforms:je([It.common,It.displacementmap,{referencePosition:{value:new OA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:sI.distanceRGBA_vert,fragmentShader:sI.distanceRGBA_frag},shadow:{uniforms:je([It.lights,It.fog,{color:{value:new xI(0)},opacity:{value:1}}]),vertexShader:sI.shadow_vert,fragmentShader:sI.shadow_frag}};lB.physical={uniforms:je([lB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tI(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xI(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xI(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xI(1,1,1)},specularColorMap:{value:null}}]),vertexShader:sI.meshphysical_vert,fragmentShader:sI.meshphysical_frag};const es={r:0,b:0,g:0};function nG(c,t,i,Q,o,h,w){const d=new xI(0);let F=h===!0?0:1,G,N,x=null,L=0,H=null;function AA(U,X){let oA=!1,nA=X.isScene===!0?X.background:null;nA&&nA.isTexture&&(nA=(X.backgroundBlurriness>0?i:t).get(nA));const cA=c.xr,eA=cA.getSession&&cA.getSession();eA&&eA.environmentBlendMode==="additive"&&(nA=null),nA===null?J(d,F):nA&&nA.isColor&&(J(nA,1),oA=!0),(c.autoClear||oA)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),nA&&(nA.isCubeTexture||nA.mapping===rs)?(N===void 0&&(N=new fi(new yC(1,1,1),new rQ({name:"BackgroundCubeMaterial",uniforms:ME(lB.backgroundCube.uniforms),vertexShader:lB.backgroundCube.vertexShader,fragmentShader:lB.backgroundCube.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(MA,qA,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(N)),N.material.uniforms.envMap.value=nA,N.material.uniforms.flipEnvMap.value=nA.isCubeTexture&&nA.isRenderTargetTexture===!1?-1:1,N.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,N.material.toneMapped=nA.encoding!==WI,(x!==nA||L!==nA.version||H!==c.toneMapping)&&(N.material.needsUpdate=!0,x=nA,L=nA.version,H=c.toneMapping),N.layers.enableAll(),U.unshift(N,N.geometry,N.material,0,0,null)):nA&&nA.isTexture&&(G===void 0&&(G=new fi(new cs(2,2),new rQ({name:"BackgroundMaterial",uniforms:ME(lB.background.uniforms),vertexShader:lB.background.vertexShader,fragmentShader:lB.background.fragmentShader,side:EQ,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(G)),G.material.uniforms.t2D.value=nA,G.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,G.material.toneMapped=nA.encoding!==WI,nA.matrixAutoUpdate===!0&&nA.updateMatrix(),G.material.uniforms.uvTransform.value.copy(nA.matrix),(x!==nA||L!==nA.version||H!==c.toneMapping)&&(G.material.needsUpdate=!0,x=nA,L=nA.version,H=c.toneMapping),G.layers.enableAll(),U.unshift(G,G.geometry,G.material,0,0,null))}function J(U,X){U.getRGB(es,ld(c)),Q.buffers.color.setClear(es.r,es.g,es.b,X,w)}return{getClearColor:function(){return d},setClearColor:function(U,X=1){d.set(U),F=X,J(d,F)},getClearAlpha:function(){return F},setClearAlpha:function(U){F=U,J(d,F)},render:AA}}function oG(c,t,i,Q){const o=c.getParameter(34921),h=Q.isWebGL2?null:t.get("OES_vertex_array_object"),w=Q.isWebGL2||h!==null,d={},F=U(null);let G=F,N=!1;function x(JA,gg,yg,mg,Bg){let O=!1;if(w){const j=J(mg,yg,gg);G!==j&&(G=j,H(G.object)),O=X(JA,mg,yg,Bg),O&&oA(JA,mg,yg,Bg)}else{const j=gg.wireframe===!0;(G.geometry!==mg.id||G.program!==yg.id||G.wireframe!==j)&&(G.geometry=mg.id,G.program=yg.id,G.wireframe=j,O=!0)}Bg!==null&&i.update(Bg,34963),(O||N)&&(N=!1,P(JA,gg,yg,mg),Bg!==null&&c.bindBuffer(34963,i.get(Bg).buffer))}function L(){return Q.isWebGL2?c.createVertexArray():h.createVertexArrayOES()}function H(JA){return Q.isWebGL2?c.bindVertexArray(JA):h.bindVertexArrayOES(JA)}function AA(JA){return Q.isWebGL2?c.deleteVertexArray(JA):h.deleteVertexArrayOES(JA)}function J(JA,gg,yg){const mg=yg.wireframe===!0;let Bg=d[JA.id];Bg===void 0&&(Bg={},d[JA.id]=Bg);let O=Bg[gg.id];O===void 0&&(O={},Bg[gg.id]=O);let j=O[mg];return j===void 0&&(j=U(L()),O[mg]=j),j}function U(JA){const gg=[],yg=[],mg=[];for(let Bg=0;Bg<o;Bg++)gg[Bg]=0,yg[Bg]=0,mg[Bg]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:gg,enabledAttributes:yg,attributeDivisors:mg,object:JA,attributes:{},index:null}}function X(JA,gg,yg,mg){const Bg=G.attributes,O=gg.attributes;let j=0;const gA=yg.getAttributes();for(const QA in gA)if(gA[QA].location>=0){const YA=Bg[QA];let tg=O[QA];if(tg===void 0&&(QA==="instanceMatrix"&&JA.instanceMatrix&&(tg=JA.instanceMatrix),QA==="instanceColor"&&JA.instanceColor&&(tg=JA.instanceColor)),YA===void 0||YA.attribute!==tg||tg&&YA.data!==tg.data)return!0;j++}return G.attributesNum!==j||G.index!==mg}function oA(JA,gg,yg,mg){const Bg={},O=gg.attributes;let j=0;const gA=yg.getAttributes();for(const QA in gA)if(gA[QA].location>=0){let YA=O[QA];YA===void 0&&(QA==="instanceMatrix"&&JA.instanceMatrix&&(YA=JA.instanceMatrix),QA==="instanceColor"&&JA.instanceColor&&(YA=JA.instanceColor));const tg={};tg.attribute=YA,YA&&YA.data&&(tg.data=YA.data),Bg[QA]=tg,j++}G.attributes=Bg,G.attributesNum=j,G.index=mg}function nA(){const JA=G.newAttributes;for(let gg=0,yg=JA.length;gg<yg;gg++)JA[gg]=0}function cA(JA){eA(JA,0)}function eA(JA,gg){const yg=G.newAttributes,mg=G.enabledAttributes,Bg=G.attributeDivisors;yg[JA]=1,mg[JA]===0&&(c.enableVertexAttribArray(JA),mg[JA]=1),Bg[JA]!==gg&&((Q.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[Q.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](JA,gg),Bg[JA]=gg)}function MA(){const JA=G.newAttributes,gg=G.enabledAttributes;for(let yg=0,mg=gg.length;yg<mg;yg++)gg[yg]!==JA[yg]&&(c.disableVertexAttribArray(yg),gg[yg]=0)}function qA(JA,gg,yg,mg,Bg,O){Q.isWebGL2===!0&&(yg===5124||yg===5125)?c.vertexAttribIPointer(JA,gg,yg,Bg,O):c.vertexAttribPointer(JA,gg,yg,mg,Bg,O)}function P(JA,gg,yg,mg){if(Q.isWebGL2===!1&&(JA.isInstancedMesh||mg.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;nA();const Bg=mg.attributes,O=yg.getAttributes(),j=gg.defaultAttributeValues;for(const gA in O){const QA=O[gA];if(QA.location>=0){let yA=Bg[gA];if(yA===void 0&&(gA==="instanceMatrix"&&JA.instanceMatrix&&(yA=JA.instanceMatrix),gA==="instanceColor"&&JA.instanceColor&&(yA=JA.instanceColor)),yA!==void 0){const YA=yA.normalized,tg=yA.itemSize,LA=i.get(yA);if(LA===void 0)continue;const gt=LA.buffer,kg=LA.type,tt=LA.bytesPerElement;if(yA.isInterleavedBufferAttribute){const Og=yA.data,at=Og.stride,Ag=yA.offset;if(Og.isInstancedInterleavedBuffer){for(let VA=0;VA<QA.locationSize;VA++)eA(QA.location+VA,Og.meshPerAttribute);JA.isInstancedMesh!==!0&&mg._maxInstanceCount===void 0&&(mg._maxInstanceCount=Og.meshPerAttribute*Og.count)}else for(let VA=0;VA<QA.locationSize;VA++)cA(QA.location+VA);c.bindBuffer(34962,gt);for(let VA=0;VA<QA.locationSize;VA++)qA(QA.location+VA,tg/QA.locationSize,kg,YA,at*tt,(Ag+tg/QA.locationSize*VA)*tt)}else{if(yA.isInstancedBufferAttribute){for(let Og=0;Og<QA.locationSize;Og++)eA(QA.location+Og,yA.meshPerAttribute);JA.isInstancedMesh!==!0&&mg._maxInstanceCount===void 0&&(mg._maxInstanceCount=yA.meshPerAttribute*yA.count)}else for(let Og=0;Og<QA.locationSize;Og++)cA(QA.location+Og);c.bindBuffer(34962,gt);for(let Og=0;Og<QA.locationSize;Og++)qA(QA.location+Og,tg/QA.locationSize,kg,YA,tg*tt,tg/QA.locationSize*Og*tt)}}else if(j!==void 0){const YA=j[gA];if(YA!==void 0)switch(YA.length){case 2:c.vertexAttrib2fv(QA.location,YA);break;case 3:c.vertexAttrib3fv(QA.location,YA);break;case 4:c.vertexAttrib4fv(QA.location,YA);break;default:c.vertexAttrib1fv(QA.location,YA)}}}}MA()}function wA(){bg();for(const JA in d){const gg=d[JA];for(const yg in gg){const mg=gg[yg];for(const Bg in mg)AA(mg[Bg].object),delete mg[Bg];delete gg[yg]}delete d[JA]}}function WA(JA){if(d[JA.id]===void 0)return;const gg=d[JA.id];for(const yg in gg){const mg=gg[yg];for(const Bg in mg)AA(mg[Bg].object),delete mg[Bg];delete gg[yg]}delete d[JA.id]}function eg(JA){for(const gg in d){const yg=d[gg];if(yg[JA.id]===void 0)continue;const mg=yg[JA.id];for(const Bg in mg)AA(mg[Bg].object),delete mg[Bg];delete yg[JA.id]}}function bg(){kA(),N=!0,G!==F&&(G=F,H(G.object))}function kA(){F.geometry=null,F.program=null,F.wireframe=!1}return{setup:x,reset:bg,resetDefaultState:kA,dispose:wA,releaseStatesOfGeometry:WA,releaseStatesOfProgram:eg,initAttributes:nA,enableAttribute:cA,disableUnusedAttributes:MA}}function sG(c,t,i,Q){const o=Q.isWebGL2;let h;function w(G){h=G}function d(G,N){c.drawArrays(h,G,N),i.update(N,h,1)}function F(G,N,x){if(x===0)return;let L,H;if(o)L=c,H="drawArraysInstanced";else if(L=t.get("ANGLE_instanced_arrays"),H="drawArraysInstancedANGLE",L===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}L[H](h,G,N,x),i.update(N,h,x)}this.setMode=w,this.render=d,this.renderInstances=F}function aG(c,t,i){let Q;function o(){if(Q!==void 0)return Q;if(t.has("EXT_texture_filter_anisotropic")===!0){const qA=t.get("EXT_texture_filter_anisotropic");Q=c.getParameter(qA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Q=0;return Q}function h(qA){if(qA==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";qA="mediump"}return qA==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const w=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let d=i.precision!==void 0?i.precision:"highp";const F=h(d);F!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",F,"instead."),d=F);const G=w||t.has("WEBGL_draw_buffers"),N=i.logarithmicDepthBuffer===!0,x=c.getParameter(34930),L=c.getParameter(35660),H=c.getParameter(3379),AA=c.getParameter(34076),J=c.getParameter(34921),U=c.getParameter(36347),X=c.getParameter(36348),oA=c.getParameter(36349),nA=L>0,cA=w||t.has("OES_texture_float"),eA=nA&&cA,MA=w?c.getParameter(36183):0;return{isWebGL2:w,drawBuffers:G,getMaxAnisotropy:o,getMaxPrecision:h,precision:d,logarithmicDepthBuffer:N,maxTextures:x,maxVertexTextures:L,maxTextureSize:H,maxCubemapSize:AA,maxAttributes:J,maxVertexUniforms:U,maxVaryings:X,maxFragmentUniforms:oA,vertexTextures:nA,floatFragmentTextures:cA,floatVertexTextures:eA,maxSamples:MA}}function rG(c){const t=this;let i=null,Q=0,o=!1,h=!1;const w=new tQ,d=new Di,F={value:null,needsUpdate:!1};this.uniform=F,this.numPlanes=0,this.numIntersection=0,this.init=function(x,L,H){const AA=x.length!==0||L||Q!==0||o;return o=L,i=N(x,H,0),Q=x.length,AA},this.beginShadows=function(){h=!0,N(null)},this.endShadows=function(){h=!1,G()},this.setState=function(x,L,H){const AA=x.clippingPlanes,J=x.clipIntersection,U=x.clipShadows,X=c.get(x);if(!o||AA===null||AA.length===0||h&&!U)h?N(null):G();else{const oA=h?0:Q,nA=oA*4;let cA=X.clippingState||null;F.value=cA,cA=N(AA,L,nA,H);for(let eA=0;eA!==nA;++eA)cA[eA]=i[eA];X.clippingState=cA,this.numIntersection=J?this.numPlanes:0,this.numPlanes+=oA}};function G(){F.value!==i&&(F.value=i,F.needsUpdate=Q>0),t.numPlanes=Q,t.numIntersection=0}function N(x,L,H,AA){const J=x!==null?x.length:0;let U=null;if(J!==0){if(U=F.value,AA!==!0||U===null){const X=H+J*4,oA=L.matrixWorldInverse;d.getNormalMatrix(oA),(U===null||U.length<X)&&(U=new Float32Array(X));for(let nA=0,cA=H;nA!==J;++nA,cA+=4)w.copy(x[nA]).applyMatrix4(oA,d),w.normal.toArray(U,cA),U[cA+3]=w.constant}F.value=U,F.needsUpdate=!0}return t.numPlanes=J,t.numIntersection=0,U}}function hG(c){let t=new WeakMap;function i(w,d){return d===Qr?w.mapping=wE:d===Er&&(w.mapping=pE),w}function Q(w){if(w&&w.isTexture&&w.isRenderTargetTexture===!1){const d=w.mapping;if(d===Qr||d===Er)if(t.has(w)){const F=t.get(w).texture;return i(F,w.mapping)}else{const F=w.image;if(F&&F.height>0){const G=new GM(F.height/2);return G.fromEquirectangularTexture(c,w),t.set(w,G),w.addEventListener("dispose",o),i(G.texture,w.mapping)}else return null}}return w}function o(w){const d=w.target;d.removeEventListener("dispose",o);const F=t.get(d);F!==void 0&&(t.delete(d),F.dispose())}function h(){t=new WeakMap}return{get:Q,dispose:h}}class fd extends dd{constructor(t=-1,i=1,Q=1,o=-1,h=.1,w=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=Q,this.bottom=o,this.near=h,this.far=w,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,Q,o,h,w){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=Q,this.view.offsetY=o,this.view.width=h,this.view.height=w,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let h=Q-t,w=Q+t,d=o+i,F=o-i;if(this.view!==null&&this.view.enabled){const G=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;h+=G*this.view.offsetX,w=h+G*this.view.width,d-=N*this.view.offsetY,F=d-N*this.view.height}this.projectionMatrix.makeOrthographic(h,w,d,F,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const dE=4,ml=[.125,.215,.35,.446,.526,.582],eQ=20,gr=new fd,Rl=new xI;let tr=null;const IQ=(1+Math.sqrt(5))/2,hE=1/IQ,Gl=[new OA(1,1,1),new OA(-1,1,1),new OA(1,1,-1),new OA(-1,1,-1),new OA(0,IQ,hE),new OA(0,IQ,-hE),new OA(hE,0,IQ),new OA(-hE,0,IQ),new OA(IQ,hE,0),new OA(-IQ,hE,0)];class Sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,Q=.1,o=100){tr=this._renderer.getRenderTarget(),this._setSize(256);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,Q,o,h),i>0&&this._blur(h,0,0,i),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tr),t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wE||t.mapping===pE?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tr=this._renderer.getRenderTarget();const Q=i||this._allocateTargets();return this._textureToCubeUV(t,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,Q={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Nn,format:zi,encoding:oQ,depthBuffer:!1},o=Fl(t,i,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,i,Q);const{_lodMax:h}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cG(h)),this._blurMaterial=lG(h,t,i)}return o}_compileMaterial(t){const i=new fi(this._lodPlanes[0],t);this._renderer.compile(i,gr)}_sceneToCubeUV(t,i,Q,o){const d=new xi(90,1,i,Q),F=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],N=this._renderer,x=N.autoClear,L=N.toneMapping;N.getClearColor(Rl),N.toneMapping=OB,N.autoClear=!1;const H=new ur({name:"PMREM.Background",side:Ji,depthWrite:!1,depthTest:!1}),AA=new fi(new yC,H);let J=!1;const U=t.background;U?U.isColor&&(H.color.copy(U),t.background=null,J=!0):(H.color.copy(Rl),J=!0);for(let X=0;X<6;X++){const oA=X%3;oA===0?(d.up.set(0,F[X],0),d.lookAt(G[X],0,0)):oA===1?(d.up.set(0,0,F[X]),d.lookAt(0,G[X],0)):(d.up.set(0,F[X],0),d.lookAt(0,0,G[X]));const nA=this._cubeSize;is(o,oA*nA,X>2?nA:0,nA,nA),N.setRenderTarget(o),J&&N.render(AA,d),N.render(t,d)}AA.geometry.dispose(),AA.material.dispose(),N.toneMapping=L,N.autoClear=x,t.background=U}_textureToCubeUV(t,i){const Q=this._renderer,o=t.mapping===wE||t.mapping===pE;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const h=o?this._cubemapMaterial:this._equirectMaterial,w=new fi(this._lodPlanes[0],h),d=h.uniforms;d.envMap.value=t;const F=this._cubeSize;is(i,0,0,3*F,2*F),Q.setRenderTarget(i),Q.render(w,gr)}_applyPMREM(t){const i=this._renderer,Q=i.autoClear;i.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),w=Gl[(o-1)%Gl.length];this._blur(t,o-1,o,h,w)}i.autoClear=Q}_blur(t,i,Q,o,h){const w=this._pingPongRenderTarget;this._halfBlur(t,w,i,Q,o,"latitudinal",h),this._halfBlur(w,t,Q,Q,o,"longitudinal",h)}_halfBlur(t,i,Q,o,h,w,d){const F=this._renderer,G=this._blurMaterial;w!=="latitudinal"&&w!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const N=3,x=new fi(this._lodPlanes[o],G),L=G.uniforms,H=this._sizeLods[Q]-1,AA=isFinite(h)?Math.PI/(2*H):2*Math.PI/(2*eQ-1),J=h/AA,U=isFinite(h)?1+Math.floor(N*J):eQ;U>eQ&&console.warn(`sigmaRadians, ${h}, is too large and will clip, as it requested ${U} samples when the maximum is set to ${eQ}`);const X=[];let oA=0;for(let qA=0;qA<eQ;++qA){const P=qA/J,wA=Math.exp(-P*P/2);X.push(wA),qA===0?oA+=wA:qA<U&&(oA+=2*wA)}for(let qA=0;qA<X.length;qA++)X[qA]=X[qA]/oA;L.envMap.value=t.texture,L.samples.value=U,L.weights.value=X,L.latitudinal.value=w==="latitudinal",d&&(L.poleAxis.value=d);const{_lodMax:nA}=this;L.dTheta.value=AA,L.mipInt.value=nA-Q;const cA=this._sizeLods[o],eA=3*cA*(o>nA-dE?o-nA+dE:0),MA=4*(this._cubeSize-cA);is(i,eA,MA,3*cA,2*cA),F.setRenderTarget(i),F.render(x,gr)}}function cG(c){const t=[],i=[],Q=[];let o=c;const h=c-dE+1+ml.length;for(let w=0;w<h;w++){const d=Math.pow(2,o);i.push(d);let F=1/d;w>c-dE?F=ml[w-c+dE-1]:w===0&&(F=0),Q.push(F);const G=1/(d-2),N=-G,x=1+G,L=[N,N,x,N,x,x,N,N,x,x,N,x],H=6,AA=6,J=3,U=2,X=1,oA=new Float32Array(J*AA*H),nA=new Float32Array(U*AA*H),cA=new Float32Array(X*AA*H);for(let MA=0;MA<H;MA++){const qA=MA%3*2/3-1,P=MA>2?0:-1,wA=[qA,P,0,qA+2/3,P,0,qA+2/3,P+1,0,qA,P,0,qA+2/3,P+1,0,qA,P+1,0];oA.set(wA,J*AA*MA),nA.set(L,U*AA*MA);const WA=[MA,MA,MA,MA,MA,MA];cA.set(WA,X*AA*MA)}const eA=new pC;eA.setAttribute("position",new dB(oA,J)),eA.setAttribute("uv",new dB(nA,U)),eA.setAttribute("faceIndex",new dB(cA,X)),t.push(eA),o>dE&&o--}return{lodPlanes:t,sizeLods:i,sigmas:Q}}function Fl(c,t,i){const Q=new sQ(c,t,i);return Q.texture.mapping=rs,Q.texture.name="PMREM.cubeUv",Q.scissorTest=!0,Q}function is(c,t,i,Q,o){c.viewport.set(t,i,Q,o),c.scissor.set(t,i,Q,o)}function lG(c,t,i){const Q=new Float32Array(eQ),o=new OA(0,1,0);return new rQ({name:"SphericalGaussianBlur",defines:{n:eQ,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Q},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wC,depthTest:!1,depthWrite:!1})}function Nl(){return new rQ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wC,depthTest:!1,depthWrite:!1})}function Ul(){return new rQ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wC,depthTest:!1,depthWrite:!1})}function fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dG(c){let t=new WeakMap,i=null;function Q(d){if(d&&d.isTexture){const F=d.mapping,G=F===Qr||F===Er,N=F===wE||F===pE;if(G||N)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=t.get(d);return i===null&&(i=new Sl(c)),x=G?i.fromEquirectangular(d,x):i.fromCubemap(d,x),t.set(d,x),x.texture}else{if(t.has(d))return t.get(d).texture;{const x=d.image;if(G&&x&&x.height>0||N&&x&&o(x)){i===null&&(i=new Sl(c));const L=G?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,L),d.addEventListener("dispose",h),L.texture}else return null}}}return d}function o(d){let F=0;const G=6;for(let N=0;N<G;N++)d[N]!==void 0&&F++;return F===G}function h(d){const F=d.target;F.removeEventListener("dispose",h);const G=t.get(F);G!==void 0&&(t.delete(F),G.dispose())}function w(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:Q,dispose:w}}function uG(c){const t={};function i(Q){if(t[Q]!==void 0)return t[Q];let o;switch(Q){case"WEBGL_depth_texture":o=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=c.getExtension(Q)}return t[Q]=o,o}return{has:function(Q){return i(Q)!==null},init:function(Q){Q.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(Q){const o=i(Q);return o===null&&console.warn("THREE.WebGLRenderer: "+Q+" extension not supported."),o}}}function DG(c,t,i,Q){const o={},h=new WeakMap;function w(x){const L=x.target;L.index!==null&&t.remove(L.index);for(const AA in L.attributes)t.remove(L.attributes[AA]);L.removeEventListener("dispose",w),delete o[L.id];const H=h.get(L);H&&(t.remove(H),h.delete(L)),Q.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0&&delete L._maxInstanceCount,i.memory.geometries--}function d(x,L){return o[L.id]===!0||(L.addEventListener("dispose",w),o[L.id]=!0,i.memory.geometries++),L}function F(x){const L=x.attributes;for(const AA in L)t.update(L[AA],34962);const H=x.morphAttributes;for(const AA in H){const J=H[AA];for(let U=0,X=J.length;U<X;U++)t.update(J[U],34962)}}function G(x){const L=[],H=x.index,AA=x.attributes.position;let J=0;if(H!==null){const oA=H.array;J=H.version;for(let nA=0,cA=oA.length;nA<cA;nA+=3){const eA=oA[nA+0],MA=oA[nA+1],qA=oA[nA+2];L.push(eA,MA,MA,qA,qA,eA)}}else{const oA=AA.array;J=AA.version;for(let nA=0,cA=oA.length/3-1;nA<cA;nA+=3){const eA=nA+0,MA=nA+1,qA=nA+2;L.push(eA,MA,MA,qA,qA,eA)}}const U=new(Ed(L)?cd:hd)(L,1);U.version=J;const X=h.get(x);X&&t.remove(X),h.set(x,U)}function N(x){const L=h.get(x);if(L){const H=x.index;H!==null&&L.version<H.version&&G(x)}else G(x);return h.get(x)}return{get:d,update:F,getWireframeAttribute:N}}function fG(c,t,i,Q){const o=Q.isWebGL2;let h;function w(L){h=L}let d,F;function G(L){d=L.type,F=L.bytesPerElement}function N(L,H){c.drawElements(h,H,d,L*F),i.update(H,h,1)}function x(L,H,AA){if(AA===0)return;let J,U;if(o)J=c,U="drawElementsInstanced";else if(J=t.get("ANGLE_instanced_arrays"),U="drawElementsInstancedANGLE",J===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}J[U](h,H,d,L*F,AA),i.update(H,h,AA)}this.setMode=w,this.setIndex=G,this.render=N,this.renderInstances=x}function wG(c){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function Q(h,w,d){switch(i.calls++,w){case 4:i.triangles+=d*(h/3);break;case 1:i.lines+=d*(h/2);break;case 3:i.lines+=d*(h-1);break;case 2:i.lines+=d*h;break;case 0:i.points+=d*h;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",w);break}}function o(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:Q}}function pG(c,t){return c[0]-t[0]}function yG(c,t){return Math.abs(t[1])-Math.abs(c[1])}function MG(c,t,i){const Q={},o=new Float32Array(8),h=new WeakMap,w=new Ue,d=[];for(let G=0;G<8;G++)d[G]=[G,0];function F(G,N,x,L){const H=G.morphTargetInfluences;if(t.isWebGL2===!0){const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,U=J!==void 0?J.length:0;let X=h.get(N);if(X===void 0||X.count!==U){let yg=function(){JA.dispose(),h.delete(N),N.removeEventListener("dispose",yg)};var AA=yg;X!==void 0&&X.texture.dispose();const cA=N.morphAttributes.position!==void 0,eA=N.morphAttributes.normal!==void 0,MA=N.morphAttributes.color!==void 0,qA=N.morphAttributes.position||[],P=N.morphAttributes.normal||[],wA=N.morphAttributes.color||[];let WA=0;cA===!0&&(WA=1),eA===!0&&(WA=2),MA===!0&&(WA=3);let eg=N.attributes.position.count*WA,bg=1;eg>t.maxTextureSize&&(bg=Math.ceil(eg/t.maxTextureSize),eg=t.maxTextureSize);const kA=new Float32Array(eg*bg*4*U),JA=new ad(kA,eg,bg,U);JA.type=BQ,JA.needsUpdate=!0;const gg=WA*4;for(let mg=0;mg<U;mg++){const Bg=qA[mg],O=P[mg],j=wA[mg],gA=eg*bg*4*mg;for(let QA=0;QA<Bg.count;QA++){const yA=QA*gg;cA===!0&&(w.fromBufferAttribute(Bg,QA),kA[gA+yA+0]=w.x,kA[gA+yA+1]=w.y,kA[gA+yA+2]=w.z,kA[gA+yA+3]=0),eA===!0&&(w.fromBufferAttribute(O,QA),kA[gA+yA+4]=w.x,kA[gA+yA+5]=w.y,kA[gA+yA+6]=w.z,kA[gA+yA+7]=0),MA===!0&&(w.fromBufferAttribute(j,QA),kA[gA+yA+8]=w.x,kA[gA+yA+9]=w.y,kA[gA+yA+10]=w.z,kA[gA+yA+11]=j.itemSize===4?w.w:1)}}X={count:U,texture:JA,size:new tI(eg,bg)},h.set(N,X),N.addEventListener("dispose",yg)}let oA=0;for(let cA=0;cA<H.length;cA++)oA+=H[cA];const nA=N.morphTargetsRelative?1:1-oA;L.getUniforms().setValue(c,"morphTargetBaseInfluence",nA),L.getUniforms().setValue(c,"morphTargetInfluences",H),L.getUniforms().setValue(c,"morphTargetsTexture",X.texture,i),L.getUniforms().setValue(c,"morphTargetsTextureSize",X.size)}else{const J=H===void 0?0:H.length;let U=Q[N.id];if(U===void 0||U.length!==J){U=[];for(let eA=0;eA<J;eA++)U[eA]=[eA,0];Q[N.id]=U}for(let eA=0;eA<J;eA++){const MA=U[eA];MA[0]=eA,MA[1]=H[eA]}U.sort(yG);for(let eA=0;eA<8;eA++)eA<J&&U[eA][1]?(d[eA][0]=U[eA][0],d[eA][1]=U[eA][1]):(d[eA][0]=Number.MAX_SAFE_INTEGER,d[eA][1]=0);d.sort(pG);const X=N.morphAttributes.position,oA=N.morphAttributes.normal;let nA=0;for(let eA=0;eA<8;eA++){const MA=d[eA],qA=MA[0],P=MA[1];qA!==Number.MAX_SAFE_INTEGER&&P?(X&&N.getAttribute("morphTarget"+eA)!==X[qA]&&N.setAttribute("morphTarget"+eA,X[qA]),oA&&N.getAttribute("morphNormal"+eA)!==oA[qA]&&N.setAttribute("morphNormal"+eA,oA[qA]),o[eA]=P,nA+=P):(X&&N.hasAttribute("morphTarget"+eA)===!0&&N.deleteAttribute("morphTarget"+eA),oA&&N.hasAttribute("morphNormal"+eA)===!0&&N.deleteAttribute("morphNormal"+eA),o[eA]=0)}const cA=N.morphTargetsRelative?1:1-nA;L.getUniforms().setValue(c,"morphTargetBaseInfluence",cA),L.getUniforms().setValue(c,"morphTargetInfluences",o)}}return{update:F}}function mG(c,t,i,Q){let o=new WeakMap;function h(F){const G=Q.render.frame,N=F.geometry,x=t.get(F,N);return o.get(x)!==G&&(t.update(x),o.set(x,G)),F.isInstancedMesh&&(F.hasEventListener("dispose",d)===!1&&F.addEventListener("dispose",d),i.update(F.instanceMatrix,34962),F.instanceColor!==null&&i.update(F.instanceColor,34962)),x}function w(){o=new WeakMap}function d(F){const G=F.target;G.removeEventListener("dispose",d),i.remove(G.instanceMatrix),G.instanceColor!==null&&i.remove(G.instanceColor)}return{update:h,dispose:w}}const wd=new Ci,pd=new ad,yd=new oM,Md=new ud,kl=[],Ll=[],xl=new Float32Array(16),Jl=new Float32Array(9),bl=new Float32Array(4);function RE(c,t,i){const Q=c[0];if(Q<=0||Q>0)return c;const o=t*i;let h=kl[o];if(h===void 0&&(h=new Float32Array(o),kl[o]=h),t!==0){Q.toArray(h,0);for(let w=1,d=0;w!==t;++w)d+=i,c[w].toArray(h,d)}return h}function Me(c,t){if(c.length!==t.length)return!1;for(let i=0,Q=c.length;i<Q;i++)if(c[i]!==t[i])return!1;return!0}function me(c,t){for(let i=0,Q=t.length;i<Q;i++)c[i]=t[i]}function ls(c,t){let i=Ll[t];i===void 0&&(i=new Int32Array(t),Ll[t]=i);for(let Q=0;Q!==t;++Q)i[Q]=c.allocateTextureUnit();return i}function RG(c,t){const i=this.cache;i[0]!==t&&(c.uniform1f(this.addr,t),i[0]=t)}function GG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;c.uniform2fv(this.addr,t),me(i,t)}}function SG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Me(i,t))return;c.uniform3fv(this.addr,t),me(i,t)}}function FG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;c.uniform4fv(this.addr,t),me(i,t)}}function NG(c,t){const i=this.cache,Q=t.elements;if(Q===void 0){if(Me(i,t))return;c.uniformMatrix2fv(this.addr,!1,t),me(i,t)}else{if(Me(i,Q))return;bl.set(Q),c.uniformMatrix2fv(this.addr,!1,bl),me(i,Q)}}function UG(c,t){const i=this.cache,Q=t.elements;if(Q===void 0){if(Me(i,t))return;c.uniformMatrix3fv(this.addr,!1,t),me(i,t)}else{if(Me(i,Q))return;Jl.set(Q),c.uniformMatrix3fv(this.addr,!1,Jl),me(i,Q)}}function kG(c,t){const i=this.cache,Q=t.elements;if(Q===void 0){if(Me(i,t))return;c.uniformMatrix4fv(this.addr,!1,t),me(i,t)}else{if(Me(i,Q))return;xl.set(Q),c.uniformMatrix4fv(this.addr,!1,xl),me(i,Q)}}function LG(c,t){const i=this.cache;i[0]!==t&&(c.uniform1i(this.addr,t),i[0]=t)}function xG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;c.uniform2iv(this.addr,t),me(i,t)}}function JG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Me(i,t))return;c.uniform3iv(this.addr,t),me(i,t)}}function bG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;c.uniform4iv(this.addr,t),me(i,t)}}function KG(c,t){const i=this.cache;i[0]!==t&&(c.uniform1ui(this.addr,t),i[0]=t)}function YG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;c.uniform2uiv(this.addr,t),me(i,t)}}function vG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Me(i,t))return;c.uniform3uiv(this.addr,t),me(i,t)}}function HG(c,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;c.uniform4uiv(this.addr,t),me(i,t)}}function qG(c,t,i){const Q=this.cache,o=i.allocateTextureUnit();Q[0]!==o&&(c.uniform1i(this.addr,o),Q[0]=o),i.setTexture2D(t||wd,o)}function TG(c,t,i){const Q=this.cache,o=i.allocateTextureUnit();Q[0]!==o&&(c.uniform1i(this.addr,o),Q[0]=o),i.setTexture3D(t||yd,o)}function _G(c,t,i){const Q=this.cache,o=i.allocateTextureUnit();Q[0]!==o&&(c.uniform1i(this.addr,o),Q[0]=o),i.setTextureCube(t||Md,o)}function WG(c,t,i){const Q=this.cache,o=i.allocateTextureUnit();Q[0]!==o&&(c.uniform1i(this.addr,o),Q[0]=o),i.setTexture2DArray(t||pd,o)}function PG(c){switch(c){case 5126:return RG;case 35664:return GG;case 35665:return SG;case 35666:return FG;case 35674:return NG;case 35675:return UG;case 35676:return kG;case 5124:case 35670:return LG;case 35667:case 35671:return xG;case 35668:case 35672:return JG;case 35669:case 35673:return bG;case 5125:return KG;case 36294:return YG;case 36295:return vG;case 36296:return HG;case 35678:case 36198:case 36298:case 36306:case 35682:return qG;case 35679:case 36299:case 36307:return TG;case 35680:case 36300:case 36308:case 36293:return _G;case 36289:case 36303:case 36311:case 36292:return WG}}function OG(c,t){c.uniform1fv(this.addr,t)}function VG(c,t){const i=RE(t,this.size,2);c.uniform2fv(this.addr,i)}function ZG(c,t){const i=RE(t,this.size,3);c.uniform3fv(this.addr,i)}function XG(c,t){const i=RE(t,this.size,4);c.uniform4fv(this.addr,i)}function zG(c,t){const i=RE(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,i)}function jG(c,t){const i=RE(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,i)}function $G(c,t){const i=RE(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,i)}function AS(c,t){c.uniform1iv(this.addr,t)}function gS(c,t){c.uniform2iv(this.addr,t)}function tS(c,t){c.uniform3iv(this.addr,t)}function IS(c,t){c.uniform4iv(this.addr,t)}function eS(c,t){c.uniform1uiv(this.addr,t)}function iS(c,t){c.uniform2uiv(this.addr,t)}function BS(c,t){c.uniform3uiv(this.addr,t)}function CS(c,t){c.uniform4uiv(this.addr,t)}function QS(c,t,i){const Q=this.cache,o=t.length,h=ls(i,o);Me(Q,h)||(c.uniform1iv(this.addr,h),me(Q,h));for(let w=0;w!==o;++w)i.setTexture2D(t[w]||wd,h[w])}function ES(c,t,i){const Q=this.cache,o=t.length,h=ls(i,o);Me(Q,h)||(c.uniform1iv(this.addr,h),me(Q,h));for(let w=0;w!==o;++w)i.setTexture3D(t[w]||yd,h[w])}function nS(c,t,i){const Q=this.cache,o=t.length,h=ls(i,o);Me(Q,h)||(c.uniform1iv(this.addr,h),me(Q,h));for(let w=0;w!==o;++w)i.setTextureCube(t[w]||Md,h[w])}function oS(c,t,i){const Q=this.cache,o=t.length,h=ls(i,o);Me(Q,h)||(c.uniform1iv(this.addr,h),me(Q,h));for(let w=0;w!==o;++w)i.setTexture2DArray(t[w]||pd,h[w])}function sS(c){switch(c){case 5126:return OG;case 35664:return VG;case 35665:return ZG;case 35666:return XG;case 35674:return zG;case 35675:return jG;case 35676:return $G;case 5124:case 35670:return AS;case 35667:case 35671:return gS;case 35668:case 35672:return tS;case 35669:case 35673:return IS;case 5125:return eS;case 36294:return iS;case 36295:return BS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return oS}}class aS{constructor(t,i,Q){this.id=t,this.addr=Q,this.cache=[],this.setValue=PG(i.type)}}class rS{constructor(t,i,Q){this.id=t,this.addr=Q,this.cache=[],this.size=i.size,this.setValue=sS(i.type)}}class hS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,Q){const o=this.seq;for(let h=0,w=o.length;h!==w;++h){const d=o[h];d.setValue(t,i[d.id],Q)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Kl(c,t){c.seq.push(t),c.map[t.id]=t}function cS(c,t,i){const Q=c.name,o=Q.length;for(Ir.lastIndex=0;;){const h=Ir.exec(Q),w=Ir.lastIndex;let d=h[1];const F=h[2]==="]",G=h[3];if(F&&(d=d|0),G===void 0||G==="["&&w+2===o){Kl(i,G===void 0?new aS(d,c,t):new rS(d,c,t));break}else{let x=i.map[d];x===void 0&&(x=new hS(d),Kl(i,x)),i=x}}}class os{constructor(t,i){this.seq=[],this.map={};const Q=t.getProgramParameter(i,35718);for(let o=0;o<Q;++o){const h=t.getActiveUniform(i,o),w=t.getUniformLocation(i,h.name);cS(h,w,this)}}setValue(t,i,Q,o){const h=this.map[i];h!==void 0&&h.setValue(t,Q,o)}setOptional(t,i,Q){const o=i[Q];o!==void 0&&this.setValue(t,Q,o)}static upload(t,i,Q,o){for(let h=0,w=i.length;h!==w;++h){const d=i[h],F=Q[d.id];F.needsUpdate!==!1&&d.setValue(t,F.value,o)}}static seqWithValue(t,i){const Q=[];for(let o=0,h=t.length;o!==h;++o){const w=t[o];w.id in i&&Q.push(w)}return Q}}function Yl(c,t,i){const Q=c.createShader(t);return c.shaderSource(Q,i),c.compileShader(Q),Q}let lS=0;function dS(c,t){const i=c.split(`
`),Q=[],o=Math.max(t-6,0),h=Math.min(t+6,i.length);for(let w=o;w<h;w++){const d=w+1;Q.push(`${d===t?">":" "} ${d}: ${i[w]}`)}return Q.join(`
`)}function uS(c){switch(c){case oQ:return["Linear","( value )"];case WI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function vl(c,t,i){const Q=c.getShaderParameter(t,35713),o=c.getShaderInfoLog(t).trim();if(Q&&o==="")return"";const h=/ERROR: 0:(\d+)/.exec(o);if(h){const w=parseInt(h[1]);return i.toUpperCase()+`

`+o+`

`+dS(c.getShaderSource(t),w)}else return o}function DS(c,t){const i=uS(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function fS(c,t){let i;switch(t){case yy:i="Linear";break;case My:i="Reinhard";break;case my:i="OptimizedCineon";break;case Ry:i="ACESFilmic";break;case Gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+c+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function wS(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mn).join(`
`)}function pS(c){const t=[];for(const i in c){const Q=c[i];Q!==!1&&t.push("#define "+i+" "+Q)}return t.join(`
`)}function yS(c,t){const i={},Q=c.getProgramParameter(t,35721);for(let o=0;o<Q;o++){const h=c.getActiveAttrib(t,o),w=h.name;let d=1;h.type===35674&&(d=2),h.type===35675&&(d=3),h.type===35676&&(d=4),i[w]={type:h.type,location:c.getAttribLocation(t,w),locationSize:d}}return i}function mn(c){return c!==""}function Hl(c,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rr(c){return c.replace(MS,mS)}function mS(c,t){const i=sI[t];if(i===void 0)throw new Error("Can not resolve #include <"+t+">");return rr(i)}const RS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(c){return c.replace(RS,GS)}function GS(c,t,i,Q){let o="";for(let h=parseInt(t);h<parseInt(i);h++)o+=Q.replace(/\[\s*i\s*\]/g,"[ "+h+" ]").replace(/UNROLLED_LOOP_INDEX/g,h);return o}function _l(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SS(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===ty?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function FS(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case wE:case pE:t="ENVMAP_TYPE_CUBE";break;case rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NS(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case pE:t="ENVMAP_MODE_REFRACTION";break}return t}function US(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case cr:t="ENVMAP_BLENDING_MULTIPLY";break;case wy:t="ENVMAP_BLENDING_MIX";break;case py:t="ENVMAP_BLENDING_ADD";break}return t}function kS(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,Q=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:Q,maxMip:i}}function LS(c,t,i,Q){const o=c.getContext(),h=i.defines;let w=i.vertexShader,d=i.fragmentShader;const F=SS(i),G=FS(i),N=NS(i),x=US(i),L=kS(i),H=i.isWebGL2?"":wS(i),AA=pS(h),J=o.createProgram();let U,X,oA=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(U=[AA].filter(mn).join(`
`),U.length>0&&(U+=`
`),X=[H,AA].filter(mn).join(`
`),X.length>0&&(X+=`
`)):(U=[_l(i),"#define SHADER_NAME "+i.shaderName,AA,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+N:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+F:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),X=[H,_l(i),"#define SHADER_NAME "+i.shaderName,AA,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+G:"",i.envMap?"#define "+N:"",i.envMap?"#define "+x:"",L?"#define CUBEUV_TEXEL_WIDTH "+L.texelWidth:"",L?"#define CUBEUV_TEXEL_HEIGHT "+L.texelHeight:"",L?"#define CUBEUV_MAX_MIP "+L.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+F:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==OB?"#define TONE_MAPPING":"",i.toneMapping!==OB?sI.tonemapping_pars_fragment:"",i.toneMapping!==OB?fS("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",sI.encodings_pars_fragment,DS("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(mn).join(`
`)),w=rr(w),w=Hl(w,i),w=ql(w,i),d=rr(d),d=Hl(d,i),d=ql(d,i),w=Tl(w),d=Tl(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(oA=`#version 300 es
`,U=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+U,X=["#define varying in",i.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+X);const nA=oA+U+w,cA=oA+X+d,eA=Yl(o,35633,nA),MA=Yl(o,35632,cA);if(o.attachShader(J,eA),o.attachShader(J,MA),i.index0AttributeName!==void 0?o.bindAttribLocation(J,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(J,0,"position"),o.linkProgram(J),c.debug.checkShaderErrors){const wA=o.getProgramInfoLog(J).trim(),WA=o.getShaderInfoLog(eA).trim(),eg=o.getShaderInfoLog(MA).trim();let bg=!0,kA=!0;if(o.getProgramParameter(J,35714)===!1){bg=!1;const JA=vl(o,eA,"vertex"),gg=vl(o,MA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(J,35715)+`

Program Info Log: `+wA+`
`+JA+`
`+gg)}else wA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",wA):(WA===""||eg==="")&&(kA=!1);kA&&(this.diagnostics={runnable:bg,programLog:wA,vertexShader:{log:WA,prefix:U},fragmentShader:{log:eg,prefix:X}})}o.deleteShader(eA),o.deleteShader(MA);let qA;this.getUniforms=function(){return qA===void 0&&(qA=new os(o,J)),qA};let P;return this.getAttributes=function(){return P===void 0&&(P=yS(o,J)),P},this.destroy=function(){Q.releaseStatesOfProgram(this),o.deleteProgram(J),this.program=void 0},this.name=i.shaderName,this.id=lS++,this.cacheKey=t,this.usedTimes=1,this.program=J,this.vertexShader=eA,this.fragmentShader=MA,this}let xS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,Q=t.fragmentShader,o=this._getShaderStage(i),h=this._getShaderStage(Q),w=this._getShaderCacheForMaterial(t);return w.has(o)===!1&&(w.add(o),o.usedTimes++),w.has(h)===!1&&(w.add(h),h.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const Q of i)Q.usedTimes--,Q.usedTimes===0&&this.shaderCache.delete(Q.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let Q=i.get(t);return Q===void 0&&(Q=new Set,i.set(t,Q)),Q}_getShaderStage(t){const i=this.shaderCache;let Q=i.get(t);return Q===void 0&&(Q=new bS(t),i.set(t,Q)),Q}}class bS{constructor(t){this.id=xS++,this.code=t,this.usedTimes=0}}function KS(c,t,i,Q,o,h,w){const d=new rd,F=new JS,G=[],N=o.isWebGL2,x=o.logarithmicDepthBuffer,L=o.vertexTextures;let H=o.precision;const AA={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function J(P,wA,WA,eg,bg){const kA=eg.fog,JA=bg.geometry,gg=P.isMeshStandardMaterial?eg.environment:null,yg=(P.isMeshStandardMaterial?i:t).get(P.envMap||gg),mg=yg&&yg.mapping===rs?yg.image.height:null,Bg=AA[P.type];P.precision!==null&&(H=o.getMaxPrecision(P.precision),H!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",H,"instead."));const O=JA.morphAttributes.position||JA.morphAttributes.normal||JA.morphAttributes.color,j=O!==void 0?O.length:0;let gA=0;JA.morphAttributes.position!==void 0&&(gA=1),JA.morphAttributes.normal!==void 0&&(gA=2),JA.morphAttributes.color!==void 0&&(gA=3);let QA,yA,YA,tg;if(Bg){const at=lB[Bg];QA=at.vertexShader,yA=at.fragmentShader}else QA=P.vertexShader,yA=P.fragmentShader,F.update(P),YA=F.getVertexShaderID(P),tg=F.getFragmentShaderID(P);const LA=c.getRenderTarget(),gt=P.alphaTest>0,kg=P.clearcoat>0,tt=P.iridescence>0;return{isWebGL2:N,shaderID:Bg,shaderName:P.type,vertexShader:QA,fragmentShader:yA,defines:P.defines,customVertexShaderID:YA,customFragmentShaderID:tg,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:H,instancing:bg.isInstancedMesh===!0,instancingColor:bg.isInstancedMesh===!0&&bg.instanceColor!==null,supportsVertexTextures:L,outputEncoding:LA===null?c.outputEncoding:LA.isXRRenderTarget===!0?LA.texture.encoding:oQ,map:!!P.map,matcap:!!P.matcap,envMap:!!yg,envMapMode:yg&&yg.mapping,envMapCubeUVHeight:mg,lightMap:!!P.lightMap,aoMap:!!P.aoMap,emissiveMap:!!P.emissiveMap,bumpMap:!!P.bumpMap,normalMap:!!P.normalMap,objectSpaceNormalMap:P.normalMapType===Oy,tangentSpaceNormalMap:P.normalMapType===hs,decodeVideoTexture:!!P.map&&P.map.isVideoTexture===!0&&P.map.encoding===WI,clearcoat:kg,clearcoatMap:kg&&!!P.clearcoatMap,clearcoatRoughnessMap:kg&&!!P.clearcoatRoughnessMap,clearcoatNormalMap:kg&&!!P.clearcoatNormalMap,iridescence:tt,iridescenceMap:tt&&!!P.iridescenceMap,iridescenceThicknessMap:tt&&!!P.iridescenceThicknessMap,displacementMap:!!P.displacementMap,roughnessMap:!!P.roughnessMap,metalnessMap:!!P.metalnessMap,specularMap:!!P.specularMap,specularIntensityMap:!!P.specularIntensityMap,specularColorMap:!!P.specularColorMap,opaque:P.transparent===!1&&P.blending===DE,alphaMap:!!P.alphaMap,alphaTest:gt,gradientMap:!!P.gradientMap,sheen:P.sheen>0,sheenColorMap:!!P.sheenColorMap,sheenRoughnessMap:!!P.sheenRoughnessMap,transmission:P.transmission>0,transmissionMap:!!P.transmissionMap,thicknessMap:!!P.thicknessMap,combine:P.combine,vertexTangents:!!P.normalMap&&!!JA.attributes.tangent,vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!JA.attributes.color&&JA.attributes.color.itemSize===4,vertexUvs:!!P.map||!!P.bumpMap||!!P.normalMap||!!P.specularMap||!!P.alphaMap||!!P.emissiveMap||!!P.roughnessMap||!!P.metalnessMap||!!P.clearcoatMap||!!P.clearcoatRoughnessMap||!!P.clearcoatNormalMap||!!P.iridescenceMap||!!P.iridescenceThicknessMap||!!P.displacementMap||!!P.transmissionMap||!!P.thicknessMap||!!P.specularIntensityMap||!!P.specularColorMap||!!P.sheenColorMap||!!P.sheenRoughnessMap,uvsVertexOnly:!(P.map||P.bumpMap||P.normalMap||P.specularMap||P.alphaMap||P.emissiveMap||P.roughnessMap||P.metalnessMap||P.clearcoatNormalMap||P.iridescenceMap||P.iridescenceThicknessMap||P.transmission>0||P.transmissionMap||P.thicknessMap||P.specularIntensityMap||P.specularColorMap||P.sheen>0||P.sheenColorMap||P.sheenRoughnessMap)&&!!P.displacementMap,fog:!!kA,useFog:P.fog===!0,fogExp2:kA&&kA.isFogExp2,flatShading:!!P.flatShading,sizeAttenuation:P.sizeAttenuation,logarithmicDepthBuffer:x,skinning:bg.isSkinnedMesh===!0,morphTargets:JA.morphAttributes.position!==void 0,morphNormals:JA.morphAttributes.normal!==void 0,morphColors:JA.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:gA,numDirLights:wA.directional.length,numPointLights:wA.point.length,numSpotLights:wA.spot.length,numSpotLightMaps:wA.spotLightMap.length,numRectAreaLights:wA.rectArea.length,numHemiLights:wA.hemi.length,numDirLightShadows:wA.directionalShadowMap.length,numPointLightShadows:wA.pointShadowMap.length,numSpotLightShadows:wA.spotShadowMap.length,numSpotLightShadowsWithMaps:wA.numSpotLightShadowsWithMaps,numClippingPlanes:w.numPlanes,numClipIntersection:w.numIntersection,dithering:P.dithering,shadowMapEnabled:c.shadowMap.enabled&&WA.length>0,shadowMapType:c.shadowMap.type,toneMapping:P.toneMapped?c.toneMapping:OB,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Sn,flipSided:P.side===Ji,useDepthPacking:!!P.depthPacking,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionDerivatives:P.extensions&&P.extensions.derivatives,extensionFragDepth:P.extensions&&P.extensions.fragDepth,extensionDrawBuffers:P.extensions&&P.extensions.drawBuffers,extensionShaderTextureLOD:P.extensions&&P.extensions.shaderTextureLOD,rendererExtensionFragDepth:N||Q.has("EXT_frag_depth"),rendererExtensionDrawBuffers:N||Q.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:N||Q.has("EXT_shader_texture_lod"),customProgramCacheKey:P.customProgramCacheKey()}}function U(P){const wA=[];if(P.shaderID?wA.push(P.shaderID):(wA.push(P.customVertexShaderID),wA.push(P.customFragmentShaderID)),P.defines!==void 0)for(const WA in P.defines)wA.push(WA),wA.push(P.defines[WA]);return P.isRawShaderMaterial===!1&&(X(wA,P),oA(wA,P),wA.push(c.outputEncoding)),wA.push(P.customProgramCacheKey),wA.join()}function X(P,wA){P.push(wA.precision),P.push(wA.outputEncoding),P.push(wA.envMapMode),P.push(wA.envMapCubeUVHeight),P.push(wA.combine),P.push(wA.vertexUvs),P.push(wA.fogExp2),P.push(wA.sizeAttenuation),P.push(wA.morphTargetsCount),P.push(wA.morphAttributeCount),P.push(wA.numDirLights),P.push(wA.numPointLights),P.push(wA.numSpotLights),P.push(wA.numSpotLightMaps),P.push(wA.numHemiLights),P.push(wA.numRectAreaLights),P.push(wA.numDirLightShadows),P.push(wA.numPointLightShadows),P.push(wA.numSpotLightShadows),P.push(wA.numSpotLightShadowsWithMaps),P.push(wA.shadowMapType),P.push(wA.toneMapping),P.push(wA.numClippingPlanes),P.push(wA.numClipIntersection),P.push(wA.depthPacking)}function oA(P,wA){d.disableAll(),wA.isWebGL2&&d.enable(0),wA.supportsVertexTextures&&d.enable(1),wA.instancing&&d.enable(2),wA.instancingColor&&d.enable(3),wA.map&&d.enable(4),wA.matcap&&d.enable(5),wA.envMap&&d.enable(6),wA.lightMap&&d.enable(7),wA.aoMap&&d.enable(8),wA.emissiveMap&&d.enable(9),wA.bumpMap&&d.enable(10),wA.normalMap&&d.enable(11),wA.objectSpaceNormalMap&&d.enable(12),wA.tangentSpaceNormalMap&&d.enable(13),wA.clearcoat&&d.enable(14),wA.clearcoatMap&&d.enable(15),wA.clearcoatRoughnessMap&&d.enable(16),wA.clearcoatNormalMap&&d.enable(17),wA.iridescence&&d.enable(18),wA.iridescenceMap&&d.enable(19),wA.iridescenceThicknessMap&&d.enable(20),wA.displacementMap&&d.enable(21),wA.specularMap&&d.enable(22),wA.roughnessMap&&d.enable(23),wA.metalnessMap&&d.enable(24),wA.gradientMap&&d.enable(25),wA.alphaMap&&d.enable(26),wA.alphaTest&&d.enable(27),wA.vertexColors&&d.enable(28),wA.vertexAlphas&&d.enable(29),wA.vertexUvs&&d.enable(30),wA.vertexTangents&&d.enable(31),wA.uvsVertexOnly&&d.enable(32),P.push(d.mask),d.disableAll(),wA.fog&&d.enable(0),wA.useFog&&d.enable(1),wA.flatShading&&d.enable(2),wA.logarithmicDepthBuffer&&d.enable(3),wA.skinning&&d.enable(4),wA.morphTargets&&d.enable(5),wA.morphNormals&&d.enable(6),wA.morphColors&&d.enable(7),wA.premultipliedAlpha&&d.enable(8),wA.shadowMapEnabled&&d.enable(9),wA.physicallyCorrectLights&&d.enable(10),wA.doubleSided&&d.enable(11),wA.flipSided&&d.enable(12),wA.useDepthPacking&&d.enable(13),wA.dithering&&d.enable(14),wA.specularIntensityMap&&d.enable(15),wA.specularColorMap&&d.enable(16),wA.transmission&&d.enable(17),wA.transmissionMap&&d.enable(18),wA.thicknessMap&&d.enable(19),wA.sheen&&d.enable(20),wA.sheenColorMap&&d.enable(21),wA.sheenRoughnessMap&&d.enable(22),wA.decodeVideoTexture&&d.enable(23),wA.opaque&&d.enable(24),P.push(d.mask)}function nA(P){const wA=AA[P.type];let WA;if(wA){const eg=lB[wA];WA=yM.clone(eg.uniforms)}else WA=P.uniforms;return WA}function cA(P,wA){let WA;for(let eg=0,bg=G.length;eg<bg;eg++){const kA=G[eg];if(kA.cacheKey===wA){WA=kA,++WA.usedTimes;break}}return WA===void 0&&(WA=new LS(c,wA,P,h),G.push(WA)),WA}function eA(P){if(--P.usedTimes===0){const wA=G.indexOf(P);G[wA]=G[G.length-1],G.pop(),P.destroy()}}function MA(P){F.remove(P)}function qA(){F.dispose()}return{getParameters:J,getProgramCacheKey:U,getUniforms:nA,acquireProgram:cA,releaseProgram:eA,releaseShaderCache:MA,programs:G,dispose:qA}}function YS(){let c=new WeakMap;function t(h){let w=c.get(h);return w===void 0&&(w={},c.set(h,w)),w}function i(h){c.delete(h)}function Q(h,w,d){c.get(h)[w]=d}function o(){c=new WeakMap}return{get:t,remove:i,update:Q,dispose:o}}function vS(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Wl(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Pl(){const c=[];let t=0;const i=[],Q=[],o=[];function h(){t=0,i.length=0,Q.length=0,o.length=0}function w(x,L,H,AA,J,U){let X=c[t];return X===void 0?(X={id:x.id,object:x,geometry:L,material:H,groupOrder:AA,renderOrder:x.renderOrder,z:J,group:U},c[t]=X):(X.id=x.id,X.object=x,X.geometry=L,X.material=H,X.groupOrder=AA,X.renderOrder=x.renderOrder,X.z=J,X.group=U),t++,X}function d(x,L,H,AA,J,U){const X=w(x,L,H,AA,J,U);H.transmission>0?Q.push(X):H.transparent===!0?o.push(X):i.push(X)}function F(x,L,H,AA,J,U){const X=w(x,L,H,AA,J,U);H.transmission>0?Q.unshift(X):H.transparent===!0?o.unshift(X):i.unshift(X)}function G(x,L){i.length>1&&i.sort(x||vS),Q.length>1&&Q.sort(L||Wl),o.length>1&&o.sort(L||Wl)}function N(){for(let x=t,L=c.length;x<L;x++){const H=c[x];if(H.id===null)break;H.id=null,H.object=null,H.geometry=null,H.material=null,H.group=null}}return{opaque:i,transmissive:Q,transparent:o,init:h,push:d,unshift:F,finish:N,sort:G}}function HS(){let c=new WeakMap;function t(Q,o){const h=c.get(Q);let w;return h===void 0?(w=new Pl,c.set(Q,[w])):o>=h.length?(w=new Pl,h.push(w)):w=h[o],w}function i(){c=new WeakMap}return{get:t,dispose:i}}function qS(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new OA,color:new xI};break;case"SpotLight":i={position:new OA,direction:new OA,color:new xI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new OA,color:new xI,distance:0,decay:0};break;case"HemisphereLight":i={direction:new OA,skyColor:new xI,groundColor:new xI};break;case"RectAreaLight":i={color:new xI,position:new OA,halfWidth:new OA,halfHeight:new OA};break}return c[t.id]=i,i}}}function TS(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tI};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tI};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tI,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=i,i}}}let _S=0;function WS(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function PS(c,t){const i=new qS,Q=TS(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let N=0;N<9;N++)o.probe.push(new OA);const h=new OA,w=new ye,d=new ye;function F(N,x){let L=0,H=0,AA=0;for(let eg=0;eg<9;eg++)o.probe[eg].set(0,0,0);let J=0,U=0,X=0,oA=0,nA=0,cA=0,eA=0,MA=0,qA=0,P=0;N.sort(WS);const wA=x!==!0?Math.PI:1;for(let eg=0,bg=N.length;eg<bg;eg++){const kA=N[eg],JA=kA.color,gg=kA.intensity,yg=kA.distance,mg=kA.shadow&&kA.shadow.map?kA.shadow.map.texture:null;if(kA.isAmbientLight)L+=JA.r*gg*wA,H+=JA.g*gg*wA,AA+=JA.b*gg*wA;else if(kA.isLightProbe)for(let Bg=0;Bg<9;Bg++)o.probe[Bg].addScaledVector(kA.sh.coefficients[Bg],gg);else if(kA.isDirectionalLight){const Bg=i.get(kA);if(Bg.color.copy(kA.color).multiplyScalar(kA.intensity*wA),kA.castShadow){const O=kA.shadow,j=Q.get(kA);j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,o.directionalShadow[J]=j,o.directionalShadowMap[J]=mg,o.directionalShadowMatrix[J]=kA.shadow.matrix,cA++}o.directional[J]=Bg,J++}else if(kA.isSpotLight){const Bg=i.get(kA);Bg.position.setFromMatrixPosition(kA.matrixWorld),Bg.color.copy(JA).multiplyScalar(gg*wA),Bg.distance=yg,Bg.coneCos=Math.cos(kA.angle),Bg.penumbraCos=Math.cos(kA.angle*(1-kA.penumbra)),Bg.decay=kA.decay,o.spot[X]=Bg;const O=kA.shadow;if(kA.map&&(o.spotLightMap[qA]=kA.map,qA++,O.updateMatrices(kA),kA.castShadow&&P++),o.spotLightMatrix[X]=O.matrix,kA.castShadow){const j=Q.get(kA);j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,o.spotShadow[X]=j,o.spotShadowMap[X]=mg,MA++}X++}else if(kA.isRectAreaLight){const Bg=i.get(kA);Bg.color.copy(JA).multiplyScalar(gg),Bg.halfWidth.set(kA.width*.5,0,0),Bg.halfHeight.set(0,kA.height*.5,0),o.rectArea[oA]=Bg,oA++}else if(kA.isPointLight){const Bg=i.get(kA);if(Bg.color.copy(kA.color).multiplyScalar(kA.intensity*wA),Bg.distance=kA.distance,Bg.decay=kA.decay,kA.castShadow){const O=kA.shadow,j=Q.get(kA);j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,o.pointShadow[U]=j,o.pointShadowMap[U]=mg,o.pointShadowMatrix[U]=kA.shadow.matrix,eA++}o.point[U]=Bg,U++}else if(kA.isHemisphereLight){const Bg=i.get(kA);Bg.skyColor.copy(kA.color).multiplyScalar(gg*wA),Bg.groundColor.copy(kA.groundColor).multiplyScalar(gg*wA),o.hemi[nA]=Bg,nA++}}oA>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=It.LTC_FLOAT_1,o.rectAreaLTC2=It.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=It.LTC_HALF_1,o.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=L,o.ambient[1]=H,o.ambient[2]=AA;const WA=o.hash;(WA.directionalLength!==J||WA.pointLength!==U||WA.spotLength!==X||WA.rectAreaLength!==oA||WA.hemiLength!==nA||WA.numDirectionalShadows!==cA||WA.numPointShadows!==eA||WA.numSpotShadows!==MA||WA.numSpotMaps!==qA)&&(o.directional.length=J,o.spot.length=X,o.rectArea.length=oA,o.point.length=U,o.hemi.length=nA,o.directionalShadow.length=cA,o.directionalShadowMap.length=cA,o.pointShadow.length=eA,o.pointShadowMap.length=eA,o.spotShadow.length=MA,o.spotShadowMap.length=MA,o.directionalShadowMatrix.length=cA,o.pointShadowMatrix.length=eA,o.spotLightMatrix.length=MA+qA-P,o.spotLightMap.length=qA,o.numSpotLightShadowsWithMaps=P,WA.directionalLength=J,WA.pointLength=U,WA.spotLength=X,WA.rectAreaLength=oA,WA.hemiLength=nA,WA.numDirectionalShadows=cA,WA.numPointShadows=eA,WA.numSpotShadows=MA,WA.numSpotMaps=qA,o.version=_S++)}function G(N,x){let L=0,H=0,AA=0,J=0,U=0;const X=x.matrixWorldInverse;for(let oA=0,nA=N.length;oA<nA;oA++){const cA=N[oA];if(cA.isDirectionalLight){const eA=o.directional[L];eA.direction.setFromMatrixPosition(cA.matrixWorld),h.setFromMatrixPosition(cA.target.matrixWorld),eA.direction.sub(h),eA.direction.transformDirection(X),L++}else if(cA.isSpotLight){const eA=o.spot[AA];eA.position.setFromMatrixPosition(cA.matrixWorld),eA.position.applyMatrix4(X),eA.direction.setFromMatrixPosition(cA.matrixWorld),h.setFromMatrixPosition(cA.target.matrixWorld),eA.direction.sub(h),eA.direction.transformDirection(X),AA++}else if(cA.isRectAreaLight){const eA=o.rectArea[J];eA.position.setFromMatrixPosition(cA.matrixWorld),eA.position.applyMatrix4(X),d.identity(),w.copy(cA.matrixWorld),w.premultiply(X),d.extractRotation(w),eA.halfWidth.set(cA.width*.5,0,0),eA.halfHeight.set(0,cA.height*.5,0),eA.halfWidth.applyMatrix4(d),eA.halfHeight.applyMatrix4(d),J++}else if(cA.isPointLight){const eA=o.point[H];eA.position.setFromMatrixPosition(cA.matrixWorld),eA.position.applyMatrix4(X),H++}else if(cA.isHemisphereLight){const eA=o.hemi[U];eA.direction.setFromMatrixPosition(cA.matrixWorld),eA.direction.transformDirection(X),U++}}}return{setup:F,setupView:G,state:o}}function Ol(c,t){const i=new PS(c,t),Q=[],o=[];function h(){Q.length=0,o.length=0}function w(x){Q.push(x)}function d(x){o.push(x)}function F(x){i.setup(Q,x)}function G(x){i.setupView(Q,x)}return{init:h,state:{lightsArray:Q,shadowsArray:o,lights:i},setupLights:F,setupLightsView:G,pushLight:w,pushShadow:d}}function OS(c,t){let i=new WeakMap;function Q(h,w=0){const d=i.get(h);let F;return d===void 0?(F=new Ol(c,t),i.set(h,[F])):w>=d.length?(F=new Ol(c,t),d.push(F)):F=d[w],F}function o(){i=new WeakMap}return{get:Q,dispose:o}}class VS extends cQ{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends cQ{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new OA,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jS(c,t,i){let Q=new Dr;const o=new tI,h=new tI,w=new Ue,d=new VS({depthPacking:Py}),F=new ZS,G={},N=i.maxTextureSize,x={0:Ji,1:EQ,2:Sn},L=new rQ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tI},radius:{value:4}},vertexShader:XS,fragmentShader:zS}),H=L.clone();H.defines.HORIZONTAL_PASS=1;const AA=new pC;AA.setAttribute("position",new dB(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const J=new fi(AA,L),U=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed,this.render=function(cA,eA,MA){if(U.enabled===!1||U.autoUpdate===!1&&U.needsUpdate===!1||cA.length===0)return;const qA=c.getRenderTarget(),P=c.getActiveCubeFace(),wA=c.getActiveMipmapLevel(),WA=c.state;WA.setBlending(wC),WA.buffers.color.setClear(1,1,1,1),WA.buffers.depth.setTest(!0),WA.setScissorTest(!1);for(let eg=0,bg=cA.length;eg<bg;eg++){const kA=cA[eg],JA=kA.shadow;if(JA===void 0){console.warn("THREE.WebGLShadowMap:",kA,"has no shadow.");continue}if(JA.autoUpdate===!1&&JA.needsUpdate===!1)continue;o.copy(JA.mapSize);const gg=JA.getFrameExtents();if(o.multiply(gg),h.copy(JA.mapSize),(o.x>N||o.y>N)&&(o.x>N&&(h.x=Math.floor(N/gg.x),o.x=h.x*gg.x,JA.mapSize.x=h.x),o.y>N&&(h.y=Math.floor(N/gg.y),o.y=h.y*gg.y,JA.mapSize.y=h.y)),JA.map===null){const mg=this.type!==yn?{minFilter:$e,magFilter:$e}:{};JA.map=new sQ(o.x,o.y,mg),JA.map.texture.name=kA.name+".shadowMap",JA.camera.updateProjectionMatrix()}c.setRenderTarget(JA.map),c.clear();const yg=JA.getViewportCount();for(let mg=0;mg<yg;mg++){const Bg=JA.getViewport(mg);w.set(h.x*Bg.x,h.y*Bg.y,h.x*Bg.z,h.y*Bg.w),WA.viewport(w),JA.updateMatrices(kA,mg),Q=JA.getFrustum(),nA(eA,MA,JA.camera,kA,this.type)}JA.isPointLightShadow!==!0&&this.type===yn&&X(JA,MA),JA.needsUpdate=!1}U.needsUpdate=!1,c.setRenderTarget(qA,P,wA)};function X(cA,eA){const MA=t.update(J);L.defines.VSM_SAMPLES!==cA.blurSamples&&(L.defines.VSM_SAMPLES=cA.blurSamples,H.defines.VSM_SAMPLES=cA.blurSamples,L.needsUpdate=!0,H.needsUpdate=!0),cA.mapPass===null&&(cA.mapPass=new sQ(o.x,o.y)),L.uniforms.shadow_pass.value=cA.map.texture,L.uniforms.resolution.value=cA.mapSize,L.uniforms.radius.value=cA.radius,c.setRenderTarget(cA.mapPass),c.clear(),c.renderBufferDirect(eA,null,MA,L,J,null),H.uniforms.shadow_pass.value=cA.mapPass.texture,H.uniforms.resolution.value=cA.mapSize,H.uniforms.radius.value=cA.radius,c.setRenderTarget(cA.map),c.clear(),c.renderBufferDirect(eA,null,MA,H,J,null)}function oA(cA,eA,MA,qA,P,wA){let WA=null;const eg=MA.isPointLight===!0?cA.customDistanceMaterial:cA.customDepthMaterial;if(eg!==void 0)WA=eg;else if(WA=MA.isPointLight===!0?F:d,c.localClippingEnabled&&eA.clipShadows===!0&&Array.isArray(eA.clippingPlanes)&&eA.clippingPlanes.length!==0||eA.displacementMap&&eA.displacementScale!==0||eA.alphaMap&&eA.alphaTest>0||eA.map&&eA.alphaTest>0){const bg=WA.uuid,kA=eA.uuid;let JA=G[bg];JA===void 0&&(JA={},G[bg]=JA);let gg=JA[kA];gg===void 0&&(gg=WA.clone(),JA[kA]=gg),WA=gg}return WA.visible=eA.visible,WA.wireframe=eA.wireframe,wA===yn?WA.side=eA.shadowSide!==null?eA.shadowSide:eA.side:WA.side=eA.shadowSide!==null?eA.shadowSide:x[eA.side],WA.alphaMap=eA.alphaMap,WA.alphaTest=eA.alphaTest,WA.map=eA.map,WA.clipShadows=eA.clipShadows,WA.clippingPlanes=eA.clippingPlanes,WA.clipIntersection=eA.clipIntersection,WA.displacementMap=eA.displacementMap,WA.displacementScale=eA.displacementScale,WA.displacementBias=eA.displacementBias,WA.wireframeLinewidth=eA.wireframeLinewidth,WA.linewidth=eA.linewidth,MA.isPointLight===!0&&WA.isMeshDistanceMaterial===!0&&(WA.referencePosition.setFromMatrixPosition(MA.matrixWorld),WA.nearDistance=qA,WA.farDistance=P),WA}function nA(cA,eA,MA,qA,P){if(cA.visible===!1)return;if(cA.layers.test(eA.layers)&&(cA.isMesh||cA.isLine||cA.isPoints)&&(cA.castShadow||cA.receiveShadow&&P===yn)&&(!cA.frustumCulled||Q.intersectsObject(cA))){cA.modelViewMatrix.multiplyMatrices(MA.matrixWorldInverse,cA.matrixWorld);const eg=t.update(cA),bg=cA.material;if(Array.isArray(bg)){const kA=eg.groups;for(let JA=0,gg=kA.length;JA<gg;JA++){const yg=kA[JA],mg=bg[yg.materialIndex];if(mg&&mg.visible){const Bg=oA(cA,mg,qA,MA.near,MA.far,P);c.renderBufferDirect(MA,null,eg,Bg,cA,yg)}}}else if(bg.visible){const kA=oA(cA,bg,qA,MA.near,MA.far,P);c.renderBufferDirect(MA,null,eg,kA,cA,null)}}const WA=cA.children;for(let eg=0,bg=WA.length;eg<bg;eg++)nA(WA[eg],eA,MA,qA,P)}}function $S(c,t,i){const Q=i.isWebGL2;function o(){let SA=!1;const ng=new Ue;let Ug=null;const $g=new Ue(0,0,0,0);return{setMask:function(lt){Ug!==lt&&!SA&&(c.colorMask(lt,lt,lt,lt),Ug=lt)},setLocked:function(lt){SA=lt},setClear:function(lt,_t,ZI,qI,qe){qe===!0&&(lt*=qI,_t*=qI,ZI*=qI),ng.set(lt,_t,ZI,qI),$g.equals(ng)===!1&&(c.clearColor(lt,_t,ZI,qI),$g.copy(ng))},reset:function(){SA=!1,Ug=null,$g.set(-1,0,0,0)}}}function h(){let SA=!1,ng=null,Ug=null,$g=null;return{setTest:function(lt){lt?gt(2929):kg(2929)},setMask:function(lt){ng!==lt&&!SA&&(c.depthMask(lt),ng=lt)},setFunc:function(lt){if(Ug!==lt){switch(lt){case hy:c.depthFunc(512);break;case cy:c.depthFunc(519);break;case ly:c.depthFunc(513);break;case Cr:c.depthFunc(515);break;case dy:c.depthFunc(514);break;case uy:c.depthFunc(518);break;case Dy:c.depthFunc(516);break;case fy:c.depthFunc(517);break;default:c.depthFunc(515)}Ug=lt}},setLocked:function(lt){SA=lt},setClear:function(lt){$g!==lt&&(c.clearDepth(lt),$g=lt)},reset:function(){SA=!1,ng=null,Ug=null,$g=null}}}function w(){let SA=!1,ng=null,Ug=null,$g=null,lt=null,_t=null,ZI=null,qI=null,qe=null;return{setTest:function(FI){SA||(FI?gt(2960):kg(2960))},setMask:function(FI){ng!==FI&&!SA&&(c.stencilMask(FI),ng=FI)},setFunc:function(FI,PI,Re){(Ug!==FI||$g!==PI||lt!==Re)&&(c.stencilFunc(FI,PI,Re),Ug=FI,$g=PI,lt=Re)},setOp:function(FI,PI,Re){(_t!==FI||ZI!==PI||qI!==Re)&&(c.stencilOp(FI,PI,Re),_t=FI,ZI=PI,qI=Re)},setLocked:function(FI){SA=FI},setClear:function(FI){qe!==FI&&(c.clearStencil(FI),qe=FI)},reset:function(){SA=!1,ng=null,Ug=null,$g=null,lt=null,_t=null,ZI=null,qI=null,qe=null}}}const d=new o,F=new h,G=new w,N=new WeakMap,x=new WeakMap;let L={},H={},AA=new WeakMap,J=[],U=null,X=!1,oA=null,nA=null,cA=null,eA=null,MA=null,qA=null,P=null,wA=!1,WA=null,eg=null,bg=null,kA=null,JA=null;const gg=c.getParameter(35661);let yg=!1,mg=0;const Bg=c.getParameter(7938);Bg.indexOf("WebGL")!==-1?(mg=parseFloat(/^WebGL (\d)/.exec(Bg)[1]),yg=mg>=1):Bg.indexOf("OpenGL ES")!==-1&&(mg=parseFloat(/^OpenGL ES (\d)/.exec(Bg)[1]),yg=mg>=2);let O=null,j={};const gA=c.getParameter(3088),QA=c.getParameter(2978),yA=new Ue().fromArray(gA),YA=new Ue().fromArray(QA);function tg(SA,ng,Ug){const $g=new Uint8Array(4),lt=c.createTexture();c.bindTexture(SA,lt),c.texParameteri(SA,10241,9728),c.texParameteri(SA,10240,9728);for(let _t=0;_t<Ug;_t++)c.texImage2D(ng+_t,0,6408,1,1,0,6408,5121,$g);return lt}const LA={};LA[3553]=tg(3553,3553,1),LA[34067]=tg(34067,34069,6),d.setClear(0,0,0,1),F.setClear(1),G.setClear(0),gt(2929),F.setFunc(Cr),Wg(!1),Gt(Yc),gt(2884),wg(wC);function gt(SA){L[SA]!==!0&&(c.enable(SA),L[SA]=!0)}function kg(SA){L[SA]!==!1&&(c.disable(SA),L[SA]=!1)}function tt(SA,ng){return H[SA]!==ng?(c.bindFramebuffer(SA,ng),H[SA]=ng,Q&&(SA===36009&&(H[36160]=ng),SA===36160&&(H[36009]=ng)),!0):!1}function Og(SA,ng){let Ug=J,$g=!1;if(SA)if(Ug=AA.get(ng),Ug===void 0&&(Ug=[],AA.set(ng,Ug)),SA.isWebGLMultipleRenderTargets){const lt=SA.texture;if(Ug.length!==lt.length||Ug[0]!==36064){for(let _t=0,ZI=lt.length;_t<ZI;_t++)Ug[_t]=36064+_t;Ug.length=lt.length,$g=!0}}else Ug[0]!==36064&&(Ug[0]=36064,$g=!0);else Ug[0]!==1029&&(Ug[0]=1029,$g=!0);$g&&(i.isWebGL2?c.drawBuffers(Ug):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ug))}function at(SA){return U!==SA?(c.useProgram(SA),U=SA,!0):!1}const Ag={[lE]:32774,[ey]:32778,[iy]:32779};if(Q)Ag[Tc]=32775,Ag[_c]=32776;else{const SA=t.get("EXT_blend_minmax");SA!==null&&(Ag[Tc]=SA.MIN_EXT,Ag[_c]=SA.MAX_EXT)}const VA={[By]:0,[Cy]:1,[Qy]:768,[id]:770,[ry]:776,[sy]:774,[ny]:772,[Ey]:769,[Bd]:771,[ay]:775,[oy]:773};function wg(SA,ng,Ug,$g,lt,_t,ZI,qI){if(SA===wC){X===!0&&(kg(3042),X=!1);return}if(X===!1&&(gt(3042),X=!0),SA!==Iy){if(SA!==oA||qI!==wA){if((nA!==lE||MA!==lE)&&(c.blendEquation(32774),nA=lE,MA=lE),qI)switch(SA){case DE:c.blendFuncSeparate(1,771,1,771);break;case vc:c.blendFunc(1,1);break;case Hc:c.blendFuncSeparate(0,769,0,1);break;case qc:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",SA);break}else switch(SA){case DE:c.blendFuncSeparate(770,771,1,771);break;case vc:c.blendFunc(770,1);break;case Hc:c.blendFuncSeparate(0,769,0,1);break;case qc:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",SA);break}cA=null,eA=null,qA=null,P=null,oA=SA,wA=qI}return}lt=lt||ng,_t=_t||Ug,ZI=ZI||$g,(ng!==nA||lt!==MA)&&(c.blendEquationSeparate(Ag[ng],Ag[lt]),nA=ng,MA=lt),(Ug!==cA||$g!==eA||_t!==qA||ZI!==P)&&(c.blendFuncSeparate(VA[Ug],VA[$g],VA[_t],VA[ZI]),cA=Ug,eA=$g,qA=_t,P=ZI),oA=SA,wA=!1}function et(SA,ng){SA.side===Sn?kg(2884):gt(2884);let Ug=SA.side===Ji;ng&&(Ug=!Ug),Wg(Ug),SA.blending===DE&&SA.transparent===!1?wg(wC):wg(SA.blending,SA.blendEquation,SA.blendSrc,SA.blendDst,SA.blendEquationAlpha,SA.blendSrcAlpha,SA.blendDstAlpha,SA.premultipliedAlpha),F.setFunc(SA.depthFunc),F.setTest(SA.depthTest),F.setMask(SA.depthWrite),d.setMask(SA.colorWrite);const $g=SA.stencilWrite;G.setTest($g),$g&&(G.setMask(SA.stencilWriteMask),G.setFunc(SA.stencilFunc,SA.stencilRef,SA.stencilFuncMask),G.setOp(SA.stencilFail,SA.stencilZFail,SA.stencilZPass)),Bt(SA.polygonOffset,SA.polygonOffsetFactor,SA.polygonOffsetUnits),SA.alphaToCoverage===!0?gt(32926):kg(32926)}function Wg(SA){WA!==SA&&(SA?c.frontFace(2304):c.frontFace(2305),WA=SA)}function Gt(SA){SA!==Ay?(gt(2884),SA!==eg&&(SA===Yc?c.cullFace(1029):SA===gy?c.cullFace(1028):c.cullFace(1032))):kg(2884),eg=SA}function ct(SA){SA!==bg&&(yg&&c.lineWidth(SA),bg=SA)}function Bt(SA,ng,Ug){SA?(gt(32823),(kA!==ng||JA!==Ug)&&(c.polygonOffset(ng,Ug),kA=ng,JA=Ug)):kg(32823)}function jt(SA){SA?gt(3089):kg(3089)}function $A(SA){SA===void 0&&(SA=33984+gg-1),O!==SA&&(c.activeTexture(SA),O=SA)}function iA(SA,ng,Ug){Ug===void 0&&(O===null?Ug=33984+gg-1:Ug=O);let $g=j[Ug];$g===void 0&&($g={type:void 0,texture:void 0},j[Ug]=$g),($g.type!==SA||$g.texture!==ng)&&(O!==Ug&&(c.activeTexture(Ug),O=Ug),c.bindTexture(SA,ng||LA[SA]),$g.type=SA,$g.texture=ng)}function z(){const SA=j[O];SA!==void 0&&SA.type!==void 0&&(c.bindTexture(SA.type,null),SA.type=void 0,SA.texture=void 0)}function jA(){try{c.compressedTexImage2D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function Eg(){try{c.compressedTexImage3D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function Rg(){try{c.texSubImage2D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function Xg(){try{c.texSubImage3D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function yt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function dA(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function vA(){try{c.texStorage2D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function Jg(){try{c.texStorage3D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function Qt(){try{c.texImage2D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function it(){try{c.texImage3D.apply(c,arguments)}catch(SA){console.error("THREE.WebGLState:",SA)}}function rt(SA){yA.equals(SA)===!1&&(c.scissor(SA.x,SA.y,SA.z,SA.w),yA.copy(SA))}function Dt(SA){YA.equals(SA)===!1&&(c.viewport(SA.x,SA.y,SA.z,SA.w),YA.copy(SA))}function vt(SA,ng){let Ug=x.get(ng);Ug===void 0&&(Ug=new WeakMap,x.set(ng,Ug));let $g=Ug.get(SA);$g===void 0&&($g=c.getUniformBlockIndex(ng,SA.name),Ug.set(SA,$g))}function II(SA,ng){const $g=x.get(ng).get(SA);N.get(ng)!==$g&&(c.uniformBlockBinding(ng,$g,SA.__bindingPointIndex),N.set(ng,$g))}function wI(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),Q===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),L={},O=null,j={},H={},AA=new WeakMap,J=[],U=null,X=!1,oA=null,nA=null,cA=null,eA=null,MA=null,qA=null,P=null,wA=!1,WA=null,eg=null,bg=null,kA=null,JA=null,yA.set(0,0,c.canvas.width,c.canvas.height),YA.set(0,0,c.canvas.width,c.canvas.height),d.reset(),F.reset(),G.reset()}return{buffers:{color:d,depth:F,stencil:G},enable:gt,disable:kg,bindFramebuffer:tt,drawBuffers:Og,useProgram:at,setBlending:wg,setMaterial:et,setFlipSided:Wg,setCullFace:Gt,setLineWidth:ct,setPolygonOffset:Bt,setScissorTest:jt,activeTexture:$A,bindTexture:iA,unbindTexture:z,compressedTexImage2D:jA,compressedTexImage3D:Eg,texImage2D:Qt,texImage3D:it,updateUBOMapping:vt,uniformBlockBinding:II,texStorage2D:vA,texStorage3D:Jg,texSubImage2D:Rg,texSubImage3D:Xg,compressedTexSubImage2D:yt,compressedTexSubImage3D:dA,scissor:rt,viewport:Dt,reset:wI}}function AF(c,t,i,Q,o,h,w){const d=o.isWebGL2,F=o.maxTextures,G=o.maxCubemapSize,N=o.maxTextureSize,x=o.maxSamples,L=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),AA=new WeakMap;let J;const U=new WeakMap;let X=!1;try{X=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function oA(iA,z){return X?new OffscreenCanvas(iA,z):kn("canvas")}function nA(iA,z,jA,Eg){let Rg=1;if((iA.width>Eg||iA.height>Eg)&&(Rg=Eg/Math.max(iA.width,iA.height)),Rg<1||z===!0)if(typeof HTMLImageElement<"u"&&iA instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&iA instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&iA instanceof ImageBitmap){const Xg=z?as:Math.floor,yt=Xg(Rg*iA.width),dA=Xg(Rg*iA.height);J===void 0&&(J=oA(yt,dA));const vA=jA?oA(yt,dA):J;return vA.width=yt,vA.height=dA,vA.getContext("2d").drawImage(iA,0,0,yt,dA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+iA.width+"x"+iA.height+") to ("+yt+"x"+dA+")."),vA}else return"data"in iA&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+iA.width+"x"+iA.height+")."),iA;return iA}function cA(iA){return ar(iA.width)&&ar(iA.height)}function eA(iA){return d?!1:iA.wrapS!==Xi||iA.wrapT!==Xi||iA.minFilter!==$e&&iA.minFilter!==Li}function MA(iA,z){return iA.generateMipmaps&&z&&iA.minFilter!==$e&&iA.minFilter!==Li}function qA(iA){c.generateMipmap(iA)}function P(iA,z,jA,Eg,Rg=!1){if(d===!1)return z;if(iA!==null){if(c[iA]!==void 0)return c[iA];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+iA+"'")}let Xg=z;return z===6403&&(jA===5126&&(Xg=33326),jA===5131&&(Xg=33325),jA===5121&&(Xg=33321)),z===33319&&(jA===5126&&(Xg=33328),jA===5131&&(Xg=33327),jA===5121&&(Xg=33323)),z===6408&&(jA===5126&&(Xg=34836),jA===5131&&(Xg=34842),jA===5121&&(Xg=Eg===WI&&Rg===!1?35907:32856),jA===32819&&(Xg=32854),jA===32820&&(Xg=32855)),(Xg===33325||Xg===33326||Xg===33327||Xg===33328||Xg===34842||Xg===34836)&&t.get("EXT_color_buffer_float"),Xg}function wA(iA,z,jA){return MA(iA,jA)===!0||iA.isFramebufferTexture&&iA.minFilter!==$e&&iA.minFilter!==Li?Math.log2(Math.max(z.width,z.height))+1:iA.mipmaps!==void 0&&iA.mipmaps.length>0?iA.mipmaps.length:iA.isCompressedTexture&&Array.isArray(iA.image)?z.mipmaps.length:1}function WA(iA){return iA===$e||iA===Wc||iA===Sa?9728:9729}function eg(iA){const z=iA.target;z.removeEventListener("dispose",eg),kA(z),z.isVideoTexture&&AA.delete(z)}function bg(iA){const z=iA.target;z.removeEventListener("dispose",bg),gg(z)}function kA(iA){const z=Q.get(iA);if(z.__webglInit===void 0)return;const jA=iA.source,Eg=U.get(jA);if(Eg){const Rg=Eg[z.__cacheKey];Rg.usedTimes--,Rg.usedTimes===0&&JA(iA),Object.keys(Eg).length===0&&U.delete(jA)}Q.remove(iA)}function JA(iA){const z=Q.get(iA);c.deleteTexture(z.__webglTexture);const jA=iA.source,Eg=U.get(jA);delete Eg[z.__cacheKey],w.memory.textures--}function gg(iA){const z=iA.texture,jA=Q.get(iA),Eg=Q.get(z);if(Eg.__webglTexture!==void 0&&(c.deleteTexture(Eg.__webglTexture),w.memory.textures--),iA.depthTexture&&iA.depthTexture.dispose(),iA.isWebGLCubeRenderTarget)for(let Rg=0;Rg<6;Rg++)c.deleteFramebuffer(jA.__webglFramebuffer[Rg]),jA.__webglDepthbuffer&&c.deleteRenderbuffer(jA.__webglDepthbuffer[Rg]);else{if(c.deleteFramebuffer(jA.__webglFramebuffer),jA.__webglDepthbuffer&&c.deleteRenderbuffer(jA.__webglDepthbuffer),jA.__webglMultisampledFramebuffer&&c.deleteFramebuffer(jA.__webglMultisampledFramebuffer),jA.__webglColorRenderbuffer)for(let Rg=0;Rg<jA.__webglColorRenderbuffer.length;Rg++)jA.__webglColorRenderbuffer[Rg]&&c.deleteRenderbuffer(jA.__webglColorRenderbuffer[Rg]);jA.__webglDepthRenderbuffer&&c.deleteRenderbuffer(jA.__webglDepthRenderbuffer)}if(iA.isWebGLMultipleRenderTargets)for(let Rg=0,Xg=z.length;Rg<Xg;Rg++){const yt=Q.get(z[Rg]);yt.__webglTexture&&(c.deleteTexture(yt.__webglTexture),w.memory.textures--),Q.remove(z[Rg])}Q.remove(z),Q.remove(iA)}let yg=0;function mg(){yg=0}function Bg(){const iA=yg;return iA>=F&&console.warn("THREE.WebGLTextures: Trying to use "+iA+" texture units while this GPU supports only "+F),yg+=1,iA}function O(iA){const z=[];return z.push(iA.wrapS),z.push(iA.wrapT),z.push(iA.wrapR||0),z.push(iA.magFilter),z.push(iA.minFilter),z.push(iA.anisotropy),z.push(iA.internalFormat),z.push(iA.format),z.push(iA.type),z.push(iA.generateMipmaps),z.push(iA.premultiplyAlpha),z.push(iA.flipY),z.push(iA.unpackAlignment),z.push(iA.encoding),z.join()}function j(iA,z){const jA=Q.get(iA);if(iA.isVideoTexture&&jt(iA),iA.isRenderTargetTexture===!1&&iA.version>0&&jA.__version!==iA.version){const Eg=iA.image;if(Eg===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Eg.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kg(jA,iA,z);return}}i.bindTexture(3553,jA.__webglTexture,33984+z)}function gA(iA,z){const jA=Q.get(iA);if(iA.version>0&&jA.__version!==iA.version){kg(jA,iA,z);return}i.bindTexture(35866,jA.__webglTexture,33984+z)}function QA(iA,z){const jA=Q.get(iA);if(iA.version>0&&jA.__version!==iA.version){kg(jA,iA,z);return}i.bindTexture(32879,jA.__webglTexture,33984+z)}function yA(iA,z){const jA=Q.get(iA);if(iA.version>0&&jA.__version!==iA.version){tt(jA,iA,z);return}i.bindTexture(34067,jA.__webglTexture,33984+z)}const YA={[nr]:10497,[Xi]:33071,[or]:33648},tg={[$e]:9728,[Wc]:9984,[Sa]:9986,[Li]:9729,[Sy]:9985,[Fn]:9987};function LA(iA,z,jA){if(jA?(c.texParameteri(iA,10242,YA[z.wrapS]),c.texParameteri(iA,10243,YA[z.wrapT]),(iA===32879||iA===35866)&&c.texParameteri(iA,32882,YA[z.wrapR]),c.texParameteri(iA,10240,tg[z.magFilter]),c.texParameteri(iA,10241,tg[z.minFilter])):(c.texParameteri(iA,10242,33071),c.texParameteri(iA,10243,33071),(iA===32879||iA===35866)&&c.texParameteri(iA,32882,33071),(z.wrapS!==Xi||z.wrapT!==Xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(iA,10240,WA(z.magFilter)),c.texParameteri(iA,10241,WA(z.minFilter)),z.minFilter!==$e&&z.minFilter!==Li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Eg=t.get("EXT_texture_filter_anisotropic");if(z.magFilter===$e||z.minFilter!==Sa&&z.minFilter!==Fn||z.type===BQ&&t.has("OES_texture_float_linear")===!1||d===!1&&z.type===Nn&&t.has("OES_texture_half_float_linear")===!1)return;(z.anisotropy>1||Q.get(z).__currentAnisotropy)&&(c.texParameterf(iA,Eg.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,o.getMaxAnisotropy())),Q.get(z).__currentAnisotropy=z.anisotropy)}}function gt(iA,z){let jA=!1;iA.__webglInit===void 0&&(iA.__webglInit=!0,z.addEventListener("dispose",eg));const Eg=z.source;let Rg=U.get(Eg);Rg===void 0&&(Rg={},U.set(Eg,Rg));const Xg=O(z);if(Xg!==iA.__cacheKey){Rg[Xg]===void 0&&(Rg[Xg]={texture:c.createTexture(),usedTimes:0},w.memory.textures++,jA=!0),Rg[Xg].usedTimes++;const yt=Rg[iA.__cacheKey];yt!==void 0&&(Rg[iA.__cacheKey].usedTimes--,yt.usedTimes===0&&JA(z)),iA.__cacheKey=Xg,iA.__webglTexture=Rg[Xg].texture}return jA}function kg(iA,z,jA){let Eg=3553;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(Eg=35866),z.isData3DTexture&&(Eg=32879);const Rg=gt(iA,z),Xg=z.source;i.bindTexture(Eg,iA.__webglTexture,33984+jA);const yt=Q.get(Xg);if(Xg.version!==yt.__version||Rg===!0){i.activeTexture(33984+jA),c.pixelStorei(37440,z.flipY),c.pixelStorei(37441,z.premultiplyAlpha),c.pixelStorei(3317,z.unpackAlignment),c.pixelStorei(37443,0);const dA=eA(z)&&cA(z.image)===!1;let vA=nA(z.image,dA,!1,N);vA=$A(z,vA);const Jg=cA(vA)||d,Qt=h.convert(z.format,z.encoding);let it=h.convert(z.type),rt=P(z.internalFormat,Qt,it,z.encoding,z.isVideoTexture);LA(Eg,z,Jg);let Dt;const vt=z.mipmaps,II=d&&z.isVideoTexture!==!0,wI=yt.__version===void 0||Rg===!0,SA=wA(z,vA,Jg);if(z.isDepthTexture)rt=6402,d?z.type===BQ?rt=36012:z.type===iQ?rt=33190:z.type===fE?rt=35056:rt=33189:z.type===BQ&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),z.format===CQ&&rt===6402&&z.type!==Qd&&z.type!==iQ&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=iQ,it=h.convert(z.type)),z.format===yE&&rt===6402&&(rt=34041,z.type!==fE&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=fE,it=h.convert(z.type))),wI&&(II?i.texStorage2D(3553,1,rt,vA.width,vA.height):i.texImage2D(3553,0,rt,vA.width,vA.height,0,Qt,it,null));else if(z.isDataTexture)if(vt.length>0&&Jg){II&&wI&&i.texStorage2D(3553,SA,rt,vt[0].width,vt[0].height);for(let ng=0,Ug=vt.length;ng<Ug;ng++)Dt=vt[ng],II?i.texSubImage2D(3553,ng,0,0,Dt.width,Dt.height,Qt,it,Dt.data):i.texImage2D(3553,ng,rt,Dt.width,Dt.height,0,Qt,it,Dt.data);z.generateMipmaps=!1}else II?(wI&&i.texStorage2D(3553,SA,rt,vA.width,vA.height),i.texSubImage2D(3553,0,0,0,vA.width,vA.height,Qt,it,vA.data)):i.texImage2D(3553,0,rt,vA.width,vA.height,0,Qt,it,vA.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){II&&wI&&i.texStorage3D(35866,SA,rt,vt[0].width,vt[0].height,vA.depth);for(let ng=0,Ug=vt.length;ng<Ug;ng++)Dt=vt[ng],z.format!==zi?Qt!==null?II?i.compressedTexSubImage3D(35866,ng,0,0,0,Dt.width,Dt.height,vA.depth,Qt,Dt.data,0,0):i.compressedTexImage3D(35866,ng,rt,Dt.width,Dt.height,vA.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):II?i.texSubImage3D(35866,ng,0,0,0,Dt.width,Dt.height,vA.depth,Qt,it,Dt.data):i.texImage3D(35866,ng,rt,Dt.width,Dt.height,vA.depth,0,Qt,it,Dt.data)}else{II&&wI&&i.texStorage2D(3553,SA,rt,vt[0].width,vt[0].height);for(let ng=0,Ug=vt.length;ng<Ug;ng++)Dt=vt[ng],z.format!==zi?Qt!==null?II?i.compressedTexSubImage2D(3553,ng,0,0,Dt.width,Dt.height,Qt,Dt.data):i.compressedTexImage2D(3553,ng,rt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):II?i.texSubImage2D(3553,ng,0,0,Dt.width,Dt.height,Qt,it,Dt.data):i.texImage2D(3553,ng,rt,Dt.width,Dt.height,0,Qt,it,Dt.data)}else if(z.isDataArrayTexture)II?(wI&&i.texStorage3D(35866,SA,rt,vA.width,vA.height,vA.depth),i.texSubImage3D(35866,0,0,0,0,vA.width,vA.height,vA.depth,Qt,it,vA.data)):i.texImage3D(35866,0,rt,vA.width,vA.height,vA.depth,0,Qt,it,vA.data);else if(z.isData3DTexture)II?(wI&&i.texStorage3D(32879,SA,rt,vA.width,vA.height,vA.depth),i.texSubImage3D(32879,0,0,0,0,vA.width,vA.height,vA.depth,Qt,it,vA.data)):i.texImage3D(32879,0,rt,vA.width,vA.height,vA.depth,0,Qt,it,vA.data);else if(z.isFramebufferTexture){if(wI)if(II)i.texStorage2D(3553,SA,rt,vA.width,vA.height);else{let ng=vA.width,Ug=vA.height;for(let $g=0;$g<SA;$g++)i.texImage2D(3553,$g,rt,ng,Ug,0,Qt,it,null),ng>>=1,Ug>>=1}}else if(vt.length>0&&Jg){II&&wI&&i.texStorage2D(3553,SA,rt,vt[0].width,vt[0].height);for(let ng=0,Ug=vt.length;ng<Ug;ng++)Dt=vt[ng],II?i.texSubImage2D(3553,ng,0,0,Qt,it,Dt):i.texImage2D(3553,ng,rt,Qt,it,Dt);z.generateMipmaps=!1}else II?(wI&&i.texStorage2D(3553,SA,rt,vA.width,vA.height),i.texSubImage2D(3553,0,0,0,Qt,it,vA)):i.texImage2D(3553,0,rt,Qt,it,vA);MA(z,Jg)&&qA(Eg),yt.__version=Xg.version,z.onUpdate&&z.onUpdate(z)}iA.__version=z.version}function tt(iA,z,jA){if(z.image.length!==6)return;const Eg=gt(iA,z),Rg=z.source;i.bindTexture(34067,iA.__webglTexture,33984+jA);const Xg=Q.get(Rg);if(Rg.version!==Xg.__version||Eg===!0){i.activeTexture(33984+jA),c.pixelStorei(37440,z.flipY),c.pixelStorei(37441,z.premultiplyAlpha),c.pixelStorei(3317,z.unpackAlignment),c.pixelStorei(37443,0);const yt=z.isCompressedTexture||z.image[0].isCompressedTexture,dA=z.image[0]&&z.image[0].isDataTexture,vA=[];for(let ng=0;ng<6;ng++)!yt&&!dA?vA[ng]=nA(z.image[ng],!1,!0,G):vA[ng]=dA?z.image[ng].image:z.image[ng],vA[ng]=$A(z,vA[ng]);const Jg=vA[0],Qt=cA(Jg)||d,it=h.convert(z.format,z.encoding),rt=h.convert(z.type),Dt=P(z.internalFormat,it,rt,z.encoding),vt=d&&z.isVideoTexture!==!0,II=Xg.__version===void 0||Eg===!0;let wI=wA(z,Jg,Qt);LA(34067,z,Qt);let SA;if(yt){vt&&II&&i.texStorage2D(34067,wI,Dt,Jg.width,Jg.height);for(let ng=0;ng<6;ng++){SA=vA[ng].mipmaps;for(let Ug=0;Ug<SA.length;Ug++){const $g=SA[Ug];z.format!==zi?it!==null?vt?i.compressedTexSubImage2D(34069+ng,Ug,0,0,$g.width,$g.height,it,$g.data):i.compressedTexImage2D(34069+ng,Ug,Dt,$g.width,$g.height,0,$g.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?i.texSubImage2D(34069+ng,Ug,0,0,$g.width,$g.height,it,rt,$g.data):i.texImage2D(34069+ng,Ug,Dt,$g.width,$g.height,0,it,rt,$g.data)}}}else{SA=z.mipmaps,vt&&II&&(SA.length>0&&wI++,i.texStorage2D(34067,wI,Dt,vA[0].width,vA[0].height));for(let ng=0;ng<6;ng++)if(dA){vt?i.texSubImage2D(34069+ng,0,0,0,vA[ng].width,vA[ng].height,it,rt,vA[ng].data):i.texImage2D(34069+ng,0,Dt,vA[ng].width,vA[ng].height,0,it,rt,vA[ng].data);for(let Ug=0;Ug<SA.length;Ug++){const lt=SA[Ug].image[ng].image;vt?i.texSubImage2D(34069+ng,Ug+1,0,0,lt.width,lt.height,it,rt,lt.data):i.texImage2D(34069+ng,Ug+1,Dt,lt.width,lt.height,0,it,rt,lt.data)}}else{vt?i.texSubImage2D(34069+ng,0,0,0,it,rt,vA[ng]):i.texImage2D(34069+ng,0,Dt,it,rt,vA[ng]);for(let Ug=0;Ug<SA.length;Ug++){const $g=SA[Ug];vt?i.texSubImage2D(34069+ng,Ug+1,0,0,it,rt,$g.image[ng]):i.texImage2D(34069+ng,Ug+1,Dt,it,rt,$g.image[ng])}}}MA(z,Qt)&&qA(34067),Xg.__version=Rg.version,z.onUpdate&&z.onUpdate(z)}iA.__version=z.version}function Og(iA,z,jA,Eg,Rg){const Xg=h.convert(jA.format,jA.encoding),yt=h.convert(jA.type),dA=P(jA.internalFormat,Xg,yt,jA.encoding);Q.get(z).__hasExternalTextures||(Rg===32879||Rg===35866?i.texImage3D(Rg,0,dA,z.width,z.height,z.depth,0,Xg,yt,null):i.texImage2D(Rg,0,dA,z.width,z.height,0,Xg,yt,null)),i.bindFramebuffer(36160,iA),Bt(z)?L.framebufferTexture2DMultisampleEXT(36160,Eg,Rg,Q.get(jA).__webglTexture,0,ct(z)):(Rg===3553||Rg>=34069&&Rg<=34074)&&c.framebufferTexture2D(36160,Eg,Rg,Q.get(jA).__webglTexture,0),i.bindFramebuffer(36160,null)}function at(iA,z,jA){if(c.bindRenderbuffer(36161,iA),z.depthBuffer&&!z.stencilBuffer){let Eg=33189;if(jA||Bt(z)){const Rg=z.depthTexture;Rg&&Rg.isDepthTexture&&(Rg.type===BQ?Eg=36012:Rg.type===iQ&&(Eg=33190));const Xg=ct(z);Bt(z)?L.renderbufferStorageMultisampleEXT(36161,Xg,Eg,z.width,z.height):c.renderbufferStorageMultisample(36161,Xg,Eg,z.width,z.height)}else c.renderbufferStorage(36161,Eg,z.width,z.height);c.framebufferRenderbuffer(36160,36096,36161,iA)}else if(z.depthBuffer&&z.stencilBuffer){const Eg=ct(z);jA&&Bt(z)===!1?c.renderbufferStorageMultisample(36161,Eg,35056,z.width,z.height):Bt(z)?L.renderbufferStorageMultisampleEXT(36161,Eg,35056,z.width,z.height):c.renderbufferStorage(36161,34041,z.width,z.height),c.framebufferRenderbuffer(36160,33306,36161,iA)}else{const Eg=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let Rg=0;Rg<Eg.length;Rg++){const Xg=Eg[Rg],yt=h.convert(Xg.format,Xg.encoding),dA=h.convert(Xg.type),vA=P(Xg.internalFormat,yt,dA,Xg.encoding),Jg=ct(z);jA&&Bt(z)===!1?c.renderbufferStorageMultisample(36161,Jg,vA,z.width,z.height):Bt(z)?L.renderbufferStorageMultisampleEXT(36161,Jg,vA,z.width,z.height):c.renderbufferStorage(36161,vA,z.width,z.height)}}c.bindRenderbuffer(36161,null)}function Ag(iA,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,iA),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!Q.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),j(z.depthTexture,0);const Eg=Q.get(z.depthTexture).__webglTexture,Rg=ct(z);if(z.depthTexture.format===CQ)Bt(z)?L.framebufferTexture2DMultisampleEXT(36160,36096,3553,Eg,0,Rg):c.framebufferTexture2D(36160,36096,3553,Eg,0);else if(z.depthTexture.format===yE)Bt(z)?L.framebufferTexture2DMultisampleEXT(36160,33306,3553,Eg,0,Rg):c.framebufferTexture2D(36160,33306,3553,Eg,0);else throw new Error("Unknown depthTexture format")}function VA(iA){const z=Q.get(iA),jA=iA.isWebGLCubeRenderTarget===!0;if(iA.depthTexture&&!z.__autoAllocateDepthBuffer){if(jA)throw new Error("target.depthTexture not supported in Cube render targets");Ag(z.__webglFramebuffer,iA)}else if(jA){z.__webglDepthbuffer=[];for(let Eg=0;Eg<6;Eg++)i.bindFramebuffer(36160,z.__webglFramebuffer[Eg]),z.__webglDepthbuffer[Eg]=c.createRenderbuffer(),at(z.__webglDepthbuffer[Eg],iA,!1)}else i.bindFramebuffer(36160,z.__webglFramebuffer),z.__webglDepthbuffer=c.createRenderbuffer(),at(z.__webglDepthbuffer,iA,!1);i.bindFramebuffer(36160,null)}function wg(iA,z,jA){const Eg=Q.get(iA);z!==void 0&&Og(Eg.__webglFramebuffer,iA,iA.texture,36064,3553),jA!==void 0&&VA(iA)}function et(iA){const z=iA.texture,jA=Q.get(iA),Eg=Q.get(z);iA.addEventListener("dispose",bg),iA.isWebGLMultipleRenderTargets!==!0&&(Eg.__webglTexture===void 0&&(Eg.__webglTexture=c.createTexture()),Eg.__version=z.version,w.memory.textures++);const Rg=iA.isWebGLCubeRenderTarget===!0,Xg=iA.isWebGLMultipleRenderTargets===!0,yt=cA(iA)||d;if(Rg){jA.__webglFramebuffer=[];for(let dA=0;dA<6;dA++)jA.__webglFramebuffer[dA]=c.createFramebuffer()}else{if(jA.__webglFramebuffer=c.createFramebuffer(),Xg)if(o.drawBuffers){const dA=iA.texture;for(let vA=0,Jg=dA.length;vA<Jg;vA++){const Qt=Q.get(dA[vA]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=c.createTexture(),w.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&iA.samples>0&&Bt(iA)===!1){const dA=Xg?z:[z];jA.__webglMultisampledFramebuffer=c.createFramebuffer(),jA.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,jA.__webglMultisampledFramebuffer);for(let vA=0;vA<dA.length;vA++){const Jg=dA[vA];jA.__webglColorRenderbuffer[vA]=c.createRenderbuffer(),c.bindRenderbuffer(36161,jA.__webglColorRenderbuffer[vA]);const Qt=h.convert(Jg.format,Jg.encoding),it=h.convert(Jg.type),rt=P(Jg.internalFormat,Qt,it,Jg.encoding,iA.isXRRenderTarget===!0),Dt=ct(iA);c.renderbufferStorageMultisample(36161,Dt,rt,iA.width,iA.height),c.framebufferRenderbuffer(36160,36064+vA,36161,jA.__webglColorRenderbuffer[vA])}c.bindRenderbuffer(36161,null),iA.depthBuffer&&(jA.__webglDepthRenderbuffer=c.createRenderbuffer(),at(jA.__webglDepthRenderbuffer,iA,!0)),i.bindFramebuffer(36160,null)}}if(Rg){i.bindTexture(34067,Eg.__webglTexture),LA(34067,z,yt);for(let dA=0;dA<6;dA++)Og(jA.__webglFramebuffer[dA],iA,z,36064,34069+dA);MA(z,yt)&&qA(34067),i.unbindTexture()}else if(Xg){const dA=iA.texture;for(let vA=0,Jg=dA.length;vA<Jg;vA++){const Qt=dA[vA],it=Q.get(Qt);i.bindTexture(3553,it.__webglTexture),LA(3553,Qt,yt),Og(jA.__webglFramebuffer,iA,Qt,36064+vA,3553),MA(Qt,yt)&&qA(3553)}i.unbindTexture()}else{let dA=3553;(iA.isWebGL3DRenderTarget||iA.isWebGLArrayRenderTarget)&&(d?dA=iA.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(dA,Eg.__webglTexture),LA(dA,z,yt),Og(jA.__webglFramebuffer,iA,z,36064,dA),MA(z,yt)&&qA(dA),i.unbindTexture()}iA.depthBuffer&&VA(iA)}function Wg(iA){const z=cA(iA)||d,jA=iA.isWebGLMultipleRenderTargets===!0?iA.texture:[iA.texture];for(let Eg=0,Rg=jA.length;Eg<Rg;Eg++){const Xg=jA[Eg];if(MA(Xg,z)){const yt=iA.isWebGLCubeRenderTarget?34067:3553,dA=Q.get(Xg).__webglTexture;i.bindTexture(yt,dA),qA(yt),i.unbindTexture()}}}function Gt(iA){if(d&&iA.samples>0&&Bt(iA)===!1){const z=iA.isWebGLMultipleRenderTargets?iA.texture:[iA.texture],jA=iA.width,Eg=iA.height;let Rg=16384;const Xg=[],yt=iA.stencilBuffer?33306:36096,dA=Q.get(iA),vA=iA.isWebGLMultipleRenderTargets===!0;if(vA)for(let Jg=0;Jg<z.length;Jg++)i.bindFramebuffer(36160,dA.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+Jg,36161,null),i.bindFramebuffer(36160,dA.__webglFramebuffer),c.framebufferTexture2D(36009,36064+Jg,3553,null,0);i.bindFramebuffer(36008,dA.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,dA.__webglFramebuffer);for(let Jg=0;Jg<z.length;Jg++){Xg.push(36064+Jg),iA.depthBuffer&&Xg.push(yt);const Qt=dA.__ignoreDepthValues!==void 0?dA.__ignoreDepthValues:!1;if(Qt===!1&&(iA.depthBuffer&&(Rg|=256),iA.stencilBuffer&&(Rg|=1024)),vA&&c.framebufferRenderbuffer(36008,36064,36161,dA.__webglColorRenderbuffer[Jg]),Qt===!0&&(c.invalidateFramebuffer(36008,[yt]),c.invalidateFramebuffer(36009,[yt])),vA){const it=Q.get(z[Jg]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,it,0)}c.blitFramebuffer(0,0,jA,Eg,0,0,jA,Eg,Rg,9728),H&&c.invalidateFramebuffer(36008,Xg)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),vA)for(let Jg=0;Jg<z.length;Jg++){i.bindFramebuffer(36160,dA.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+Jg,36161,dA.__webglColorRenderbuffer[Jg]);const Qt=Q.get(z[Jg]).__webglTexture;i.bindFramebuffer(36160,dA.__webglFramebuffer),c.framebufferTexture2D(36009,36064+Jg,3553,Qt,0)}i.bindFramebuffer(36009,dA.__webglMultisampledFramebuffer)}}function ct(iA){return Math.min(x,iA.samples)}function Bt(iA){const z=Q.get(iA);return d&&iA.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function jt(iA){const z=w.render.frame;AA.get(iA)!==z&&(AA.set(iA,z),iA.update())}function $A(iA,z){const jA=iA.encoding,Eg=iA.format,Rg=iA.type;return iA.isCompressedTexture===!0||iA.isVideoTexture===!0||iA.format===sr||jA!==oQ&&(jA===WI?d===!1?t.has("EXT_sRGB")===!0&&Eg===zi?(iA.format=sr,iA.minFilter=Li,iA.generateMipmaps=!1):z=od.sRGBToLinear(z):(Eg!==zi||Rg!==nQ)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",jA)),z}this.allocateTextureUnit=Bg,this.resetTextureUnits=mg,this.setTexture2D=j,this.setTexture2DArray=gA,this.setTexture3D=QA,this.setTextureCube=yA,this.rebindTextures=wg,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Wg,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=VA,this.setupFrameBufferTexture=Og,this.useMultisampledRTT=Bt}function gF(c,t,i){const Q=i.isWebGL2;function o(h,w=null){let d;if(h===nQ)return 5121;if(h===ky)return 32819;if(h===Ly)return 32820;if(h===Fy)return 5120;if(h===Ny)return 5122;if(h===Qd)return 5123;if(h===Uy)return 5124;if(h===iQ)return 5125;if(h===BQ)return 5126;if(h===Nn)return Q?5131:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(h===xy)return 6406;if(h===zi)return 6408;if(h===by)return 6409;if(h===Ky)return 6410;if(h===CQ)return 6402;if(h===yE)return 34041;if(h===Jy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(h===sr)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(h===Yy)return 6403;if(h===vy)return 36244;if(h===Hy)return 33319;if(h===qy)return 33320;if(h===Ty)return 36249;if(h===Fa||h===Na||h===Ua||h===ka)if(w===WI)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(h===Fa)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(h===Na)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(h===Ua)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(h===ka)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(h===Fa)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(h===Na)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(h===Ua)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(h===ka)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(h===Pc||h===Oc||h===Vc||h===Zc)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(h===Pc)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(h===Oc)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(h===Vc)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(h===Zc)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(h===_y)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(h===Xc||h===zc)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(h===Xc)return w===WI?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(h===zc)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(h===jc||h===$c||h===Al||h===gl||h===tl||h===Il||h===el||h===il||h===Bl||h===Cl||h===Ql||h===El||h===nl||h===ol)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(h===jc)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(h===$c)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(h===Al)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(h===gl)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(h===tl)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(h===Il)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(h===el)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(h===il)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(h===Bl)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(h===Cl)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(h===Ql)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(h===El)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(h===nl)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(h===ol)return w===WI?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(h===sl)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(h===sl)return w===WI?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return h===fE?Q?34042:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):c[h]!==void 0?c[h]:null}return{convert:o}}class tF extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class uE extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IF={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uE,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uE,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new OA,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new OA),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uE,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new OA,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new OA),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const Q of t.hand.values())this._getHandJoint(i,Q)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,Q){let o=null,h=null,w=null;const d=this._targetRay,F=this._grip,G=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(G&&t.hand){w=!0;for(const J of t.hand.values()){const U=i.getJointPose(J,Q),X=this._getHandJoint(G,J);U!==null&&(X.matrix.fromArray(U.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.jointRadius=U.radius),X.visible=U!==null}const N=G.joints["index-finger-tip"],x=G.joints["thumb-tip"],L=N.position.distanceTo(x.position),H=.02,AA=.005;G.inputState.pinching&&L>H+AA?(G.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!G.inputState.pinching&&L<=H-AA&&(G.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else F!==null&&t.gripSpace&&(h=i.getPose(t.gripSpace,Q),h!==null&&(F.matrix.fromArray(h.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),h.linearVelocity?(F.hasLinearVelocity=!0,F.linearVelocity.copy(h.linearVelocity)):F.hasLinearVelocity=!1,h.angularVelocity?(F.hasAngularVelocity=!0,F.angularVelocity.copy(h.angularVelocity)):F.hasAngularVelocity=!1));d!==null&&(o=i.getPose(t.targetRaySpace,Q),o===null&&h!==null&&(o=h),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IF)))}return d!==null&&(d.visible=o!==null),F!==null&&(F.visible=h!==null),G!==null&&(G.visible=w!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const Q=new uE;Q.matrixAutoUpdate=!1,Q.visible=!1,t.joints[i.jointName]=Q,t.add(Q)}return t.joints[i.jointName]}}class eF extends Ci{constructor(t,i,Q,o,h,w,d,F,G,N){if(N=N!==void 0?N:CQ,N!==CQ&&N!==yE)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");Q===void 0&&N===CQ&&(Q=iQ),Q===void 0&&N===yE&&(Q=fE),super(null,o,h,w,d,F,N,Q,G),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:$e,this.minFilter=F!==void 0?F:$e,this.flipY=!1,this.generateMipmaps=!1}}class iF extends hQ{constructor(t,i){super();const Q=this;let o=null,h=1,w=null,d="local-floor",F=null,G=null,N=null,x=null,L=null,H=null;const AA=i.getContextAttributes();let J=null,U=null;const X=[],oA=[],nA=new Set,cA=new Map,eA=new xi;eA.layers.enable(1),eA.viewport=new Ue;const MA=new xi;MA.layers.enable(2),MA.viewport=new Ue;const qA=[eA,MA],P=new tF;P.layers.enable(1),P.layers.enable(2);let wA=null,WA=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gA){let QA=X[gA];return QA===void 0&&(QA=new er,X[gA]=QA),QA.getTargetRaySpace()},this.getControllerGrip=function(gA){let QA=X[gA];return QA===void 0&&(QA=new er,X[gA]=QA),QA.getGripSpace()},this.getHand=function(gA){let QA=X[gA];return QA===void 0&&(QA=new er,X[gA]=QA),QA.getHandSpace()};function eg(gA){const QA=oA.indexOf(gA.inputSource);if(QA===-1)return;const yA=X[QA];yA!==void 0&&yA.dispatchEvent({type:gA.type,data:gA.inputSource})}function bg(){o.removeEventListener("select",eg),o.removeEventListener("selectstart",eg),o.removeEventListener("selectend",eg),o.removeEventListener("squeeze",eg),o.removeEventListener("squeezestart",eg),o.removeEventListener("squeezeend",eg),o.removeEventListener("end",bg),o.removeEventListener("inputsourceschange",kA);for(let gA=0;gA<X.length;gA++){const QA=oA[gA];QA!==null&&(oA[gA]=null,X[gA].disconnect(QA))}wA=null,WA=null,t.setRenderTarget(J),L=null,x=null,N=null,o=null,U=null,j.stop(),Q.isPresenting=!1,Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gA){h=gA,Q.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gA){d=gA,Q.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return F||w},this.setReferenceSpace=function(gA){F=gA},this.getBaseLayer=function(){return x!==null?x:L},this.getBinding=function(){return N},this.getFrame=function(){return H},this.getSession=function(){return o},this.setSession=async function(gA){if(o=gA,o!==null){if(J=t.getRenderTarget(),o.addEventListener("select",eg),o.addEventListener("selectstart",eg),o.addEventListener("selectend",eg),o.addEventListener("squeeze",eg),o.addEventListener("squeezestart",eg),o.addEventListener("squeezeend",eg),o.addEventListener("end",bg),o.addEventListener("inputsourceschange",kA),AA.xrCompatible!==!0&&await i.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const QA={antialias:o.renderState.layers===void 0?AA.antialias:!0,alpha:AA.alpha,depth:AA.depth,stencil:AA.stencil,framebufferScaleFactor:h};L=new XRWebGLLayer(o,i,QA),o.updateRenderState({baseLayer:L}),U=new sQ(L.framebufferWidth,L.framebufferHeight,{format:zi,type:nQ,encoding:t.outputEncoding,stencilBuffer:AA.stencil})}else{let QA=null,yA=null,YA=null;AA.depth&&(YA=AA.stencil?35056:33190,QA=AA.stencil?yE:CQ,yA=AA.stencil?fE:iQ);const tg={colorFormat:32856,depthFormat:YA,scaleFactor:h};N=new XRWebGLBinding(o,i),x=N.createProjectionLayer(tg),o.updateRenderState({layers:[x]}),U=new sQ(x.textureWidth,x.textureHeight,{format:zi,type:nQ,depthTexture:new eF(x.textureWidth,x.textureHeight,yA,void 0,void 0,void 0,void 0,void 0,void 0,QA),stencilBuffer:AA.stencil,encoding:t.outputEncoding,samples:AA.antialias?4:0});const LA=t.properties.get(U);LA.__ignoreDepthValues=x.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(1),F=null,w=await o.requestReferenceSpace(d),j.setContext(o),j.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}};function kA(gA){for(let QA=0;QA<gA.removed.length;QA++){const yA=gA.removed[QA],YA=oA.indexOf(yA);YA>=0&&(oA[YA]=null,X[YA].disconnect(yA))}for(let QA=0;QA<gA.added.length;QA++){const yA=gA.added[QA];let YA=oA.indexOf(yA);if(YA===-1){for(let LA=0;LA<X.length;LA++)if(LA>=oA.length){oA.push(yA),YA=LA;break}else if(oA[LA]===null){oA[LA]=yA,YA=LA;break}if(YA===-1)break}const tg=X[YA];tg&&tg.connect(yA)}}const JA=new OA,gg=new OA;function yg(gA,QA,yA){JA.setFromMatrixPosition(QA.matrixWorld),gg.setFromMatrixPosition(yA.matrixWorld);const YA=JA.distanceTo(gg),tg=QA.projectionMatrix.elements,LA=yA.projectionMatrix.elements,gt=tg[14]/(tg[10]-1),kg=tg[14]/(tg[10]+1),tt=(tg[9]+1)/tg[5],Og=(tg[9]-1)/tg[5],at=(tg[8]-1)/tg[0],Ag=(LA[8]+1)/LA[0],VA=gt*at,wg=gt*Ag,et=YA/(-at+Ag),Wg=et*-at;QA.matrixWorld.decompose(gA.position,gA.quaternion,gA.scale),gA.translateX(Wg),gA.translateZ(et),gA.matrixWorld.compose(gA.position,gA.quaternion,gA.scale),gA.matrixWorldInverse.copy(gA.matrixWorld).invert();const Gt=gt+et,ct=kg+et,Bt=VA-Wg,jt=wg+(YA-Wg),$A=tt*kg/ct*Gt,iA=Og*kg/ct*Gt;gA.projectionMatrix.makePerspective(Bt,jt,$A,iA,Gt,ct)}function mg(gA,QA){QA===null?gA.matrixWorld.copy(gA.matrix):gA.matrixWorld.multiplyMatrices(QA.matrixWorld,gA.matrix),gA.matrixWorldInverse.copy(gA.matrixWorld).invert()}this.updateCamera=function(gA){if(o===null)return;P.near=MA.near=eA.near=gA.near,P.far=MA.far=eA.far=gA.far,(wA!==P.near||WA!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),wA=P.near,WA=P.far);const QA=gA.parent,yA=P.cameras;mg(P,QA);for(let tg=0;tg<yA.length;tg++)mg(yA[tg],QA);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),gA.matrix.copy(P.matrix),gA.matrix.decompose(gA.position,gA.quaternion,gA.scale);const YA=gA.children;for(let tg=0,LA=YA.length;tg<LA;tg++)YA[tg].updateMatrixWorld(!0);yA.length===2?yg(P,eA,MA):P.projectionMatrix.copy(eA.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(x!==null)return x.fixedFoveation;if(L!==null)return L.fixedFoveation},this.setFoveation=function(gA){x!==null&&(x.fixedFoveation=gA),L!==null&&L.fixedFoveation!==void 0&&(L.fixedFoveation=gA)},this.getPlanes=function(){return nA};let Bg=null;function O(gA,QA){if(G=QA.getViewerPose(F||w),H=QA,G!==null){const yA=G.views;L!==null&&(t.setRenderTargetFramebuffer(U,L.framebuffer),t.setRenderTarget(U));let YA=!1;yA.length!==P.cameras.length&&(P.cameras.length=0,YA=!0);for(let tg=0;tg<yA.length;tg++){const LA=yA[tg];let gt=null;if(L!==null)gt=L.getViewport(LA);else{const tt=N.getViewSubImage(x,LA);gt=tt.viewport,tg===0&&(t.setRenderTargetTextures(U,tt.colorTexture,x.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(U))}let kg=qA[tg];kg===void 0&&(kg=new xi,kg.layers.enable(tg),kg.viewport=new Ue,qA[tg]=kg),kg.matrix.fromArray(LA.transform.matrix),kg.projectionMatrix.fromArray(LA.projectionMatrix),kg.viewport.set(gt.x,gt.y,gt.width,gt.height),tg===0&&P.matrix.copy(kg.matrix),YA===!0&&P.cameras.push(kg)}}for(let yA=0;yA<X.length;yA++){const YA=oA[yA],tg=X[yA];YA!==null&&tg!==void 0&&tg.update(YA,QA,F||w)}if(Bg&&Bg(gA,QA),QA.detectedPlanes){Q.dispatchEvent({type:"planesdetected",data:QA.detectedPlanes});let yA=null;for(const YA of nA)QA.detectedPlanes.has(YA)||(yA===null&&(yA=[]),yA.push(YA));if(yA!==null)for(const YA of yA)nA.delete(YA),cA.delete(YA),Q.dispatchEvent({type:"planeremoved",data:YA});for(const YA of QA.detectedPlanes)if(!nA.has(YA))nA.add(YA),cA.set(YA,QA.lastChangedTime),Q.dispatchEvent({type:"planeadded",data:YA});else{const tg=cA.get(YA);YA.lastChangedTime>tg&&(cA.set(YA,YA.lastChangedTime),Q.dispatchEvent({type:"planechanged",data:YA}))}}H=null}const j=new Dd;j.setAnimationLoop(O),this.setAnimationLoop=function(gA){Bg=gA},this.dispose=function(){}}}function BF(c,t){function i(J,U){U.color.getRGB(J.fogColor.value,ld(c)),U.isFog?(J.fogNear.value=U.near,J.fogFar.value=U.far):U.isFogExp2&&(J.fogDensity.value=U.density)}function Q(J,U,X,oA,nA){U.isMeshBasicMaterial||U.isMeshLambertMaterial?o(J,U):U.isMeshToonMaterial?(o(J,U),N(J,U)):U.isMeshPhongMaterial?(o(J,U),G(J,U)):U.isMeshStandardMaterial?(o(J,U),x(J,U),U.isMeshPhysicalMaterial&&L(J,U,nA)):U.isMeshMatcapMaterial?(o(J,U),H(J,U)):U.isMeshDepthMaterial?o(J,U):U.isMeshDistanceMaterial?(o(J,U),AA(J,U)):U.isMeshNormalMaterial?o(J,U):U.isLineBasicMaterial?(h(J,U),U.isLineDashedMaterial&&w(J,U)):U.isPointsMaterial?d(J,U,X,oA):U.isSpriteMaterial?F(J,U):U.isShadowMaterial?(J.color.value.copy(U.color),J.opacity.value=U.opacity):U.isShaderMaterial&&(U.uniformsNeedUpdate=!1)}function o(J,U){J.opacity.value=U.opacity,U.color&&J.diffuse.value.copy(U.color),U.emissive&&J.emissive.value.copy(U.emissive).multiplyScalar(U.emissiveIntensity),U.map&&(J.map.value=U.map),U.alphaMap&&(J.alphaMap.value=U.alphaMap),U.bumpMap&&(J.bumpMap.value=U.bumpMap,J.bumpScale.value=U.bumpScale,U.side===Ji&&(J.bumpScale.value*=-1)),U.displacementMap&&(J.displacementMap.value=U.displacementMap,J.displacementScale.value=U.displacementScale,J.displacementBias.value=U.displacementBias),U.emissiveMap&&(J.emissiveMap.value=U.emissiveMap),U.normalMap&&(J.normalMap.value=U.normalMap,J.normalScale.value.copy(U.normalScale),U.side===Ji&&J.normalScale.value.negate()),U.specularMap&&(J.specularMap.value=U.specularMap),U.alphaTest>0&&(J.alphaTest.value=U.alphaTest);const X=t.get(U).envMap;if(X&&(J.envMap.value=X,J.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,J.reflectivity.value=U.reflectivity,J.ior.value=U.ior,J.refractionRatio.value=U.refractionRatio),U.lightMap){J.lightMap.value=U.lightMap;const cA=c.physicallyCorrectLights!==!0?Math.PI:1;J.lightMapIntensity.value=U.lightMapIntensity*cA}U.aoMap&&(J.aoMap.value=U.aoMap,J.aoMapIntensity.value=U.aoMapIntensity);let oA;U.map?oA=U.map:U.specularMap?oA=U.specularMap:U.displacementMap?oA=U.displacementMap:U.normalMap?oA=U.normalMap:U.bumpMap?oA=U.bumpMap:U.roughnessMap?oA=U.roughnessMap:U.metalnessMap?oA=U.metalnessMap:U.alphaMap?oA=U.alphaMap:U.emissiveMap?oA=U.emissiveMap:U.clearcoatMap?oA=U.clearcoatMap:U.clearcoatNormalMap?oA=U.clearcoatNormalMap:U.clearcoatRoughnessMap?oA=U.clearcoatRoughnessMap:U.iridescenceMap?oA=U.iridescenceMap:U.iridescenceThicknessMap?oA=U.iridescenceThicknessMap:U.specularIntensityMap?oA=U.specularIntensityMap:U.specularColorMap?oA=U.specularColorMap:U.transmissionMap?oA=U.transmissionMap:U.thicknessMap?oA=U.thicknessMap:U.sheenColorMap?oA=U.sheenColorMap:U.sheenRoughnessMap&&(oA=U.sheenRoughnessMap),oA!==void 0&&(oA.isWebGLRenderTarget&&(oA=oA.texture),oA.matrixAutoUpdate===!0&&oA.updateMatrix(),J.uvTransform.value.copy(oA.matrix));let nA;U.aoMap?nA=U.aoMap:U.lightMap&&(nA=U.lightMap),nA!==void 0&&(nA.isWebGLRenderTarget&&(nA=nA.texture),nA.matrixAutoUpdate===!0&&nA.updateMatrix(),J.uv2Transform.value.copy(nA.matrix))}function h(J,U){J.diffuse.value.copy(U.color),J.opacity.value=U.opacity}function w(J,U){J.dashSize.value=U.dashSize,J.totalSize.value=U.dashSize+U.gapSize,J.scale.value=U.scale}function d(J,U,X,oA){J.diffuse.value.copy(U.color),J.opacity.value=U.opacity,J.size.value=U.size*X,J.scale.value=oA*.5,U.map&&(J.map.value=U.map),U.alphaMap&&(J.alphaMap.value=U.alphaMap),U.alphaTest>0&&(J.alphaTest.value=U.alphaTest);let nA;U.map?nA=U.map:U.alphaMap&&(nA=U.alphaMap),nA!==void 0&&(nA.matrixAutoUpdate===!0&&nA.updateMatrix(),J.uvTransform.value.copy(nA.matrix))}function F(J,U){J.diffuse.value.copy(U.color),J.opacity.value=U.opacity,J.rotation.value=U.rotation,U.map&&(J.map.value=U.map),U.alphaMap&&(J.alphaMap.value=U.alphaMap),U.alphaTest>0&&(J.alphaTest.value=U.alphaTest);let X;U.map?X=U.map:U.alphaMap&&(X=U.alphaMap),X!==void 0&&(X.matrixAutoUpdate===!0&&X.updateMatrix(),J.uvTransform.value.copy(X.matrix))}function G(J,U){J.specular.value.copy(U.specular),J.shininess.value=Math.max(U.shininess,1e-4)}function N(J,U){U.gradientMap&&(J.gradientMap.value=U.gradientMap)}function x(J,U){J.roughness.value=U.roughness,J.metalness.value=U.metalness,U.roughnessMap&&(J.roughnessMap.value=U.roughnessMap),U.metalnessMap&&(J.metalnessMap.value=U.metalnessMap),t.get(U).envMap&&(J.envMapIntensity.value=U.envMapIntensity)}function L(J,U,X){J.ior.value=U.ior,U.sheen>0&&(J.sheenColor.value.copy(U.sheenColor).multiplyScalar(U.sheen),J.sheenRoughness.value=U.sheenRoughness,U.sheenColorMap&&(J.sheenColorMap.value=U.sheenColorMap),U.sheenRoughnessMap&&(J.sheenRoughnessMap.value=U.sheenRoughnessMap)),U.clearcoat>0&&(J.clearcoat.value=U.clearcoat,J.clearcoatRoughness.value=U.clearcoatRoughness,U.clearcoatMap&&(J.clearcoatMap.value=U.clearcoatMap),U.clearcoatRoughnessMap&&(J.clearcoatRoughnessMap.value=U.clearcoatRoughnessMap),U.clearcoatNormalMap&&(J.clearcoatNormalScale.value.copy(U.clearcoatNormalScale),J.clearcoatNormalMap.value=U.clearcoatNormalMap,U.side===Ji&&J.clearcoatNormalScale.value.negate())),U.iridescence>0&&(J.iridescence.value=U.iridescence,J.iridescenceIOR.value=U.iridescenceIOR,J.iridescenceThicknessMinimum.value=U.iridescenceThicknessRange[0],J.iridescenceThicknessMaximum.value=U.iridescenceThicknessRange[1],U.iridescenceMap&&(J.iridescenceMap.value=U.iridescenceMap),U.iridescenceThicknessMap&&(J.iridescenceThicknessMap.value=U.iridescenceThicknessMap)),U.transmission>0&&(J.transmission.value=U.transmission,J.transmissionSamplerMap.value=X.texture,J.transmissionSamplerSize.value.set(X.width,X.height),U.transmissionMap&&(J.transmissionMap.value=U.transmissionMap),J.thickness.value=U.thickness,U.thicknessMap&&(J.thicknessMap.value=U.thicknessMap),J.attenuationDistance.value=U.attenuationDistance,J.attenuationColor.value.copy(U.attenuationColor)),J.specularIntensity.value=U.specularIntensity,J.specularColor.value.copy(U.specularColor),U.specularIntensityMap&&(J.specularIntensityMap.value=U.specularIntensityMap),U.specularColorMap&&(J.specularColorMap.value=U.specularColorMap)}function H(J,U){U.matcap&&(J.matcap.value=U.matcap)}function AA(J,U){J.referencePosition.value.copy(U.referencePosition),J.nearDistance.value=U.nearDistance,J.farDistance.value=U.farDistance}return{refreshFogUniforms:i,refreshMaterialUniforms:Q}}function CF(c,t,i,Q){let o={},h={},w=[];const d=i.isWebGL2?c.getParameter(35375):0;function F(oA,nA){const cA=nA.program;Q.uniformBlockBinding(oA,cA)}function G(oA,nA){let cA=o[oA.id];cA===void 0&&(AA(oA),cA=N(oA),o[oA.id]=cA,oA.addEventListener("dispose",U));const eA=nA.program;Q.updateUBOMapping(oA,eA);const MA=t.render.frame;h[oA.id]!==MA&&(L(oA),h[oA.id]=MA)}function N(oA){const nA=x();oA.__bindingPointIndex=nA;const cA=c.createBuffer(),eA=oA.__size,MA=oA.usage;return c.bindBuffer(35345,cA),c.bufferData(35345,eA,MA),c.bindBuffer(35345,null),c.bindBufferBase(35345,nA,cA),cA}function x(){for(let oA=0;oA<d;oA++)if(w.indexOf(oA)===-1)return w.push(oA),oA;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function L(oA){const nA=o[oA.id],cA=oA.uniforms,eA=oA.__cache;c.bindBuffer(35345,nA);for(let MA=0,qA=cA.length;MA<qA;MA++){const P=cA[MA];if(H(P,MA,eA)===!0){const wA=P.__offset,WA=Array.isArray(P.value)?P.value:[P.value];let eg=0;for(let bg=0;bg<WA.length;bg++){const kA=WA[bg],JA=J(kA);typeof kA=="number"?(P.__data[0]=kA,c.bufferSubData(35345,wA+eg,P.__data)):kA.isMatrix3?(P.__data[0]=kA.elements[0],P.__data[1]=kA.elements[1],P.__data[2]=kA.elements[2],P.__data[3]=kA.elements[0],P.__data[4]=kA.elements[3],P.__data[5]=kA.elements[4],P.__data[6]=kA.elements[5],P.__data[7]=kA.elements[0],P.__data[8]=kA.elements[6],P.__data[9]=kA.elements[7],P.__data[10]=kA.elements[8],P.__data[11]=kA.elements[0]):(kA.toArray(P.__data,eg),eg+=JA.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,wA,P.__data)}}c.bindBuffer(35345,null)}function H(oA,nA,cA){const eA=oA.value;if(cA[nA]===void 0){if(typeof eA=="number")cA[nA]=eA;else{const MA=Array.isArray(eA)?eA:[eA],qA=[];for(let P=0;P<MA.length;P++)qA.push(MA[P].clone());cA[nA]=qA}return!0}else if(typeof eA=="number"){if(cA[nA]!==eA)return cA[nA]=eA,!0}else{const MA=Array.isArray(cA[nA])?cA[nA]:[cA[nA]],qA=Array.isArray(eA)?eA:[eA];for(let P=0;P<MA.length;P++){const wA=MA[P];if(wA.equals(qA[P])===!1)return wA.copy(qA[P]),!0}}return!1}function AA(oA){const nA=oA.uniforms;let cA=0;const eA=16;let MA=0;for(let qA=0,P=nA.length;qA<P;qA++){const wA=nA[qA],WA={boundary:0,storage:0},eg=Array.isArray(wA.value)?wA.value:[wA.value];for(let bg=0,kA=eg.length;bg<kA;bg++){const JA=eg[bg],gg=J(JA);WA.boundary+=gg.boundary,WA.storage+=gg.storage}if(wA.__data=new Float32Array(WA.storage/Float32Array.BYTES_PER_ELEMENT),wA.__offset=cA,qA>0){MA=cA%eA;const bg=eA-MA;MA!==0&&bg-WA.boundary<0&&(cA+=eA-MA,wA.__offset=cA)}cA+=WA.storage}return MA=cA%eA,MA>0&&(cA+=eA-MA),oA.__size=cA,oA.__cache={},this}function J(oA){const nA={boundary:0,storage:0};return typeof oA=="number"?(nA.boundary=4,nA.storage=4):oA.isVector2?(nA.boundary=8,nA.storage=8):oA.isVector3||oA.isColor?(nA.boundary=16,nA.storage=12):oA.isVector4?(nA.boundary=16,nA.storage=16):oA.isMatrix3?(nA.boundary=48,nA.storage=48):oA.isMatrix4?(nA.boundary=64,nA.storage=64):oA.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",oA),nA}function U(oA){const nA=oA.target;nA.removeEventListener("dispose",U);const cA=w.indexOf(nA.__bindingPointIndex);w.splice(cA,1),c.deleteBuffer(o[nA.id]),delete o[nA.id],delete h[nA.id]}function X(){for(const oA in o)c.deleteBuffer(o[oA]);w=[],o={},h={}}return{bind:F,update:G,dispose:X}}function QF(){const c=kn("canvas");return c.style.display="block",c}function md(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:QF(),i=c.context!==void 0?c.context:null,Q=c.depth!==void 0?c.depth:!0,o=c.stencil!==void 0?c.stencil:!0,h=c.antialias!==void 0?c.antialias:!1,w=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,d=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,F=c.powerPreference!==void 0?c.powerPreference:"default",G=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let N;i!==null?N=i.getContextAttributes().alpha:N=c.alpha!==void 0?c.alpha:!1;let x=null,L=null;const H=[],AA=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oQ,this.physicallyCorrectLights=!1,this.toneMapping=OB,this.toneMappingExposure=1;const J=this;let U=!1,X=0,oA=0,nA=null,cA=-1,eA=null;const MA=new Ue,qA=new Ue;let P=null,wA=t.width,WA=t.height,eg=1,bg=null,kA=null;const JA=new Ue(0,0,wA,WA),gg=new Ue(0,0,wA,WA);let yg=!1;const mg=new Dr;let Bg=!1,O=!1,j=null;const gA=new ye,QA=new tI,yA=new OA,YA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tg(){return nA===null?eg:1}let LA=i;function gt(IA,ZA){for(let og=0;og<IA.length;og++){const TA=IA[og],ag=t.getContext(TA,ZA);if(ag!==null)return ag}return null}try{const IA={alpha:!0,depth:Q,stencil:o,antialias:h,premultipliedAlpha:w,preserveDrawingBuffer:d,powerPreference:F,failIfMajorPerformanceCaveat:G};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",vt,!1),LA===null){const ZA=["webgl2","webgl","experimental-webgl"];if(J.isWebGL1Renderer===!0&&ZA.shift(),LA=gt(ZA,IA),LA===null)throw gt(ZA)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}LA.getShaderPrecisionFormat===void 0&&(LA.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(IA){throw console.error("THREE.WebGLRenderer: "+IA.message),IA}let kg,tt,Og,at,Ag,VA,wg,et,Wg,Gt,ct,Bt,jt,$A,iA,z,jA,Eg,Rg,Xg,yt,dA,vA,Jg;function Qt(){kg=new uG(LA),tt=new aG(LA,kg,c),kg.init(tt),dA=new gF(LA,kg,tt),Og=new $S(LA,kg,tt),at=new wG,Ag=new YS,VA=new AF(LA,kg,Og,Ag,tt,dA,at),wg=new hG(J),et=new dG(J),Wg=new NM(LA,tt),vA=new oG(LA,kg,Wg,tt),Gt=new DG(LA,Wg,at,vA),ct=new mG(LA,Gt,Wg,at),Rg=new MG(LA,tt,VA),z=new rG(Ag),Bt=new KS(J,wg,et,kg,tt,vA,z),jt=new BF(J,Ag),$A=new HS,iA=new OS(kg,tt),Eg=new nG(J,wg,et,Og,ct,N,w),jA=new jS(J,ct,tt),Jg=new CF(LA,at,tt,Og),Xg=new sG(LA,kg,at,tt),yt=new fG(LA,kg,at,tt),at.programs=Bt.programs,J.capabilities=tt,J.extensions=kg,J.properties=Ag,J.renderLists=$A,J.shadowMap=jA,J.state=Og,J.info=at}Qt();const it=new iF(J,LA);this.xr=it,this.getContext=function(){return LA},this.getContextAttributes=function(){return LA.getContextAttributes()},this.forceContextLoss=function(){const IA=kg.get("WEBGL_lose_context");IA&&IA.loseContext()},this.forceContextRestore=function(){const IA=kg.get("WEBGL_lose_context");IA&&IA.restoreContext()},this.getPixelRatio=function(){return eg},this.setPixelRatio=function(IA){IA!==void 0&&(eg=IA,this.setSize(wA,WA,!1))},this.getSize=function(IA){return IA.set(wA,WA)},this.setSize=function(IA,ZA,og){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}wA=IA,WA=ZA,t.width=Math.floor(IA*eg),t.height=Math.floor(ZA*eg),og!==!1&&(t.style.width=IA+"px",t.style.height=ZA+"px"),this.setViewport(0,0,IA,ZA)},this.getDrawingBufferSize=function(IA){return IA.set(wA*eg,WA*eg).floor()},this.setDrawingBufferSize=function(IA,ZA,og){wA=IA,WA=ZA,eg=og,t.width=Math.floor(IA*og),t.height=Math.floor(ZA*og),this.setViewport(0,0,IA,ZA)},this.getCurrentViewport=function(IA){return IA.copy(MA)},this.getViewport=function(IA){return IA.copy(JA)},this.setViewport=function(IA,ZA,og,TA){IA.isVector4?JA.set(IA.x,IA.y,IA.z,IA.w):JA.set(IA,ZA,og,TA),Og.viewport(MA.copy(JA).multiplyScalar(eg).floor())},this.getScissor=function(IA){return IA.copy(gg)},this.setScissor=function(IA,ZA,og,TA){IA.isVector4?gg.set(IA.x,IA.y,IA.z,IA.w):gg.set(IA,ZA,og,TA),Og.scissor(qA.copy(gg).multiplyScalar(eg).floor())},this.getScissorTest=function(){return yg},this.setScissorTest=function(IA){Og.setScissorTest(yg=IA)},this.setOpaqueSort=function(IA){bg=IA},this.setTransparentSort=function(IA){kA=IA},this.getClearColor=function(IA){return IA.copy(Eg.getClearColor())},this.setClearColor=function(){Eg.setClearColor.apply(Eg,arguments)},this.getClearAlpha=function(){return Eg.getClearAlpha()},this.setClearAlpha=function(){Eg.setClearAlpha.apply(Eg,arguments)},this.clear=function(IA=!0,ZA=!0,og=!0){let TA=0;IA&&(TA|=16384),ZA&&(TA|=256),og&&(TA|=1024),LA.clear(TA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),$A.dispose(),iA.dispose(),Ag.dispose(),wg.dispose(),et.dispose(),ct.dispose(),vA.dispose(),Jg.dispose(),Bt.dispose(),it.dispose(),it.removeEventListener("sessionstart",$g),it.removeEventListener("sessionend",lt),j&&(j.dispose(),j=null),_t.stop()};function rt(IA){IA.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const IA=at.autoReset,ZA=jA.enabled,og=jA.autoUpdate,TA=jA.needsUpdate,ag=jA.type;Qt(),at.autoReset=IA,jA.enabled=ZA,jA.autoUpdate=og,jA.needsUpdate=TA,jA.type=ag}function vt(IA){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",IA.statusMessage)}function II(IA){const ZA=IA.target;ZA.removeEventListener("dispose",II),wI(ZA)}function wI(IA){SA(IA),Ag.remove(IA)}function SA(IA){const ZA=Ag.get(IA).programs;ZA!==void 0&&(ZA.forEach(function(og){Bt.releaseProgram(og)}),IA.isShaderMaterial&&Bt.releaseShaderCache(IA))}this.renderBufferDirect=function(IA,ZA,og,TA,ag,mt){ZA===null&&(ZA=YA);const Ut=ag.isMesh&&ag.matrixWorld.determinant()<0,Ht=Te(IA,ZA,og,TA,ag);Og.setMaterial(TA,Ut);let Wt=og.index,eI=1;TA.wireframe===!0&&(Wt=Gt.getWireframeAttribute(og),eI=2);const Xt=og.drawRange,$t=og.attributes.position;let TI=Xt.start*eI,XI=(Xt.start+Xt.count)*eI;mt!==null&&(TI=Math.max(TI,mt.start*eI),XI=Math.min(XI,(mt.start+mt.count)*eI)),Wt!==null?(TI=Math.max(TI,0),XI=Math.min(XI,Wt.count)):$t!=null&&(TI=Math.max(TI,0),XI=Math.min(XI,$t.count));const ke=XI-TI;if(ke<0||ke===1/0)return;vA.setup(ag,TA,Ht,og,Wt);let gi,bI=Xg;if(Wt!==null&&(gi=Wg.get(Wt),bI=yt,bI.setIndex(gi)),ag.isMesh)TA.wireframe===!0?(Og.setLineWidth(TA.wireframeLinewidth*tg()),bI.setMode(1)):bI.setMode(4);else if(ag.isLine){let bt=TA.linewidth;bt===void 0&&(bt=1),Og.setLineWidth(bt*tg()),ag.isLineSegments?bI.setMode(1):ag.isLineLoop?bI.setMode(2):bI.setMode(3)}else ag.isPoints?bI.setMode(0):ag.isSprite&&bI.setMode(4);if(ag.isInstancedMesh)bI.renderInstances(TI,ke,ag.count);else if(og.isInstancedBufferGeometry){const bt=og._maxInstanceCount!==void 0?og._maxInstanceCount:1/0,pi=Math.min(og.instanceCount,bt);bI.renderInstances(TI,ke,pi)}else bI.render(TI,ke)},this.compile=function(IA,ZA){function og(TA,ag,mt){TA.transparent===!0&&TA.side===Ho?(TA.side=Ji,TA.needsUpdate=!0,Re(TA,ag,mt),TA.side=EQ,TA.needsUpdate=!0,Re(TA,ag,mt),TA.side=Ho):Re(TA,ag,mt)}L=iA.get(IA),L.init(),AA.push(L),IA.traverseVisible(function(TA){TA.isLight&&TA.layers.test(ZA.layers)&&(L.pushLight(TA),TA.castShadow&&L.pushShadow(TA))}),L.setupLights(J.physicallyCorrectLights),IA.traverse(function(TA){const ag=TA.material;if(ag)if(Array.isArray(ag))for(let mt=0;mt<ag.length;mt++){const Ut=ag[mt];og(Ut,IA,TA)}else og(ag,IA,TA)}),AA.pop(),L=null};let ng=null;function Ug(IA){ng&&ng(IA)}function $g(){_t.stop()}function lt(){_t.start()}const _t=new Dd;_t.setAnimationLoop(Ug),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(IA){ng=IA,it.setAnimationLoop(IA),IA===null?_t.stop():_t.start()},it.addEventListener("sessionstart",$g),it.addEventListener("sessionend",lt),this.render=function(IA,ZA){if(ZA!==void 0&&ZA.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;IA.matrixWorldAutoUpdate===!0&&IA.updateMatrixWorld(),ZA.parent===null&&ZA.matrixWorldAutoUpdate===!0&&ZA.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(ZA),ZA=it.getCamera()),IA.isScene===!0&&IA.onBeforeRender(J,IA,ZA,nA),L=iA.get(IA,AA.length),L.init(),AA.push(L),gA.multiplyMatrices(ZA.projectionMatrix,ZA.matrixWorldInverse),mg.setFromProjectionMatrix(gA),O=this.localClippingEnabled,Bg=z.init(this.clippingPlanes,O,ZA),x=$A.get(IA,H.length),x.init(),H.push(x),ZI(IA,ZA,0,J.sortObjects),x.finish(),J.sortObjects===!0&&x.sort(bg,kA),Bg===!0&&z.beginShadows();const og=L.state.shadowsArray;if(jA.render(og,IA,ZA),Bg===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),Eg.render(x,IA),L.setupLights(J.physicallyCorrectLights),ZA.isArrayCamera){const TA=ZA.cameras;for(let ag=0,mt=TA.length;ag<mt;ag++){const Ut=TA[ag];qI(x,IA,Ut,Ut.viewport)}}else qI(x,IA,ZA);nA!==null&&(VA.updateMultisampleRenderTarget(nA),VA.updateRenderTargetMipmap(nA)),IA.isScene===!0&&IA.onAfterRender(J,IA,ZA),vA.resetDefaultState(),cA=-1,eA=null,AA.pop(),AA.length>0?L=AA[AA.length-1]:L=null,H.pop(),H.length>0?x=H[H.length-1]:x=null};function ZI(IA,ZA,og,TA){if(IA.visible===!1)return;if(IA.layers.test(ZA.layers)){if(IA.isGroup)og=IA.renderOrder;else if(IA.isLOD)IA.autoUpdate===!0&&IA.update(ZA);else if(IA.isLight)L.pushLight(IA),IA.castShadow&&L.pushShadow(IA);else if(IA.isSprite){if(!IA.frustumCulled||mg.intersectsSprite(IA)){TA&&yA.setFromMatrixPosition(IA.matrixWorld).applyMatrix4(gA);const Ut=ct.update(IA),Ht=IA.material;Ht.visible&&x.push(IA,Ut,Ht,og,yA.z,null)}}else if((IA.isMesh||IA.isLine||IA.isPoints)&&(IA.isSkinnedMesh&&IA.skeleton.frame!==at.render.frame&&(IA.skeleton.update(),IA.skeleton.frame=at.render.frame),!IA.frustumCulled||mg.intersectsObject(IA))){TA&&yA.setFromMatrixPosition(IA.matrixWorld).applyMatrix4(gA);const Ut=ct.update(IA),Ht=IA.material;if(Array.isArray(Ht)){const Wt=Ut.groups;for(let eI=0,Xt=Wt.length;eI<Xt;eI++){const $t=Wt[eI],TI=Ht[$t.materialIndex];TI&&TI.visible&&x.push(IA,Ut,TI,og,yA.z,$t)}}else Ht.visible&&x.push(IA,Ut,Ht,og,yA.z,null)}}const mt=IA.children;for(let Ut=0,Ht=mt.length;Ut<Ht;Ut++)ZI(mt[Ut],ZA,og,TA)}function qI(IA,ZA,og,TA){const ag=IA.opaque,mt=IA.transmissive,Ut=IA.transparent;L.setupLightsView(og),mt.length>0&&qe(ag,ZA,og),TA&&Og.viewport(MA.copy(TA)),ag.length>0&&FI(ag,ZA,og),mt.length>0&&FI(mt,ZA,og),Ut.length>0&&FI(Ut,ZA,og),Og.buffers.depth.setTest(!0),Og.buffers.depth.setMask(!0),Og.buffers.color.setMask(!0),Og.setPolygonOffset(!1)}function qe(IA,ZA,og){const TA=tt.isWebGL2;j===null&&(j=new sQ(1,1,{generateMipmaps:!0,type:kg.has("EXT_color_buffer_half_float")?Nn:nQ,minFilter:Fn,samples:TA&&h===!0?4:0})),J.getDrawingBufferSize(QA),TA?j.setSize(QA.x,QA.y):j.setSize(as(QA.x),as(QA.y));const ag=J.getRenderTarget();J.setRenderTarget(j),J.clear();const mt=J.toneMapping;J.toneMapping=OB,FI(IA,ZA,og),J.toneMapping=mt,VA.updateMultisampleRenderTarget(j),VA.updateRenderTargetMipmap(j),J.setRenderTarget(ag)}function FI(IA,ZA,og){const TA=ZA.isScene===!0?ZA.overrideMaterial:null;for(let ag=0,mt=IA.length;ag<mt;ag++){const Ut=IA[ag],Ht=Ut.object,Wt=Ut.geometry,eI=TA===null?Ut.material:TA,Xt=Ut.group;Ht.layers.test(og.layers)&&PI(Ht,ZA,og,Wt,eI,Xt)}}function PI(IA,ZA,og,TA,ag,mt){IA.onBeforeRender(J,ZA,og,TA,ag,mt),IA.modelViewMatrix.multiplyMatrices(og.matrixWorldInverse,IA.matrixWorld),IA.normalMatrix.getNormalMatrix(IA.modelViewMatrix),ag.onBeforeRender(J,ZA,og,TA,IA,mt),ag.transparent===!0&&ag.side===Ho?(ag.side=Ji,ag.needsUpdate=!0,J.renderBufferDirect(og,ZA,TA,ag,IA,mt),ag.side=EQ,ag.needsUpdate=!0,J.renderBufferDirect(og,ZA,TA,ag,IA,mt),ag.side=Ho):J.renderBufferDirect(og,ZA,TA,ag,IA,mt),IA.onAfterRender(J,ZA,og,TA,ag,mt)}function Re(IA,ZA,og){ZA.isScene!==!0&&(ZA=YA);const TA=Ag.get(IA),ag=L.state.lights,mt=L.state.shadowsArray,Ut=ag.state.version,Ht=Bt.getParameters(IA,ag.state,mt,ZA,og),Wt=Bt.getProgramCacheKey(Ht);let eI=TA.programs;TA.environment=IA.isMeshStandardMaterial?ZA.environment:null,TA.fog=ZA.fog,TA.envMap=(IA.isMeshStandardMaterial?et:wg).get(IA.envMap||TA.environment),eI===void 0&&(IA.addEventListener("dispose",II),eI=new Map,TA.programs=eI);let Xt=eI.get(Wt);if(Xt!==void 0){if(TA.currentProgram===Xt&&TA.lightsStateVersion===Ut)return bi(IA,Ht),Xt}else Ht.uniforms=Bt.getUniforms(IA),IA.onBuild(og,Ht,J),IA.onBeforeCompile(Ht,J),Xt=Bt.acquireProgram(Ht,Wt),eI.set(Wt,Xt),TA.uniforms=Ht.uniforms;const $t=TA.uniforms;(!IA.isShaderMaterial&&!IA.isRawShaderMaterial||IA.clipping===!0)&&($t.clippingPlanes=z.uniform),bi(IA,Ht),TA.needsLights=DB(IA),TA.lightsStateVersion=Ut,TA.needsLights&&($t.ambientLightColor.value=ag.state.ambient,$t.lightProbe.value=ag.state.probe,$t.directionalLights.value=ag.state.directional,$t.directionalLightShadows.value=ag.state.directionalShadow,$t.spotLights.value=ag.state.spot,$t.spotLightShadows.value=ag.state.spotShadow,$t.rectAreaLights.value=ag.state.rectArea,$t.ltc_1.value=ag.state.rectAreaLTC1,$t.ltc_2.value=ag.state.rectAreaLTC2,$t.pointLights.value=ag.state.point,$t.pointLightShadows.value=ag.state.pointShadow,$t.hemisphereLights.value=ag.state.hemi,$t.directionalShadowMap.value=ag.state.directionalShadowMap,$t.directionalShadowMatrix.value=ag.state.directionalShadowMatrix,$t.spotShadowMap.value=ag.state.spotShadowMap,$t.spotLightMatrix.value=ag.state.spotLightMatrix,$t.spotLightMap.value=ag.state.spotLightMap,$t.pointShadowMap.value=ag.state.pointShadowMap,$t.pointShadowMatrix.value=ag.state.pointShadowMatrix);const TI=Xt.getUniforms(),XI=os.seqWithValue(TI.seq,$t);return TA.currentProgram=Xt,TA.uniformsList=XI,Xt}function bi(IA,ZA){const og=Ag.get(IA);og.outputEncoding=ZA.outputEncoding,og.instancing=ZA.instancing,og.skinning=ZA.skinning,og.morphTargets=ZA.morphTargets,og.morphNormals=ZA.morphNormals,og.morphColors=ZA.morphColors,og.morphTargetsCount=ZA.morphTargetsCount,og.numClippingPlanes=ZA.numClippingPlanes,og.numIntersection=ZA.numClipIntersection,og.vertexAlphas=ZA.vertexAlphas,og.vertexTangents=ZA.vertexTangents,og.toneMapping=ZA.toneMapping}function Te(IA,ZA,og,TA,ag){ZA.isScene!==!0&&(ZA=YA),VA.resetTextureUnits();const mt=ZA.fog,Ut=TA.isMeshStandardMaterial?ZA.environment:null,Ht=nA===null?J.outputEncoding:nA.isXRRenderTarget===!0?nA.texture.encoding:oQ,Wt=(TA.isMeshStandardMaterial?et:wg).get(TA.envMap||Ut),eI=TA.vertexColors===!0&&!!og.attributes.color&&og.attributes.color.itemSize===4,Xt=!!TA.normalMap&&!!og.attributes.tangent,$t=!!og.morphAttributes.position,TI=!!og.morphAttributes.normal,XI=!!og.morphAttributes.color,ke=TA.toneMapped?J.toneMapping:OB,gi=og.morphAttributes.position||og.morphAttributes.normal||og.morphAttributes.color,bI=gi!==void 0?gi.length:0,bt=Ag.get(TA),pi=L.state.lights;if(Bg===!0&&(O===!0||IA!==eA)){const OI=IA===eA&&TA.id===cA;z.setState(TA,IA,OI)}let YI=!1;TA.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==pi.state.version||bt.outputEncoding!==Ht||ag.isInstancedMesh&&bt.instancing===!1||!ag.isInstancedMesh&&bt.instancing===!0||ag.isSkinnedMesh&&bt.skinning===!1||!ag.isSkinnedMesh&&bt.skinning===!0||bt.envMap!==Wt||TA.fog===!0&&bt.fog!==mt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==z.numPlanes||bt.numIntersection!==z.numIntersection)||bt.vertexAlphas!==eI||bt.vertexTangents!==Xt||bt.morphTargets!==$t||bt.morphNormals!==TI||bt.morphColors!==XI||bt.toneMapping!==ke||tt.isWebGL2===!0&&bt.morphTargetsCount!==bI)&&(YI=!0):(YI=!0,bt.__version=TA.version);let _e=bt.currentProgram;YI===!0&&(_e=Re(TA,ZA,ag));let VB=!1,Qi=!1,fB=!1;const CI=_e.getUniforms(),Ei=bt.uniforms;if(Og.useProgram(_e.program)&&(VB=!0,Qi=!0,fB=!0),TA.id!==cA&&(cA=TA.id,Qi=!0),VB||eA!==IA){if(CI.setValue(LA,"projectionMatrix",IA.projectionMatrix),tt.logarithmicDepthBuffer&&CI.setValue(LA,"logDepthBufFC",2/(Math.log(IA.far+1)/Math.LN2)),eA!==IA&&(eA=IA,Qi=!0,fB=!0),TA.isShaderMaterial||TA.isMeshPhongMaterial||TA.isMeshToonMaterial||TA.isMeshStandardMaterial||TA.envMap){const OI=CI.map.cameraPosition;OI!==void 0&&OI.setValue(LA,yA.setFromMatrixPosition(IA.matrixWorld))}(TA.isMeshPhongMaterial||TA.isMeshToonMaterial||TA.isMeshLambertMaterial||TA.isMeshBasicMaterial||TA.isMeshStandardMaterial||TA.isShaderMaterial)&&CI.setValue(LA,"isOrthographic",IA.isOrthographicCamera===!0),(TA.isMeshPhongMaterial||TA.isMeshToonMaterial||TA.isMeshLambertMaterial||TA.isMeshBasicMaterial||TA.isMeshStandardMaterial||TA.isShaderMaterial||TA.isShadowMaterial||ag.isSkinnedMesh)&&CI.setValue(LA,"viewMatrix",IA.matrixWorldInverse)}if(ag.isSkinnedMesh){CI.setOptional(LA,ag,"bindMatrix"),CI.setOptional(LA,ag,"bindMatrixInverse");const OI=ag.skeleton;OI&&(tt.floatVertexTextures?(OI.boneTexture===null&&OI.computeBoneTexture(),CI.setValue(LA,"boneTexture",OI.boneTexture,VA),CI.setValue(LA,"boneTextureSize",OI.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const We=og.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0&&tt.isWebGL2===!0)&&Rg.update(ag,og,TA,_e),(Qi||bt.receiveShadow!==ag.receiveShadow)&&(bt.receiveShadow=ag.receiveShadow,CI.setValue(LA,"receiveShadow",ag.receiveShadow)),TA.isMeshGouraudMaterial&&TA.envMap!==null&&(Ei.envMap.value=Wt,Ei.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Qi&&(CI.setValue(LA,"toneMappingExposure",J.toneMappingExposure),bt.needsLights&&wi(Ei,fB),mt&&TA.fog===!0&&jt.refreshFogUniforms(Ei,mt),jt.refreshMaterialUniforms(Ei,TA,eg,WA,j),os.upload(LA,bt.uniformsList,Ei,VA)),TA.isShaderMaterial&&TA.uniformsNeedUpdate===!0&&(os.upload(LA,bt.uniformsList,Ei,VA),TA.uniformsNeedUpdate=!1),TA.isSpriteMaterial&&CI.setValue(LA,"center",ag.center),CI.setValue(LA,"modelViewMatrix",ag.modelViewMatrix),CI.setValue(LA,"normalMatrix",ag.normalMatrix),CI.setValue(LA,"modelMatrix",ag.matrixWorld),TA.isShaderMaterial||TA.isRawShaderMaterial){const OI=TA.uniformsGroups;for(let wB=0,ZB=OI.length;wB<ZB;wB++)if(tt.isWebGL2){const XB=OI[wB];Jg.update(XB,_e),Jg.bind(XB,_e)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _e}function wi(IA,ZA){IA.ambientLightColor.needsUpdate=ZA,IA.lightProbe.needsUpdate=ZA,IA.directionalLights.needsUpdate=ZA,IA.directionalLightShadows.needsUpdate=ZA,IA.pointLights.needsUpdate=ZA,IA.pointLightShadows.needsUpdate=ZA,IA.spotLights.needsUpdate=ZA,IA.spotLightShadows.needsUpdate=ZA,IA.rectAreaLights.needsUpdate=ZA,IA.hemisphereLights.needsUpdate=ZA}function DB(IA){return IA.isMeshLambertMaterial||IA.isMeshToonMaterial||IA.isMeshPhongMaterial||IA.isMeshStandardMaterial||IA.isShadowMaterial||IA.isShaderMaterial&&IA.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return oA},this.getRenderTarget=function(){return nA},this.setRenderTargetTextures=function(IA,ZA,og){Ag.get(IA.texture).__webglTexture=ZA,Ag.get(IA.depthTexture).__webglTexture=og;const TA=Ag.get(IA);TA.__hasExternalTextures=!0,TA.__hasExternalTextures&&(TA.__autoAllocateDepthBuffer=og===void 0,TA.__autoAllocateDepthBuffer||kg.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),TA.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(IA,ZA){const og=Ag.get(IA);og.__webglFramebuffer=ZA,og.__useDefaultFramebuffer=ZA===void 0},this.setRenderTarget=function(IA,ZA=0,og=0){nA=IA,X=ZA,oA=og;let TA=!0,ag=null,mt=!1,Ut=!1;if(IA){const Wt=Ag.get(IA);Wt.__useDefaultFramebuffer!==void 0?(Og.bindFramebuffer(36160,null),TA=!1):Wt.__webglFramebuffer===void 0?VA.setupRenderTarget(IA):Wt.__hasExternalTextures&&VA.rebindTextures(IA,Ag.get(IA.texture).__webglTexture,Ag.get(IA.depthTexture).__webglTexture);const eI=IA.texture;(eI.isData3DTexture||eI.isDataArrayTexture||eI.isCompressedArrayTexture)&&(Ut=!0);const Xt=Ag.get(IA).__webglFramebuffer;IA.isWebGLCubeRenderTarget?(ag=Xt[ZA],mt=!0):tt.isWebGL2&&IA.samples>0&&VA.useMultisampledRTT(IA)===!1?ag=Ag.get(IA).__webglMultisampledFramebuffer:ag=Xt,MA.copy(IA.viewport),qA.copy(IA.scissor),P=IA.scissorTest}else MA.copy(JA).multiplyScalar(eg).floor(),qA.copy(gg).multiplyScalar(eg).floor(),P=yg;if(Og.bindFramebuffer(36160,ag)&&tt.drawBuffers&&TA&&Og.drawBuffers(IA,ag),Og.viewport(MA),Og.scissor(qA),Og.setScissorTest(P),mt){const Wt=Ag.get(IA.texture);LA.framebufferTexture2D(36160,36064,34069+ZA,Wt.__webglTexture,og)}else if(Ut){const Wt=Ag.get(IA.texture),eI=ZA||0;LA.framebufferTextureLayer(36160,36064,Wt.__webglTexture,og||0,eI)}cA=-1},this.readRenderTargetPixels=function(IA,ZA,og,TA,ag,mt,Ut){if(!(IA&&IA.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Ag.get(IA).__webglFramebuffer;if(IA.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){Og.bindFramebuffer(36160,Ht);try{const Wt=IA.texture,eI=Wt.format,Xt=Wt.type;if(eI!==zi&&dA.convert(eI)!==LA.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=Xt===Nn&&(kg.has("EXT_color_buffer_half_float")||tt.isWebGL2&&kg.has("EXT_color_buffer_float"));if(Xt!==nQ&&dA.convert(Xt)!==LA.getParameter(35738)&&!(Xt===BQ&&(tt.isWebGL2||kg.has("OES_texture_float")||kg.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ZA>=0&&ZA<=IA.width-TA&&og>=0&&og<=IA.height-ag&&LA.readPixels(ZA,og,TA,ag,dA.convert(eI),dA.convert(Xt),mt)}finally{const Wt=nA!==null?Ag.get(nA).__webglFramebuffer:null;Og.bindFramebuffer(36160,Wt)}}},this.copyFramebufferToTexture=function(IA,ZA,og=0){const TA=Math.pow(2,-og),ag=Math.floor(ZA.image.width*TA),mt=Math.floor(ZA.image.height*TA);VA.setTexture2D(ZA,0),LA.copyTexSubImage2D(3553,og,0,0,IA.x,IA.y,ag,mt),Og.unbindTexture()},this.copyTextureToTexture=function(IA,ZA,og,TA=0){const ag=ZA.image.width,mt=ZA.image.height,Ut=dA.convert(og.format),Ht=dA.convert(og.type);VA.setTexture2D(og,0),LA.pixelStorei(37440,og.flipY),LA.pixelStorei(37441,og.premultiplyAlpha),LA.pixelStorei(3317,og.unpackAlignment),ZA.isDataTexture?LA.texSubImage2D(3553,TA,IA.x,IA.y,ag,mt,Ut,Ht,ZA.image.data):ZA.isCompressedTexture?LA.compressedTexSubImage2D(3553,TA,IA.x,IA.y,ZA.mipmaps[0].width,ZA.mipmaps[0].height,Ut,ZA.mipmaps[0].data):LA.texSubImage2D(3553,TA,IA.x,IA.y,Ut,Ht,ZA.image),TA===0&&og.generateMipmaps&&LA.generateMipmap(3553),Og.unbindTexture()},this.copyTextureToTexture3D=function(IA,ZA,og,TA,ag=0){if(J.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=IA.max.x-IA.min.x+1,Ut=IA.max.y-IA.min.y+1,Ht=IA.max.z-IA.min.z+1,Wt=dA.convert(TA.format),eI=dA.convert(TA.type);let Xt;if(TA.isData3DTexture)VA.setTexture3D(TA,0),Xt=32879;else if(TA.isDataArrayTexture)VA.setTexture2DArray(TA,0),Xt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}LA.pixelStorei(37440,TA.flipY),LA.pixelStorei(37441,TA.premultiplyAlpha),LA.pixelStorei(3317,TA.unpackAlignment);const $t=LA.getParameter(3314),TI=LA.getParameter(32878),XI=LA.getParameter(3316),ke=LA.getParameter(3315),gi=LA.getParameter(32877),bI=og.isCompressedTexture?og.mipmaps[0]:og.image;LA.pixelStorei(3314,bI.width),LA.pixelStorei(32878,bI.height),LA.pixelStorei(3316,IA.min.x),LA.pixelStorei(3315,IA.min.y),LA.pixelStorei(32877,IA.min.z),og.isDataTexture||og.isData3DTexture?LA.texSubImage3D(Xt,ag,ZA.x,ZA.y,ZA.z,mt,Ut,Ht,Wt,eI,bI.data):og.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),LA.compressedTexSubImage3D(Xt,ag,ZA.x,ZA.y,ZA.z,mt,Ut,Ht,Wt,bI.data)):LA.texSubImage3D(Xt,ag,ZA.x,ZA.y,ZA.z,mt,Ut,Ht,Wt,eI,bI),LA.pixelStorei(3314,$t),LA.pixelStorei(32878,TI),LA.pixelStorei(3316,XI),LA.pixelStorei(3315,ke),LA.pixelStorei(32877,gi),ag===0&&TA.generateMipmaps&&LA.generateMipmap(Xt),Og.unbindTexture()},this.initTexture=function(IA){IA.isCubeTexture?VA.setTextureCube(IA,0):IA.isData3DTexture?VA.setTexture3D(IA,0):IA.isDataArrayTexture||IA.isCompressedArrayTexture?VA.setTexture2DArray(IA,0):VA.setTexture2D(IA,0),Og.unbindTexture()},this.resetState=function(){X=0,oA=0,nA=null,Og.reset(),vA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class EF extends md{}EF.prototype.isWebGL1Renderer=!0;class nF extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.backgroundIntensity=this.backgroundIntensity),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class wr extends pC{constructor(t=1,i=32,Q=16,o=0,h=Math.PI*2,w=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:Q,phiStart:o,phiLength:h,thetaStart:w,thetaLength:d},i=Math.max(3,Math.floor(i)),Q=Math.max(2,Math.floor(Q));const F=Math.min(w+d,Math.PI);let G=0;const N=[],x=new OA,L=new OA,H=[],AA=[],J=[],U=[];for(let X=0;X<=Q;X++){const oA=[],nA=X/Q;let cA=0;X==0&&w==0?cA=.5/i:X==Q&&F==Math.PI&&(cA=-.5/i);for(let eA=0;eA<=i;eA++){const MA=eA/i;x.x=-t*Math.cos(o+MA*h)*Math.sin(w+nA*d),x.y=t*Math.cos(w+nA*d),x.z=t*Math.sin(o+MA*h)*Math.sin(w+nA*d),AA.push(x.x,x.y,x.z),L.copy(x).normalize(),J.push(L.x,L.y,L.z),U.push(MA+cA,1-nA),oA.push(G++)}N.push(oA)}for(let X=0;X<Q;X++)for(let oA=0;oA<i;oA++){const nA=N[X][oA+1],cA=N[X][oA],eA=N[X+1][oA],MA=N[X+1][oA+1];(X!==0||w>0)&&H.push(nA,cA,MA),(X!==Q-1||F<Math.PI)&&H.push(cA,eA,MA)}this.setIndex(H),this.setAttribute("position",new uB(AA,3)),this.setAttribute("normal",new uB(J,3)),this.setAttribute("uv",new uB(U,2))}static fromJSON(t){return new wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oF extends cQ{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hs,this.normalScale=new tI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sF extends cQ{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xI(16777215),this.specular=new xI(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hs,this.normalScale=new tI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vl extends cQ{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hs,this.normalScale=new tI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Zl={enabled:!1,files:{},add:function(c,t){this.enabled!==!1&&(this.files[c]=t)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class aF{constructor(t,i,Q){const o=this;let h=!1,w=0,d=0,F;const G=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=Q,this.itemStart=function(N){d++,h===!1&&o.onStart!==void 0&&o.onStart(N,w,d),h=!0},this.itemEnd=function(N){w++,o.onProgress!==void 0&&o.onProgress(N,w,d),w===d&&(h=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(N){o.onError!==void 0&&o.onError(N)},this.resolveURL=function(N){return F?F(N):N},this.setURLModifier=function(N){return F=N,this},this.addHandler=function(N,x){return G.push(N,x),this},this.removeHandler=function(N){const x=G.indexOf(N);return x!==-1&&G.splice(x,2),this},this.getHandler=function(N){for(let x=0,L=G.length;x<L;x+=2){const H=G[x],AA=G[x+1];if(H.global&&(H.lastIndex=0),H.test(N))return AA}return null}}}const rF=new aF;class Rd{constructor(t){this.manager=t!==void 0?t:rF,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const Q=this;return new Promise(function(o,h){Q.load(t,o,i,h)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class hF extends Rd{constructor(t){super(t)}load(t,i,Q,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const h=this,w=Zl.get(t);if(w!==void 0)return h.manager.itemStart(t),setTimeout(function(){i&&i(w),h.manager.itemEnd(t)},0),w;const d=kn("img");function F(){N(),Zl.add(t,this),i&&i(this),h.manager.itemEnd(t)}function G(x){N(),o&&o(x),h.manager.itemError(t),h.manager.itemEnd(t)}function N(){d.removeEventListener("load",F,!1),d.removeEventListener("error",G,!1)}return d.addEventListener("load",F,!1),d.addEventListener("error",G,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),h.manager.itemStart(t),d.src=t,d}}class cF extends Rd{constructor(t){super(t)}load(t,i,Q,o){const h=new Ci,w=new hF(this.manager);return w.setCrossOrigin(this.crossOrigin),w.setPath(this.path),w.load(t,function(d){h.image=d,h.needsUpdate=!0,i!==void 0&&i(h)},Q,o),h}}class Gd extends Ke{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xI(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class lF extends Gd{constructor(t,i,Q){super(t,Q),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.groundColor=new xI(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const ir=new ye,Xl=new OA,zl=new OA;class dF{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tI(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new tI(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,Q=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xl),zl.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(zl),i.updateMatrixWorld(),ir.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),Q.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Q.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uF extends dF{constructor(){super(new fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DF extends Gd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.target=new Ke,this.shadow=new uF}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jl{constructor(t=1,i=0,Q=0){return this.radius=t,this.phi=i,this.theta=Q,this}set(t,i,Q){return this.radius=t,this.phi=i,this.theta=Q,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,Q){return this.radius=Math.sqrt(t*t+i*i+Q*Q),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,Q),this.phi=Math.acos(Ai(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hr);function fF(){const c=new xi(70,window.innerWidth/window.innerHeight,.01,20);return c.position.set(0,0,5),c}const $l={type:"change"},Br={type:"start"},Ad={type:"end"};class wF extends hQ{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new OA,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:AE.ROTATE,MIDDLE:AE.DOLLY,RIGHT:AE.PAN},this.touches={ONE:gE.ROTATE,TWO:gE.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(dA){dA.addEventListener("keydown",$A),this._domElementKeyEvents=dA},this.saveState=function(){Q.target0.copy(Q.target),Q.position0.copy(Q.object.position),Q.zoom0=Q.object.zoom},this.reset=function(){Q.target.copy(Q.target0),Q.object.position.copy(Q.position0),Q.object.zoom=Q.zoom0,Q.object.updateProjectionMatrix(),Q.dispatchEvent($l),Q.update(),h=o.NONE},this.update=function(){const dA=new OA,vA=new aQ().setFromUnitVectors(t.up,new OA(0,1,0)),Jg=vA.clone().invert(),Qt=new OA,it=new aQ,rt=2*Math.PI;return function(){const vt=Q.object.position;dA.copy(vt).sub(Q.target),dA.applyQuaternion(vA),d.setFromVector3(dA),Q.autoRotate&&h===o.NONE&&wA(qA()),Q.enableDamping?(d.theta+=F.theta*Q.dampingFactor,d.phi+=F.phi*Q.dampingFactor):(d.theta+=F.theta,d.phi+=F.phi);let II=Q.minAzimuthAngle,wI=Q.maxAzimuthAngle;return isFinite(II)&&isFinite(wI)&&(II<-Math.PI?II+=rt:II>Math.PI&&(II-=rt),wI<-Math.PI?wI+=rt:wI>Math.PI&&(wI-=rt),II<=wI?d.theta=Math.max(II,Math.min(wI,d.theta)):d.theta=d.theta>(II+wI)/2?Math.max(II,d.theta):Math.min(wI,d.theta)),d.phi=Math.max(Q.minPolarAngle,Math.min(Q.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=G,d.radius=Math.max(Q.minDistance,Math.min(Q.maxDistance,d.radius)),Q.enableDamping===!0?Q.target.addScaledVector(N,Q.dampingFactor):Q.target.add(N),dA.setFromSpherical(d),dA.applyQuaternion(Jg),vt.copy(Q.target).add(dA),Q.object.lookAt(Q.target),Q.enableDamping===!0?(F.theta*=1-Q.dampingFactor,F.phi*=1-Q.dampingFactor,N.multiplyScalar(1-Q.dampingFactor)):(F.set(0,0,0),N.set(0,0,0)),G=1,x||Qt.distanceToSquared(Q.object.position)>w||8*(1-it.dot(Q.object.quaternion))>w?(Q.dispatchEvent($l),Qt.copy(Q.object.position),it.copy(Q.object.quaternion),x=!1,!0):!1}}(),this.dispose=function(){Q.domElement.removeEventListener("contextmenu",jA),Q.domElement.removeEventListener("pointerdown",wg),Q.domElement.removeEventListener("pointercancel",Gt),Q.domElement.removeEventListener("wheel",jt),Q.domElement.removeEventListener("pointermove",et),Q.domElement.removeEventListener("pointerup",Wg),Q._domElementKeyEvents!==null&&Q._domElementKeyEvents.removeEventListener("keydown",$A)};const Q=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=o.NONE;const w=1e-6,d=new jl,F=new jl;let G=1;const N=new OA;let x=!1;const L=new tI,H=new tI,AA=new tI,J=new tI,U=new tI,X=new tI,oA=new tI,nA=new tI,cA=new tI,eA=[],MA={};function qA(){return 2*Math.PI/60/60*Q.autoRotateSpeed}function P(){return Math.pow(.95,Q.zoomSpeed)}function wA(dA){F.theta-=dA}function WA(dA){F.phi-=dA}const eg=function(){const dA=new OA;return function(Jg,Qt){dA.setFromMatrixColumn(Qt,0),dA.multiplyScalar(-Jg),N.add(dA)}}(),bg=function(){const dA=new OA;return function(Jg,Qt){Q.screenSpacePanning===!0?dA.setFromMatrixColumn(Qt,1):(dA.setFromMatrixColumn(Qt,0),dA.crossVectors(Q.object.up,dA)),dA.multiplyScalar(Jg),N.add(dA)}}(),kA=function(){const dA=new OA;return function(Jg,Qt){const it=Q.domElement;if(Q.object.isPerspectiveCamera){const rt=Q.object.position;dA.copy(rt).sub(Q.target);let Dt=dA.length();Dt*=Math.tan(Q.object.fov/2*Math.PI/180),eg(2*Jg*Dt/it.clientHeight,Q.object.matrix),bg(2*Qt*Dt/it.clientHeight,Q.object.matrix)}else Q.object.isOrthographicCamera?(eg(Jg*(Q.object.right-Q.object.left)/Q.object.zoom/it.clientWidth,Q.object.matrix),bg(Qt*(Q.object.top-Q.object.bottom)/Q.object.zoom/it.clientHeight,Q.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),Q.enablePan=!1)}}();function JA(dA){Q.object.isPerspectiveCamera?G/=dA:Q.object.isOrthographicCamera?(Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom*dA)),Q.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1)}function gg(dA){Q.object.isPerspectiveCamera?G*=dA:Q.object.isOrthographicCamera?(Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom/dA)),Q.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1)}function yg(dA){L.set(dA.clientX,dA.clientY)}function mg(dA){oA.set(dA.clientX,dA.clientY)}function Bg(dA){J.set(dA.clientX,dA.clientY)}function O(dA){H.set(dA.clientX,dA.clientY),AA.subVectors(H,L).multiplyScalar(Q.rotateSpeed);const vA=Q.domElement;wA(2*Math.PI*AA.x/vA.clientHeight),WA(2*Math.PI*AA.y/vA.clientHeight),L.copy(H),Q.update()}function j(dA){nA.set(dA.clientX,dA.clientY),cA.subVectors(nA,oA),cA.y>0?JA(P()):cA.y<0&&gg(P()),oA.copy(nA),Q.update()}function gA(dA){U.set(dA.clientX,dA.clientY),X.subVectors(U,J).multiplyScalar(Q.panSpeed),kA(X.x,X.y),J.copy(U),Q.update()}function QA(dA){dA.deltaY<0?gg(P()):dA.deltaY>0&&JA(P()),Q.update()}function yA(dA){let vA=!1;switch(dA.code){case Q.keys.UP:dA.ctrlKey||dA.metaKey||dA.shiftKey?WA(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight):kA(0,Q.keyPanSpeed),vA=!0;break;case Q.keys.BOTTOM:dA.ctrlKey||dA.metaKey||dA.shiftKey?WA(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight):kA(0,-Q.keyPanSpeed),vA=!0;break;case Q.keys.LEFT:dA.ctrlKey||dA.metaKey||dA.shiftKey?wA(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight):kA(Q.keyPanSpeed,0),vA=!0;break;case Q.keys.RIGHT:dA.ctrlKey||dA.metaKey||dA.shiftKey?wA(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight):kA(-Q.keyPanSpeed,0),vA=!0;break}vA&&(dA.preventDefault(),Q.update())}function YA(){if(eA.length===1)L.set(eA[0].pageX,eA[0].pageY);else{const dA=.5*(eA[0].pageX+eA[1].pageX),vA=.5*(eA[0].pageY+eA[1].pageY);L.set(dA,vA)}}function tg(){if(eA.length===1)J.set(eA[0].pageX,eA[0].pageY);else{const dA=.5*(eA[0].pageX+eA[1].pageX),vA=.5*(eA[0].pageY+eA[1].pageY);J.set(dA,vA)}}function LA(){const dA=eA[0].pageX-eA[1].pageX,vA=eA[0].pageY-eA[1].pageY,Jg=Math.sqrt(dA*dA+vA*vA);oA.set(0,Jg)}function gt(){Q.enableZoom&&LA(),Q.enablePan&&tg()}function kg(){Q.enableZoom&&LA(),Q.enableRotate&&YA()}function tt(dA){if(eA.length==1)H.set(dA.pageX,dA.pageY);else{const Jg=yt(dA),Qt=.5*(dA.pageX+Jg.x),it=.5*(dA.pageY+Jg.y);H.set(Qt,it)}AA.subVectors(H,L).multiplyScalar(Q.rotateSpeed);const vA=Q.domElement;wA(2*Math.PI*AA.x/vA.clientHeight),WA(2*Math.PI*AA.y/vA.clientHeight),L.copy(H)}function Og(dA){if(eA.length===1)U.set(dA.pageX,dA.pageY);else{const vA=yt(dA),Jg=.5*(dA.pageX+vA.x),Qt=.5*(dA.pageY+vA.y);U.set(Jg,Qt)}X.subVectors(U,J).multiplyScalar(Q.panSpeed),kA(X.x,X.y),J.copy(U)}function at(dA){const vA=yt(dA),Jg=dA.pageX-vA.x,Qt=dA.pageY-vA.y,it=Math.sqrt(Jg*Jg+Qt*Qt);nA.set(0,it),cA.set(0,Math.pow(nA.y/oA.y,Q.zoomSpeed)),JA(cA.y),oA.copy(nA)}function Ag(dA){Q.enableZoom&&at(dA),Q.enablePan&&Og(dA)}function VA(dA){Q.enableZoom&&at(dA),Q.enableRotate&&tt(dA)}function wg(dA){Q.enabled!==!1&&(eA.length===0&&(Q.domElement.setPointerCapture(dA.pointerId),Q.domElement.addEventListener("pointermove",et),Q.domElement.addEventListener("pointerup",Wg)),Eg(dA),dA.pointerType==="touch"?iA(dA):ct(dA))}function et(dA){Q.enabled!==!1&&(dA.pointerType==="touch"?z(dA):Bt(dA))}function Wg(dA){Rg(dA),eA.length===0&&(Q.domElement.releasePointerCapture(dA.pointerId),Q.domElement.removeEventListener("pointermove",et),Q.domElement.removeEventListener("pointerup",Wg)),Q.dispatchEvent(Ad),h=o.NONE}function Gt(dA){Rg(dA)}function ct(dA){let vA;switch(dA.button){case 0:vA=Q.mouseButtons.LEFT;break;case 1:vA=Q.mouseButtons.MIDDLE;break;case 2:vA=Q.mouseButtons.RIGHT;break;default:vA=-1}switch(vA){case AE.DOLLY:if(Q.enableZoom===!1)return;mg(dA),h=o.DOLLY;break;case AE.ROTATE:if(dA.ctrlKey||dA.metaKey||dA.shiftKey){if(Q.enablePan===!1)return;Bg(dA),h=o.PAN}else{if(Q.enableRotate===!1)return;yg(dA),h=o.ROTATE}break;case AE.PAN:if(dA.ctrlKey||dA.metaKey||dA.shiftKey){if(Q.enableRotate===!1)return;yg(dA),h=o.ROTATE}else{if(Q.enablePan===!1)return;Bg(dA),h=o.PAN}break;default:h=o.NONE}h!==o.NONE&&Q.dispatchEvent(Br)}function Bt(dA){switch(h){case o.ROTATE:if(Q.enableRotate===!1)return;O(dA);break;case o.DOLLY:if(Q.enableZoom===!1)return;j(dA);break;case o.PAN:if(Q.enablePan===!1)return;gA(dA);break}}function jt(dA){Q.enabled===!1||Q.enableZoom===!1||h!==o.NONE||(dA.preventDefault(),Q.dispatchEvent(Br),QA(dA),Q.dispatchEvent(Ad))}function $A(dA){Q.enabled===!1||Q.enablePan===!1||yA(dA)}function iA(dA){switch(Xg(dA),eA.length){case 1:switch(Q.touches.ONE){case gE.ROTATE:if(Q.enableRotate===!1)return;YA(),h=o.TOUCH_ROTATE;break;case gE.PAN:if(Q.enablePan===!1)return;tg(),h=o.TOUCH_PAN;break;default:h=o.NONE}break;case 2:switch(Q.touches.TWO){case gE.DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;gt(),h=o.TOUCH_DOLLY_PAN;break;case gE.DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;kg(),h=o.TOUCH_DOLLY_ROTATE;break;default:h=o.NONE}break;default:h=o.NONE}h!==o.NONE&&Q.dispatchEvent(Br)}function z(dA){switch(Xg(dA),h){case o.TOUCH_ROTATE:if(Q.enableRotate===!1)return;tt(dA),Q.update();break;case o.TOUCH_PAN:if(Q.enablePan===!1)return;Og(dA),Q.update();break;case o.TOUCH_DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;Ag(dA),Q.update();break;case o.TOUCH_DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;VA(dA),Q.update();break;default:h=o.NONE}}function jA(dA){Q.enabled!==!1&&dA.preventDefault()}function Eg(dA){eA.push(dA)}function Rg(dA){delete MA[dA.pointerId];for(let vA=0;vA<eA.length;vA++)if(eA[vA].pointerId==dA.pointerId){eA.splice(vA,1);return}}function Xg(dA){let vA=MA[dA.pointerId];vA===void 0&&(vA=new tI,MA[dA.pointerId]=vA),vA.set(dA.pageX,dA.pageY)}function yt(dA){const vA=dA.pointerId===eA[0].pointerId?eA[1]:eA[0];return MA[vA.pointerId]}Q.domElement.addEventListener("contextmenu",jA),Q.domElement.addEventListener("pointerdown",wg),Q.domElement.addEventListener("pointercancel",Gt),Q.domElement.addEventListener("wheel",jt,{passive:!1}),this.update()}}function pF(c,t){const i=new wF(c,t);return i.enableDamping=!0,i.target.set(0,0,0),i.tick=(Q,o)=>i.update(),i}class yF{static createButton(t,i={}){const Q=document.createElement("button");function o(){if(i.domOverlay===void 0){const L=document.createElement("div");L.style.display="none",document.body.appendChild(L);const H=document.createElementNS("http://www.w3.org/2000/svg","svg");H.setAttribute("width",38),H.setAttribute("height",38),H.style.position="absolute",H.style.right="20px",H.style.top="20px",H.addEventListener("click",function(){G.end()}),L.appendChild(H);const AA=document.createElementNS("http://www.w3.org/2000/svg","path");AA.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),AA.setAttribute("stroke","#fff"),AA.setAttribute("stroke-width",2),H.appendChild(AA),i.optionalFeatures===void 0&&(i.optionalFeatures=[]),i.optionalFeatures.push("dom-overlay"),i.domOverlay={root:L}}let G=null;async function N(L){L.addEventListener("end",x),t.xr.setReferenceSpaceType("local"),await t.xr.setSession(L),Q.textContent="STOP AR",i.domOverlay.root.style.display="",G=L}function x(){G.removeEventListener("end",x),Q.textContent="START AR",i.domOverlay.root.style.display="none",G=null}Q.style.display="",Q.style.cursor="pointer",Q.style.left="calc(50% - 50px)",Q.style.width="100px",Q.textContent="START AR",Q.onmouseenter=function(){Q.style.opacity="1.0"},Q.onmouseleave=function(){Q.style.opacity="0.5"},Q.onclick=function(){G===null?navigator.xr.requestSession("immersive-ar",i).then(N):G.end()}}function h(){Q.style.display="",Q.style.cursor="auto",Q.style.left="calc(50% - 75px)",Q.style.width="150px",Q.onmouseenter=null,Q.onmouseleave=null,Q.onclick=null}function w(){h(),Q.textContent="AR NOT SUPPORTED"}function d(G){h(),console.warn("Exception when trying to call xr.isSessionSupported",G),Q.textContent="AR NOT ALLOWED"}function F(G){G.style.position="absolute",G.style.bottom="20px",G.style.padding="12px 6px",G.style.border="1px solid #fff",G.style.borderRadius="4px",G.style.background="rgba(0,0,0,0.1)",G.style.color="#fff",G.style.font="normal 13px sans-serif",G.style.textAlign="center",G.style.opacity="0.5",G.style.outline="none",G.style.zIndex="999"}if("xr"in navigator)return Q.id="ARButton",Q.style.display="none",F(Q),navigator.xr.isSessionSupported("immersive-ar").then(function(G){G?o():w()}).catch(d),Q;{const G=document.createElement("a");return window.isSecureContext===!1?(G.href=document.location.href.replace(/^http:/,"https:"),G.innerHTML="WEBXR NEEDS HTTPS"):(G.href="https://immersiveweb.dev/",G.innerHTML="WEBXR NOT AVAILABLE"),G.style.left="calc(50% - 90px)",G.style.width="180px",G.style.textDecoration="none",F(G),G}}}let Bs,Cs,Qs,rB,hB;class MF{constructor(){}async setup(t,i){const Q=document.getElementById("imgMarkerHiro"),o=await createImageBitmap(Q);console.log(o);const h=document.getElementById("imgNFTEarth"),w=await createImageBitmap(h);console.log(w);const d=new yC(.2,.2,.2);d.translate(0,.1,0);const F=new Vl({transparent:!0,opacity:.5,side:Sn});rB=new fi(d,F),rB.name="HiroMarkerCube",rB.matrixAutoUpdate=!1,rB.visible=!1,t.add(rB);const G=new wr(.2);G.translate(0,.2,0);const N=new Vl({transparent:!0,opacity:.5,side:Sn});hB=new fi(G,N),hB.name="EarthNFTSphere",hB.matrixAutoUpdate=!1,hB.visible=!1,t.add(hB);const x=yF.createButton(i,{requiredFeatures:["image-tracking"],trackedImages:[{image:o,widthInMeters:.2},{image:w,widthInMeters:.2}],optionalFeatures:["dom-overlay","dom-overlay-for-handheld-ar"],domOverlay:{root:document.body}});document.body.appendChild(x)}updateImageTrackingWebXR(t,i,Q,o,h){if(i){console.log("Frame: ",i);const w=i.getImageTrackingResults();for(const d of w){const F=d.index,G=Q.xr.getReferenceSpace(),N=i.getPose(d.imageSpace,G),x=d.trackingState;console.log(x),x=="tracked"&&(o.visible=!0,console.log("ImageIndex: ",F),F==0&&(rB.visible=!0,rB.matrix.fromArray(N.transform.matrix),console.log("Hiro Image target has been found",rB.position),rB.getWorldPosition(Bs),rB.getWorldQuaternion(Cs),Qs.setFromQuaternion(Cs),h.position.set(-2.8,0,2)),F==1&&(hB.visible=!0,hB.matrix.fromArray(N.transform.matrix),console.log("EarthNFT Image target has been found",hB.position),hB.getWorldPosition(Bs),hB.getWorldQuaternion(Cs),Qs.setFromQuaternion(Cs),h.position.set(.7,0,2.5)),console.log("Image target world position",F,Bs),console.log("Image target world rotation",F,Qs),o.position.copy(Bs),o.rotation.copy(Qs))}}}}var mF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gd={},RF={get exports(){return gd},set exports(c){gd=c}},v={};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var td;function GF(){if(td)return v;td=1,Object.defineProperty(v,"__esModule",{value:!0});const c="146",t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q=0,o=1,h=2,w=3,d=0,F=1,G=2,N=3,x=0,L=1,H=2,AA=0,J=1,U=2,X=3,oA=4,nA=5,cA=100,eA=101,MA=102,qA=103,P=104,wA=200,WA=201,eg=202,bg=203,kA=204,JA=205,gg=206,yg=207,mg=208,Bg=209,O=210,j=0,gA=1,QA=2,yA=3,YA=4,tg=5,LA=6,gt=7,kg=0,tt=1,Og=2,at=0,Ag=1,VA=2,wg=3,et=4,Wg=5,Gt=300,ct=301,Bt=302,jt=303,$A=304,iA=306,z=1e3,jA=1001,Eg=1002,Rg=1003,Xg=1004,yt=1004,dA=1005,vA=1005,Jg=1006,Qt=1007,it=1007,rt=1008,Dt=1008,vt=1009,II=1010,wI=1011,SA=1012,ng=1013,Ug=1014,$g=1015,lt=1016,_t=1017,ZI=1018,qI=1020,qe=1021,FI=1022,PI=1023,Re=1024,bi=1025,Te=1026,wi=1027,DB=1028,IA=1029,ZA=1030,og=1031,TA=1033,ag=33776,mt=33777,Ut=33778,Ht=33779,Wt=35840,eI=35841,Xt=35842,$t=35843,TI=36196,XI=37492,ke=37496,gi=37808,bI=37809,bt=37810,pi=37811,YI=37812,_e=37813,VB=37814,Qi=37815,fB=37816,CI=37817,Ei=37818,We=37819,OI=37820,wB=37821,ZB=36492,XB=2200,Jn=2201,bn=2202,m=2300,V=2301,sA=2302,fA=2400,mA=2401,xA=2402,FA=2500,uA=2501,aA=0,GA=1,NA=2,Kg=3e3,Lg=3001,Sg=3200,Vg=3201,dt=0,zt=1,fI="",yI="srgb",ne="srgb-linear",Ye=0,ni=7680,de=7681,pB=7682,oe=7683,ae=34055,ti=34056,yB=5386,ft=512,cI=513,Kn=514,GE=515,Yn=516,zB=517,lQ=518,MC=519,ji=35044,vn=35048,Hn=35040,qn=35045,Tn=35049,_n=35041,Wn=35046,MB=35050,mC=35042,SE="100",jB="300 es",yi=1035;class te{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const I=this._listeners;I[A]===void 0&&(I[A]=[]),I[A].indexOf(g)===-1&&I[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const I=this._listeners;return I[A]!==void 0&&I[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const e=this._listeners[A];if(e!==void 0){const B=e.indexOf(g);B!==-1&&e.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const e=I.slice(0);for(let B=0,E=e.length;B<E;B++)e[B].call(this,A);A.target=null}}}const re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let QI=1234567;const _I=Math.PI/180,$B=180/Math.PI;function Le(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,g=Math.random()*4294967295|0,I=Math.random()*4294967295|0;return(re[C&255]+re[C>>8&255]+re[C>>16&255]+re[C>>24&255]+"-"+re[A&255]+re[A>>8&255]+"-"+re[A>>16&15|64]+re[A>>24&255]+"-"+re[g&63|128]+re[g>>8&255]+"-"+re[g>>16&255]+re[g>>24&255]+re[I&255]+re[I>>8&255]+re[I>>16&255]+re[I>>24&255]).toLowerCase()}function zI(C,A,g){return Math.max(A,Math.min(g,C))}function dQ(C,A){return(C%A+A)%A}function ds(C,A,g,I,e){return I+(C-A)*(e-I)/(g-A)}function FE(C,A,g){return C!==A?(g-C)/(A-C):0}function mB(C,A,g){return(1-g)*C+g*A}function us(C,A,g,I){return mB(C,A,1-Math.exp(-g*I))}function pI(C,A=1){return A-Math.abs(dQ(C,A*2)-A)}function Ki(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A),C*C*(3-2*C))}function uQ(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A),C*C*C*(C*(C*6-15)+10))}function RB(C,A){return C+Math.floor(Math.random()*(A-C+1))}function Pn(C,A){return C+Math.random()*(A-C)}function Pt(C){return C*(.5-Math.random())}function K(C){C!==void 0&&(QI=C);let A=QI+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function ie(C){return C*_I}function DQ(C){return C*$B}function fQ(C){return(C&C-1)===0&&C!==0}function AC(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function Yi(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function GB(C,A,g,I,e){const B=Math.cos,E=Math.sin,n=B(g/2),s=E(g/2),r=B((A+I)/2),u=E((A+I)/2),D=B((A-I)/2),f=E((A-I)/2),y=B((I-A)/2),S=E((I-A)/2);switch(e){case"XYX":C.set(n*u,s*D,s*f,n*r);break;case"YZY":C.set(s*f,n*u,s*D,n*r);break;case"ZXZ":C.set(s*D,s*f,n*u,n*r);break;case"XZX":C.set(n*u,s*S,s*y,n*r);break;case"YXY":C.set(s*y,n*u,s*S,n*r);break;case"ZYZ":C.set(s*S,s*y,n*u,n*r);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}}function Ii(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function NI(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}var NE=Object.freeze({__proto__:null,DEG2RAD:_I,RAD2DEG:$B,generateUUID:Le,clamp:zI,euclideanModulo:dQ,mapLinear:ds,inverseLerp:FE,lerp:mB,damp:us,pingpong:pI,smoothstep:Ki,smootherstep:uQ,randInt:RB,randFloat:Pn,randFloatSpread:Pt,seededRandom:K,degToRad:ie,radToDeg:DQ,isPowerOfTwo:fQ,ceilPowerOfTwo:AC,floorPowerOfTwo:Yi,setQuaternionFromProperEuler:GB,normalize:NI,denormalize:Ii});class pg{constructor(A=0,g=0){pg.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,I=this.y,e=A.elements;return this.x=e[0]*g+e[3]*I+e[6],this.y=e[1]*g+e[4]*I+e[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y;return g*g+I*I}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const I=Math.cos(g),e=Math.sin(g),B=this.x-A.x,E=this.y-A.y;return this.x=B*I-E*e+A.x,this.y=B*e+E*I+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,g,I,e,B,E,n,s,r){const u=this.elements;return u[0]=A,u[1]=e,u[2]=n,u[3]=g,u[4]=B,u[5]=s,u[6]=I,u[7]=E,u[8]=r,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],this}extractBasis(A,g,I){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),I.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,e=g.elements,B=this.elements,E=I[0],n=I[3],s=I[6],r=I[1],u=I[4],D=I[7],f=I[2],y=I[5],S=I[8],R=e[0],M=e[3],b=e[6],T=e[1],Y=e[4],q=e[7],Z=e[2],CA=e[5],pA=e[8];return B[0]=E*R+n*T+s*Z,B[3]=E*M+n*Y+s*CA,B[6]=E*b+n*q+s*pA,B[1]=r*R+u*T+D*Z,B[4]=r*M+u*Y+D*CA,B[7]=r*b+u*q+D*pA,B[2]=f*R+y*T+S*Z,B[5]=f*M+y*Y+S*CA,B[8]=f*b+y*q+S*pA,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],E=A[4],n=A[5],s=A[6],r=A[7],u=A[8];return g*E*u-g*n*r-I*B*u+I*n*s+e*B*r-e*E*s}invert(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],E=A[4],n=A[5],s=A[6],r=A[7],u=A[8],D=u*E-n*r,f=n*s-u*B,y=r*B-E*s,S=g*D+I*f+e*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/S;return A[0]=D*R,A[1]=(e*r-u*I)*R,A[2]=(n*I-e*E)*R,A[3]=f*R,A[4]=(u*g-e*s)*R,A[5]=(e*B-n*g)*R,A[6]=y*R,A[7]=(I*s-r*g)*R,A[8]=(E*g-I*B)*R,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,I,e,B,E,n){const s=Math.cos(B),r=Math.sin(B);return this.set(I*s,I*r,-I*(s*E+r*n)+E+A,-e*r,e*s,-e*(-r*E+s*n)+n+g,0,0,1),this}scale(A,g){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=g,I[4]*=g,I[7]*=g,this}rotate(A){const g=Math.cos(A),I=Math.sin(A),e=this.elements,B=e[0],E=e[3],n=e[6],s=e[1],r=e[4],u=e[7];return e[0]=g*B+I*s,e[3]=g*E+I*r,e[6]=g*n+I*u,e[1]=-I*B+g*s,e[4]=-I*E+g*r,e[7]=-I*n+g*u,this}translate(A,g){const I=this.elements;return I[0]+=A*I[2],I[3]+=A*I[5],I[6]+=A*I[8],I[1]+=g*I[2],I[4]+=g*I[5],I[7]+=g*I[8],this}equals(A){const g=this.elements,I=A.elements;for(let e=0;e<9;e++)if(g[e]!==I[e])return!1;return!0}fromArray(A,g=0){for(let I=0;I<9;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A}clone(){return new this.constructor().fromArray(this.elements)}}function RC(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}const $i={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function AB(C,A){return new $i[C](A)}function gC(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function jI(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function vi(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}const lI={[yI]:{[ne]:jI},[ne]:{[yI]:vi}},Be={legacyMode:!0,get workingColorSpace(){return ne},set workingColorSpace(C){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(C,A,g){if(this.legacyMode||A===g||!A||!g)return C;if(lI[A]&&lI[A][g]!==void 0){const I=lI[A][g];return C.r=I(C.r),C.g=I(C.g),C.b=I(C.b),C}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(C,A){return this.convert(C,this.workingColorSpace,A)},toWorkingColorSpace:function(C,A){return this.convert(C,A,this.workingColorSpace)}},wQ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ie={r:0,g:0,b:0},ei={h:0,s:0,l:0},GC={h:0,s:0,l:0};function pQ(C,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?C+(A-C)*6*g:g<1/2?A:g<2/3?C+(A-C)*6*(2/3-g):C}function SC(C,A){return A.r=C.r,A.g=C.g,A.b=C.b,A}class Et{constructor(A,g,I){return this.isColor=!0,this.r=1,this.g=1,this.b=1,g===void 0&&I===void 0?this.set(A):this.setRGB(A,g,I)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=yI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,Be.toWorkingColorSpace(this,g),this}setRGB(A,g,I,e=ne){return this.r=A,this.g=g,this.b=I,Be.toWorkingColorSpace(this,e),this}setHSL(A,g,I,e=ne){if(A=dQ(A,1),g=zI(g,0,1),I=zI(I,0,1),g===0)this.r=this.g=this.b=I;else{const B=I<=.5?I*(1+g):I+g-I*g,E=2*I-B;this.r=pQ(E,B,A+1/3),this.g=pQ(E,B,A),this.b=pQ(E,B,A-1/3)}return Be.toWorkingColorSpace(this,e),this}setStyle(A,g=yI){function I(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let e;if(e=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let B;const E=e[1],n=e[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,Be.toWorkingColorSpace(this,g),I(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,Be.toWorkingColorSpace(this,g),I(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){const s=parseFloat(B[1])/360,r=parseFloat(B[2])/100,u=parseFloat(B[3])/100;return I(B[4]),this.setHSL(s,r,u,g)}break}}else if(e=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=e[1],E=B.length;if(E===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,Be.toWorkingColorSpace(this,g),this;if(E===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,Be.toWorkingColorSpace(this,g),this}return A&&A.length>0?this.setColorName(A,g):this}setColorName(A,g=yI){const I=wQ[A.toLowerCase()];return I!==void 0?this.setHex(I,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=jI(A.r),this.g=jI(A.g),this.b=jI(A.b),this}copyLinearToSRGB(A){return this.r=vi(A.r),this.g=vi(A.g),this.b=vi(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=yI){return Be.fromWorkingColorSpace(SC(this,Ie),A),zI(Ie.r*255,0,255)<<16^zI(Ie.g*255,0,255)<<8^zI(Ie.b*255,0,255)<<0}getHexString(A=yI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=ne){Be.fromWorkingColorSpace(SC(this,Ie),g);const I=Ie.r,e=Ie.g,B=Ie.b,E=Math.max(I,e,B),n=Math.min(I,e,B);let s,r;const u=(n+E)/2;if(n===E)s=0,r=0;else{const D=E-n;switch(r=u<=.5?D/(E+n):D/(2-E-n),E){case I:s=(e-B)/D+(e<B?6:0);break;case e:s=(B-I)/D+2;break;case B:s=(I-e)/D+4;break}s/=6}return A.h=s,A.s=r,A.l=u,A}getRGB(A,g=ne){return Be.fromWorkingColorSpace(SC(this,Ie),g),A.r=Ie.r,A.g=Ie.g,A.b=Ie.b,A}getStyle(A=yI){return Be.fromWorkingColorSpace(SC(this,Ie),A),A!==yI?`color(${A} ${Ie.r} ${Ie.g} ${Ie.b})`:`rgb(${Ie.r*255|0},${Ie.g*255|0},${Ie.b*255|0})`}offsetHSL(A,g,I){return this.getHSL(ei),ei.h+=A,ei.s+=g,ei.l+=I,this.setHSL(ei.h,ei.s,ei.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,I){return this.r=A.r+(g.r-A.r)*I,this.g=A.g+(g.g-A.g)*I,this.b=A.b+(g.b-A.b)*I,this}lerpHSL(A,g){this.getHSL(ei),A.getHSL(GC);const I=mB(ei.h,GC.h,g),e=mB(ei.s,GC.s,g),B=mB(ei.l,GC.l,g);return this.setHSL(I,e,B),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Et.NAMES=wQ;let gB;class SB{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{gB===void 0&&(gB=gC("canvas")),gB.width=A.width,gB.height=A.height;const I=gB.getContext("2d");A instanceof ImageData?I.putImageData(A,0,0):I.drawImage(A,0,0,A.width,A.height),g=gB}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=gC("canvas");g.width=A.width,g.height=A.height;const I=g.getContext("2d");I.drawImage(A,0,0,A.width,A.height);const e=I.getImageData(0,0,A.width,A.height),B=e.data;for(let E=0;E<B.length;E++)B[E]=jI(B[E]/255)*255;return I.putImageData(e,0,0),g}else if(A.data){const g=A.data.slice(0);for(let I=0;I<g.length;I++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[I]=Math.floor(jI(g[I]/255)*255):g[I]=jI(g[I]);return{data:g,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class oi{constructor(A=null){this.isSource=!0,this.uuid=Le(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const I={uuid:this.uuid,url:""},e=this.data;if(e!==null){let B;if(Array.isArray(e)){B=[];for(let E=0,n=e.length;E<n;E++)e[E].isDataTexture?B.push(tC(e[E].image)):B.push(tC(e[E]))}else B=tC(e);I.url=B}return g||(A.images[this.uuid]=I),I}}function tC(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?SB.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FC=0;class KI extends te{constructor(A=KI.DEFAULT_IMAGE,g=KI.DEFAULT_MAPPING,I=jA,e=jA,B=Jg,E=rt,n=PI,s=vt,r=1,u=Kg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=Le(),this.name="",this.source=new oi(A),this.mipmaps=[],this.mapping=g,this.wrapS=I,this.wrapT=e,this.magFilter=B,this.minFilter=E,this.anisotropy=r,this.format=n,this.internalFormat=null,this.type=s,this.offset=new pg(0,0),this.repeat=new pg(1,1),this.center=new pg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const I={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(I.userData=this.userData),g||(A.textures[this.uuid]=I),I}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Gt)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case z:A.x=A.x-Math.floor(A.x);break;case jA:A.x=A.x<0?0:1;break;case Eg:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case z:A.y=A.y-Math.floor(A.y);break;case jA:A.y=A.y<0?0:1;break;case Eg:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}KI.DEFAULT_IMAGE=null,KI.DEFAULT_MAPPING=Gt;class RI{constructor(A=0,g=0,I=0,e=1){RI.prototype.isVector4=!0,this.x=A,this.y=g,this.z=I,this.w=e}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,I,e){return this.x=A,this.y=g,this.z=I,this.w=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,I=this.y,e=this.z,B=this.w,E=A.elements;return this.x=E[0]*g+E[4]*I+E[8]*e+E[12]*B,this.y=E[1]*g+E[5]*I+E[9]*e+E[13]*B,this.z=E[2]*g+E[6]*I+E[10]*e+E[14]*B,this.w=E[3]*g+E[7]*I+E[11]*e+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,I,e,B;const s=A.elements,r=s[0],u=s[4],D=s[8],f=s[1],y=s[5],S=s[9],R=s[2],M=s[6],b=s[10];if(Math.abs(u-f)<.01&&Math.abs(D-R)<.01&&Math.abs(S-M)<.01){if(Math.abs(u+f)<.1&&Math.abs(D+R)<.1&&Math.abs(S+M)<.1&&Math.abs(r+y+b-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const Y=(r+1)/2,q=(y+1)/2,Z=(b+1)/2,CA=(u+f)/4,pA=(D+R)/4,W=(S+M)/4;return Y>q&&Y>Z?Y<.01?(I=0,e=.707106781,B=.707106781):(I=Math.sqrt(Y),e=CA/I,B=pA/I):q>Z?q<.01?(I=.707106781,e=0,B=.707106781):(e=Math.sqrt(q),I=CA/e,B=W/e):Z<.01?(I=.707106781,e=.707106781,B=0):(B=Math.sqrt(Z),I=pA/B,e=W/B),this.set(I,e,B,g),this}let T=Math.sqrt((M-S)*(M-S)+(D-R)*(D-R)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(M-S)/T,this.y=(D-R)/T,this.z=(f-u)/T,this.w=Math.acos((r+y+b-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this.w=A.w+(g.w-A.w)*I,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pe extends te{constructor(A=1,g=1,I={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new RI(0,0,A,g),this.scissorTest=!1,this.viewport=new RI(0,0,A,g);const e={width:A,height:g,depth:1};this.texture=new KI(e,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.internalFormat=I.internalFormat!==void 0?I.internalFormat:null,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Jg,this.depthBuffer=I.depthBuffer!==void 0?I.depthBuffer:!0,this.stencilBuffer=I.stencilBuffer!==void 0?I.stencilBuffer:!1,this.depthTexture=I.depthTexture!==void 0?I.depthTexture:null,this.samples=I.samples!==void 0?I.samples:0}setSize(A,g,I=1){(this.width!==A||this.height!==g||this.depth!==I)&&(this.width=A,this.height=g,this.depth=I,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=I,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new oi(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class NC extends KI{constructor(A=null,g=1,I=1,e=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:I,depth:e},this.magFilter=Rg,this.minFilter=Rg,this.wrapR=jA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UE extends Pe{constructor(A=1,g=1,I=1){super(A,g),this.isWebGLArrayRenderTarget=!0,this.depth=I,this.texture=new NC(null,A,g,I),this.texture.isRenderTargetTexture=!0}}class yQ extends KI{constructor(A=null,g=1,I=1,e=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:I,depth:e},this.magFilter=Rg,this.minFilter=Rg,this.wrapR=jA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds extends Pe{constructor(A=1,g=1,I=1){super(A,g),this.isWebGL3DRenderTarget=!0,this.depth=I,this.texture=new yQ(null,A,g,I),this.texture.isRenderTargetTexture=!0}}class fs extends Pe{constructor(A=1,g=1,I=1,e={}){super(A,g,e),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let E=0;E<I;E++)this.texture[E]=B.clone(),this.texture[E].isRenderTargetTexture=!0}setSize(A,g,I=1){if(this.width!==A||this.height!==g||this.depth!==I){this.width=A,this.height=g,this.depth=I;for(let e=0,B=this.texture.length;e<B;e++)this.texture[e].image.width=A,this.texture[e].image.height=g,this.texture[e].image.depth=I;this.dispose()}return this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let g=0,I=A.texture.length;g<I;g++)this.texture[g]=A.texture[g].clone(),this.texture[g].isRenderTargetTexture=!0;return this}}class $I{constructor(A=0,g=0,I=0,e=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=I,this._w=e}static slerpFlat(A,g,I,e,B,E,n){let s=I[e+0],r=I[e+1],u=I[e+2],D=I[e+3];const f=B[E+0],y=B[E+1],S=B[E+2],R=B[E+3];if(n===0){A[g+0]=s,A[g+1]=r,A[g+2]=u,A[g+3]=D;return}if(n===1){A[g+0]=f,A[g+1]=y,A[g+2]=S,A[g+3]=R;return}if(D!==R||s!==f||r!==y||u!==S){let M=1-n;const b=s*f+r*y+u*S+D*R,T=b>=0?1:-1,Y=1-b*b;if(Y>Number.EPSILON){const Z=Math.sqrt(Y),CA=Math.atan2(Z,b*T);M=Math.sin(M*CA)/Z,n=Math.sin(n*CA)/Z}const q=n*T;if(s=s*M+f*q,r=r*M+y*q,u=u*M+S*q,D=D*M+R*q,M===1-n){const Z=1/Math.sqrt(s*s+r*r+u*u+D*D);s*=Z,r*=Z,u*=Z,D*=Z}}A[g]=s,A[g+1]=r,A[g+2]=u,A[g+3]=D}static multiplyQuaternionsFlat(A,g,I,e,B,E){const n=I[e],s=I[e+1],r=I[e+2],u=I[e+3],D=B[E],f=B[E+1],y=B[E+2],S=B[E+3];return A[g]=n*S+u*D+s*y-r*f,A[g+1]=s*S+u*f+r*D-n*y,A[g+2]=r*S+u*y+n*f-s*D,A[g+3]=u*S-n*D-s*f-r*y,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,I,e){return this._x=A,this._y=g,this._z=I,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g){const I=A._x,e=A._y,B=A._z,E=A._order,n=Math.cos,s=Math.sin,r=n(I/2),u=n(e/2),D=n(B/2),f=s(I/2),y=s(e/2),S=s(B/2);switch(E){case"XYZ":this._x=f*u*D+r*y*S,this._y=r*y*D-f*u*S,this._z=r*u*S+f*y*D,this._w=r*u*D-f*y*S;break;case"YXZ":this._x=f*u*D+r*y*S,this._y=r*y*D-f*u*S,this._z=r*u*S-f*y*D,this._w=r*u*D+f*y*S;break;case"ZXY":this._x=f*u*D-r*y*S,this._y=r*y*D+f*u*S,this._z=r*u*S+f*y*D,this._w=r*u*D-f*y*S;break;case"ZYX":this._x=f*u*D-r*y*S,this._y=r*y*D+f*u*S,this._z=r*u*S-f*y*D,this._w=r*u*D+f*y*S;break;case"YZX":this._x=f*u*D+r*y*S,this._y=r*y*D+f*u*S,this._z=r*u*S-f*y*D,this._w=r*u*D-f*y*S;break;case"XZY":this._x=f*u*D-r*y*S,this._y=r*y*D-f*u*S,this._z=r*u*S+f*y*D,this._w=r*u*D+f*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const I=g/2,e=Math.sin(I);return this._x=A.x*e,this._y=A.y*e,this._z=A.z*e,this._w=Math.cos(I),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,I=g[0],e=g[4],B=g[8],E=g[1],n=g[5],s=g[9],r=g[2],u=g[6],D=g[10],f=I+n+D;if(f>0){const y=.5/Math.sqrt(f+1);this._w=.25/y,this._x=(u-s)*y,this._y=(B-r)*y,this._z=(E-e)*y}else if(I>n&&I>D){const y=2*Math.sqrt(1+I-n-D);this._w=(u-s)/y,this._x=.25*y,this._y=(e+E)/y,this._z=(B+r)/y}else if(n>D){const y=2*Math.sqrt(1+n-I-D);this._w=(B-r)/y,this._x=(e+E)/y,this._y=.25*y,this._z=(s+u)/y}else{const y=2*Math.sqrt(1+D-I-n);this._w=(E-e)/y,this._x=(B+r)/y,this._y=(s+u)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let I=A.dot(g)+1;return I<Number.EPSILON?(I=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=I):(this._x=0,this._y=-A.z,this._z=A.y,this._w=I)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=I),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(zI(this.dot(A),-1,1)))}rotateTowards(A,g){const I=this.angleTo(A);if(I===0)return this;const e=Math.min(1,g/I);return this.slerp(A,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const I=A._x,e=A._y,B=A._z,E=A._w,n=g._x,s=g._y,r=g._z,u=g._w;return this._x=I*u+E*n+e*r-B*s,this._y=e*u+E*s+B*n-I*r,this._z=B*u+E*r+I*s-e*n,this._w=E*u-I*n-e*s-B*r,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const I=this._x,e=this._y,B=this._z,E=this._w;let n=E*A._w+I*A._x+e*A._y+B*A._z;if(n<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,n=-n):this.copy(A),n>=1)return this._w=E,this._x=I,this._y=e,this._z=B,this;const s=1-n*n;if(s<=Number.EPSILON){const y=1-g;return this._w=y*E+g*this._w,this._x=y*I+g*this._x,this._y=y*e+g*this._y,this._z=y*B+g*this._z,this.normalize(),this._onChangeCallback(),this}const r=Math.sqrt(s),u=Math.atan2(r,n),D=Math.sin((1-g)*u)/r,f=Math.sin(g*u)/r;return this._w=E*D+this._w*f,this._x=I*D+this._x*f,this._y=e*D+this._y*f,this._z=B*D+this._z*f,this._onChangeCallback(),this}slerpQuaternions(A,g,I){return this.copy(A).slerp(g,I)}random(){const A=Math.random(),g=Math.sqrt(1-A),I=Math.sqrt(A),e=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(g*Math.cos(e),I*Math.sin(B),I*Math.cos(B),g*Math.sin(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class BA{constructor(A=0,g=0,I=0){BA.prototype.isVector3=!0,this.x=A,this.y=g,this.z=I}set(A,g,I){return I===void 0&&(I=this.z),this.x=A,this.y=g,this.z=I,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(On.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(On.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,I=this.y,e=this.z,B=A.elements;return this.x=B[0]*g+B[3]*I+B[6]*e,this.y=B[1]*g+B[4]*I+B[7]*e,this.z=B[2]*g+B[5]*I+B[8]*e,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,I=this.y,e=this.z,B=A.elements,E=1/(B[3]*g+B[7]*I+B[11]*e+B[15]);return this.x=(B[0]*g+B[4]*I+B[8]*e+B[12])*E,this.y=(B[1]*g+B[5]*I+B[9]*e+B[13])*E,this.z=(B[2]*g+B[6]*I+B[10]*e+B[14])*E,this}applyQuaternion(A){const g=this.x,I=this.y,e=this.z,B=A.x,E=A.y,n=A.z,s=A.w,r=s*g+E*e-n*I,u=s*I+n*g-B*e,D=s*e+B*I-E*g,f=-B*g-E*I-n*e;return this.x=r*s+f*-B+u*-n-D*-E,this.y=u*s+f*-E+D*-B-r*-n,this.z=D*s+f*-n+r*-E-u*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,I=this.y,e=this.z,B=A.elements;return this.x=B[0]*g+B[4]*I+B[8]*e,this.y=B[1]*g+B[5]*I+B[9]*e,this.z=B[2]*g+B[6]*I+B[10]*e,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const I=A.x,e=A.y,B=A.z,E=g.x,n=g.y,s=g.z;return this.x=e*s-B*n,this.y=B*E-I*s,this.z=I*n-e*E,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const I=A.dot(this)/g;return this.copy(A).multiplyScalar(I)}projectOnPlane(A){return si.copy(this).projectOnVector(A),this.sub(si)}reflect(A){return this.sub(si.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const I=this.dot(A)/g;return Math.acos(zI(I,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y,e=this.z-A.z;return g*g+I*I+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,I){const e=Math.sin(g)*A;return this.x=e*Math.sin(I),this.y=Math.cos(g)*A,this.z=e*Math.cos(I),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,I){return this.x=A*Math.sin(g),this.y=I,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),I=this.setFromMatrixColumn(A,1).length(),e=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=I,this.z=e,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,g*4)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,g*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,g=Math.random()*Math.PI*2,I=Math.sqrt(1-A**2);return this.x=I*Math.cos(g),this.y=I*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const si=new BA,On=new $I;class ue{constructor(A=new BA(1/0,1/0,1/0),g=new BA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){let g=1/0,I=1/0,e=1/0,B=-1/0,E=-1/0,n=-1/0;for(let s=0,r=A.length;s<r;s+=3){const u=A[s],D=A[s+1],f=A[s+2];u<g&&(g=u),D<I&&(I=D),f<e&&(e=f),u>B&&(B=u),D>E&&(E=D),f>n&&(n=f)}return this.min.set(g,I,e),this.max.set(B,E,n),this}setFromBufferAttribute(A){let g=1/0,I=1/0,e=1/0,B=-1/0,E=-1/0,n=-1/0;for(let s=0,r=A.count;s<r;s++){const u=A.getX(s),D=A.getY(s),f=A.getZ(s);u<g&&(g=u),D<I&&(I=D),f<e&&(e=f),u>B&&(B=u),D>E&&(E=D),f>n&&(n=f)}return this.min.set(g,I,e),this.max.set(B,E,n),this}setFromPoints(A){this.makeEmpty();for(let g=0,I=A.length;g<I;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const I=tB.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(I),this.max.copy(A).add(I),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){A.updateWorldMatrix(!1,!1);const I=A.geometry;if(I!==void 0)if(g&&I.attributes!=null&&I.attributes.position!==void 0){const B=I.attributes.position;for(let E=0,n=B.count;E<n;E++)tB.fromBufferAttribute(B,E).applyMatrix4(A.matrixWorld),this.expandByPoint(tB)}else I.boundingBox===null&&I.computeBoundingBox(),IC.copy(I.boundingBox),IC.applyMatrix4(A.matrixWorld),this.union(IC);const e=A.children;for(let B=0,E=e.length;B<E;B++)this.expandByObject(e[B],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,tB),tB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,I;return A.normal.x>0?(g=A.normal.x*this.min.x,I=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,I=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,I+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,I+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,I+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,I+=A.normal.z*this.min.z),g<=-A.constant&&I>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(FB),MQ.subVectors(this.max,FB),IB.subVectors(A.a,FB),eB.subVectors(A.b,FB),iB.subVectors(A.c,FB),he.subVectors(eB,IB),Hi.subVectors(iB,eB),mi.subVectors(IB,iB);let g=[0,-he.z,he.y,0,-Hi.z,Hi.y,0,-mi.z,mi.y,he.z,0,-he.x,Hi.z,0,-Hi.x,mi.z,0,-mi.x,-he.y,he.x,0,-Hi.y,Hi.x,0,-mi.y,mi.x,0];return!kE(g,IB,eB,iB,MQ)||(g=[1,0,0,0,1,0,0,0,1],!kE(g,IB,eB,iB,MQ))?!1:(mQ.crossVectors(he,Hi),g=[mQ.x,mQ.y,mQ.z],kE(g,IB,eB,iB,MQ))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return tB.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(tB).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Mi),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Mi=[new BA,new BA,new BA,new BA,new BA,new BA,new BA,new BA],tB=new BA,IC=new ue,IB=new BA,eB=new BA,iB=new BA,he=new BA,Hi=new BA,mi=new BA,FB=new BA,MQ=new BA,mQ=new BA,BB=new BA;function kE(C,A,g,I,e){for(let B=0,E=C.length-3;B<=E;B+=3){BB.fromArray(C,B);const n=e.x*Math.abs(BB.x)+e.y*Math.abs(BB.y)+e.z*Math.abs(BB.z),s=A.dot(BB),r=g.dot(BB),u=I.dot(BB);if(Math.max(-Math.max(s,r,u),Math.min(s,r,u))>n)return!1}return!0}const ws=new ue,UC=new BA,LE=new BA;class NB{constructor(A=new BA,g=-1){this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const I=this.center;g!==void 0?I.copy(g):ws.setFromPoints(A).getCenter(I);let e=0;for(let B=0,E=A.length;B<E;B++)e=Math.max(e,I.distanceToSquared(A[B]));return this.radius=Math.sqrt(e),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const I=this.center.distanceToSquared(A);return g.copy(A),I>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;UC.subVectors(A,this.center);const g=UC.lengthSq();if(g>this.radius*this.radius){const I=Math.sqrt(g),e=(I-this.radius)*.5;this.center.addScaledVector(UC,e/I),this.radius+=e}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(LE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(UC.copy(A.center).add(LE)),this.expandByPoint(UC.copy(A.center).sub(LE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new BA,RQ=new BA,eC=new BA,CB=new BA,kC=new BA,QB=new BA,iC=new BA;class BC{constructor(A=new BA,g=new BA(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,qi)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const I=g.dot(this.direction);return I<0?g.copy(this.origin):g.copy(this.direction).multiplyScalar(I).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=qi.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(qi.copy(this.direction).multiplyScalar(g).add(this.origin),qi.distanceToSquared(A))}distanceSqToSegment(A,g,I,e){RQ.copy(A).add(g).multiplyScalar(.5),eC.copy(g).sub(A).normalize(),CB.copy(this.origin).sub(RQ);const B=A.distanceTo(g)*.5,E=-this.direction.dot(eC),n=CB.dot(this.direction),s=-CB.dot(eC),r=CB.lengthSq(),u=Math.abs(1-E*E);let D,f,y,S;if(u>0)if(D=E*s-n,f=E*n-s,S=B*u,D>=0)if(f>=-S)if(f<=S){const R=1/u;D*=R,f*=R,y=D*(D+E*f+2*n)+f*(E*D+f+2*s)+r}else f=B,D=Math.max(0,-(E*f+n)),y=-D*D+f*(f+2*s)+r;else f=-B,D=Math.max(0,-(E*f+n)),y=-D*D+f*(f+2*s)+r;else f<=-S?(D=Math.max(0,-(-E*B+n)),f=D>0?-B:Math.min(Math.max(-B,-s),B),y=-D*D+f*(f+2*s)+r):f<=S?(D=0,f=Math.min(Math.max(-B,-s),B),y=f*(f+2*s)+r):(D=Math.max(0,-(E*B+n)),f=D>0?B:Math.min(Math.max(-B,-s),B),y=-D*D+f*(f+2*s)+r);else f=E>0?-B:B,D=Math.max(0,-(E*f+n)),y=-D*D+f*(f+2*s)+r;return I&&I.copy(this.direction).multiplyScalar(D).add(this.origin),e&&e.copy(eC).multiplyScalar(f).add(RQ),y}intersectSphere(A,g){qi.subVectors(A.center,this.origin);const I=qi.dot(this.direction),e=qi.dot(qi)-I*I,B=A.radius*A.radius;if(e>B)return null;const E=Math.sqrt(B-e),n=I-E,s=I+E;return n<0&&s<0?null:n<0?this.at(s,g):this.at(n,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const I=-(this.origin.dot(A.normal)+A.constant)/g;return I>=0?I:null}intersectPlane(A,g){const I=this.distanceToPlane(A);return I===null?null:this.at(I,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0||A.normal.dot(this.direction)*g<0}intersectBox(A,g){let I,e,B,E,n,s;const r=1/this.direction.x,u=1/this.direction.y,D=1/this.direction.z,f=this.origin;return r>=0?(I=(A.min.x-f.x)*r,e=(A.max.x-f.x)*r):(I=(A.max.x-f.x)*r,e=(A.min.x-f.x)*r),u>=0?(B=(A.min.y-f.y)*u,E=(A.max.y-f.y)*u):(B=(A.max.y-f.y)*u,E=(A.min.y-f.y)*u),I>E||B>e||((B>I||isNaN(I))&&(I=B),(E<e||isNaN(e))&&(e=E),D>=0?(n=(A.min.z-f.z)*D,s=(A.max.z-f.z)*D):(n=(A.max.z-f.z)*D,s=(A.min.z-f.z)*D),I>s||n>e)||((n>I||I!==I)&&(I=n),(s<e||e!==e)&&(e=s),e<0)?null:this.at(I>=0?I:e,g)}intersectsBox(A){return this.intersectBox(A,qi)!==null}intersectTriangle(A,g,I,e,B){kC.subVectors(g,A),QB.subVectors(I,A),iC.crossVectors(kC,QB);let E=this.direction.dot(iC),n;if(E>0){if(e)return null;n=1}else if(E<0)n=-1,E=-E;else return null;CB.subVectors(this.origin,A);const s=n*this.direction.dot(QB.crossVectors(CB,QB));if(s<0)return null;const r=n*this.direction.dot(kC.cross(CB));if(r<0||s+r>E)return null;const u=-n*CB.dot(iC);return u<0?null:this.at(u/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,g,I,e,B,E,n,s,r,u,D,f,y,S,R,M){const b=this.elements;return b[0]=A,b[4]=g,b[8]=I,b[12]=e,b[1]=B,b[5]=E,b[9]=n,b[13]=s,b[2]=r,b[6]=u,b[10]=D,b[14]=f,b[3]=y,b[7]=S,b[11]=R,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],g[9]=I[9],g[10]=I[10],g[11]=I[11],g[12]=I[12],g[13]=I[13],g[14]=I[14],g[15]=I[15],this}copyPosition(A){const g=this.elements,I=A.elements;return g[12]=I[12],g[13]=I[13],g[14]=I[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,I){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),I.setFromMatrixColumn(this,2),this}makeBasis(A,g,I){return this.set(A.x,g.x,I.x,0,A.y,g.y,I.y,0,A.z,g.z,I.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,I=A.elements,e=1/UB.setFromMatrixColumn(A,0).length(),B=1/UB.setFromMatrixColumn(A,1).length(),E=1/UB.setFromMatrixColumn(A,2).length();return g[0]=I[0]*e,g[1]=I[1]*e,g[2]=I[2]*e,g[3]=0,g[4]=I[4]*B,g[5]=I[5]*B,g[6]=I[6]*B,g[7]=0,g[8]=I[8]*E,g[9]=I[9]*E,g[10]=I[10]*E,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,I=A.x,e=A.y,B=A.z,E=Math.cos(I),n=Math.sin(I),s=Math.cos(e),r=Math.sin(e),u=Math.cos(B),D=Math.sin(B);if(A.order==="XYZ"){const f=E*u,y=E*D,S=n*u,R=n*D;g[0]=s*u,g[4]=-s*D,g[8]=r,g[1]=y+S*r,g[5]=f-R*r,g[9]=-n*s,g[2]=R-f*r,g[6]=S+y*r,g[10]=E*s}else if(A.order==="YXZ"){const f=s*u,y=s*D,S=r*u,R=r*D;g[0]=f+R*n,g[4]=S*n-y,g[8]=E*r,g[1]=E*D,g[5]=E*u,g[9]=-n,g[2]=y*n-S,g[6]=R+f*n,g[10]=E*s}else if(A.order==="ZXY"){const f=s*u,y=s*D,S=r*u,R=r*D;g[0]=f-R*n,g[4]=-E*D,g[8]=S+y*n,g[1]=y+S*n,g[5]=E*u,g[9]=R-f*n,g[2]=-E*r,g[6]=n,g[10]=E*s}else if(A.order==="ZYX"){const f=E*u,y=E*D,S=n*u,R=n*D;g[0]=s*u,g[4]=S*r-y,g[8]=f*r+R,g[1]=s*D,g[5]=R*r+f,g[9]=y*r-S,g[2]=-r,g[6]=n*s,g[10]=E*s}else if(A.order==="YZX"){const f=E*s,y=E*r,S=n*s,R=n*r;g[0]=s*u,g[4]=R-f*D,g[8]=S*D+y,g[1]=D,g[5]=E*u,g[9]=-n*u,g[2]=-r*u,g[6]=y*D+S,g[10]=f-R*D}else if(A.order==="XZY"){const f=E*s,y=E*r,S=n*s,R=n*r;g[0]=s*u,g[4]=-D,g[8]=r*u,g[1]=f*D+R,g[5]=E*u,g[9]=y*D-S,g[2]=S*D-y,g[6]=n*u,g[10]=R*D+f}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(ps,A,CC)}lookAt(A,g,I){const e=this.elements;return De.subVectors(A,g),De.lengthSq()===0&&(De.z=1),De.normalize(),ai.crossVectors(I,De),ai.lengthSq()===0&&(Math.abs(I.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),ai.crossVectors(I,De)),ai.normalize(),GQ.crossVectors(De,ai),e[0]=ai.x,e[4]=GQ.x,e[8]=De.x,e[1]=ai.y,e[5]=GQ.y,e[9]=De.y,e[2]=ai.z,e[6]=GQ.z,e[10]=De.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,e=g.elements,B=this.elements,E=I[0],n=I[4],s=I[8],r=I[12],u=I[1],D=I[5],f=I[9],y=I[13],S=I[2],R=I[6],M=I[10],b=I[14],T=I[3],Y=I[7],q=I[11],Z=I[15],CA=e[0],pA=e[4],W=e[8],rA=e[12],RA=e[1],sg=e[5],vg=e[9],Ig=e[13],HA=e[2],lg=e[6],Fg=e[10],Yg=e[14],ug=e[3],XA=e[7],ig=e[11],Hg=e[15];return B[0]=E*CA+n*RA+s*HA+r*ug,B[4]=E*pA+n*sg+s*lg+r*XA,B[8]=E*W+n*vg+s*Fg+r*ig,B[12]=E*rA+n*Ig+s*Yg+r*Hg,B[1]=u*CA+D*RA+f*HA+y*ug,B[5]=u*pA+D*sg+f*lg+y*XA,B[9]=u*W+D*vg+f*Fg+y*ig,B[13]=u*rA+D*Ig+f*Yg+y*Hg,B[2]=S*CA+R*RA+M*HA+b*ug,B[6]=S*pA+R*sg+M*lg+b*XA,B[10]=S*W+R*vg+M*Fg+b*ig,B[14]=S*rA+R*Ig+M*Yg+b*Hg,B[3]=T*CA+Y*RA+q*HA+Z*ug,B[7]=T*pA+Y*sg+q*lg+Z*XA,B[11]=T*W+Y*vg+q*Fg+Z*ig,B[15]=T*rA+Y*Ig+q*Yg+Z*Hg,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[4],e=A[8],B=A[12],E=A[1],n=A[5],s=A[9],r=A[13],u=A[2],D=A[6],f=A[10],y=A[14],S=A[3],R=A[7],M=A[11],b=A[15];return S*(+B*s*D-e*r*D-B*n*f+I*r*f+e*n*y-I*s*y)+R*(+g*s*y-g*r*f+B*E*f-e*E*y+e*r*u-B*s*u)+M*(+g*r*D-g*n*y-B*E*D+I*E*y+B*n*u-I*r*u)+b*(-e*n*u-g*s*D+g*n*f+e*E*D-I*E*f+I*s*u)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,I){const e=this.elements;return A.isVector3?(e[12]=A.x,e[13]=A.y,e[14]=A.z):(e[12]=A,e[13]=g,e[14]=I),this}invert(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],E=A[4],n=A[5],s=A[6],r=A[7],u=A[8],D=A[9],f=A[10],y=A[11],S=A[12],R=A[13],M=A[14],b=A[15],T=D*M*r-R*f*r+R*s*y-n*M*y-D*s*b+n*f*b,Y=S*f*r-u*M*r-S*s*y+E*M*y+u*s*b-E*f*b,q=u*R*r-S*D*r+S*n*y-E*R*y-u*n*b+E*D*b,Z=S*D*s-u*R*s-S*n*f+E*R*f+u*n*M-E*D*M,CA=g*T+I*Y+e*q+B*Z;if(CA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const pA=1/CA;return A[0]=T*pA,A[1]=(R*f*B-D*M*B-R*e*y+I*M*y+D*e*b-I*f*b)*pA,A[2]=(n*M*B-R*s*B+R*e*r-I*M*r-n*e*b+I*s*b)*pA,A[3]=(D*s*B-n*f*B-D*e*r+I*f*r+n*e*y-I*s*y)*pA,A[4]=Y*pA,A[5]=(u*M*B-S*f*B+S*e*y-g*M*y-u*e*b+g*f*b)*pA,A[6]=(S*s*B-E*M*B-S*e*r+g*M*r+E*e*b-g*s*b)*pA,A[7]=(E*f*B-u*s*B+u*e*r-g*f*r-E*e*y+g*s*y)*pA,A[8]=q*pA,A[9]=(S*D*B-u*R*B-S*I*y+g*R*y+u*I*b-g*D*b)*pA,A[10]=(E*R*B-S*n*B+S*I*r-g*R*r-E*I*b+g*n*b)*pA,A[11]=(u*n*B-E*D*B-u*I*r+g*D*r+E*I*y-g*n*y)*pA,A[12]=Z*pA,A[13]=(u*R*e-S*D*e+S*I*f-g*R*f-u*I*M+g*D*M)*pA,A[14]=(S*n*e-E*R*e-S*I*s+g*R*s+E*I*M-g*n*M)*pA,A[15]=(E*D*e-u*n*e+u*I*s-g*D*s-E*I*f+g*n*f)*pA,this}scale(A){const g=this.elements,I=A.x,e=A.y,B=A.z;return g[0]*=I,g[4]*=e,g[8]*=B,g[1]*=I,g[5]*=e,g[9]*=B,g[2]*=I,g[6]*=e,g[10]*=B,g[3]*=I,g[7]*=e,g[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],I=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],e=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,I,e))}makeTranslation(A,g,I){return this.set(1,0,0,A,0,1,0,g,0,0,1,I,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),I=Math.sin(A);return this.set(1,0,0,0,0,g,-I,0,0,I,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,0,I,0,0,1,0,0,-I,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,-I,0,0,I,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const I=Math.cos(g),e=Math.sin(g),B=1-I,E=A.x,n=A.y,s=A.z,r=B*E,u=B*n;return this.set(r*E+I,r*n-e*s,r*s+e*n,0,r*n+e*s,u*n+I,u*s-e*E,0,r*s-e*n,u*s+e*E,B*s*s+I,0,0,0,0,1),this}makeScale(A,g,I){return this.set(A,0,0,0,0,g,0,0,0,0,I,0,0,0,0,1),this}makeShear(A,g,I,e,B,E){return this.set(1,I,B,0,A,1,E,0,g,e,1,0,0,0,0,1),this}compose(A,g,I){const e=this.elements,B=g._x,E=g._y,n=g._z,s=g._w,r=B+B,u=E+E,D=n+n,f=B*r,y=B*u,S=B*D,R=E*u,M=E*D,b=n*D,T=s*r,Y=s*u,q=s*D,Z=I.x,CA=I.y,pA=I.z;return e[0]=(1-(R+b))*Z,e[1]=(y+q)*Z,e[2]=(S-Y)*Z,e[3]=0,e[4]=(y-q)*CA,e[5]=(1-(f+b))*CA,e[6]=(M+T)*CA,e[7]=0,e[8]=(S+Y)*pA,e[9]=(M-T)*pA,e[10]=(1-(f+R))*pA,e[11]=0,e[12]=A.x,e[13]=A.y,e[14]=A.z,e[15]=1,this}decompose(A,g,I){const e=this.elements;let B=UB.set(e[0],e[1],e[2]).length();const E=UB.set(e[4],e[5],e[6]).length(),n=UB.set(e[8],e[9],e[10]).length();this.determinant()<0&&(B=-B),A.x=e[12],A.y=e[13],A.z=e[14],ii.copy(this);const r=1/B,u=1/E,D=1/n;return ii.elements[0]*=r,ii.elements[1]*=r,ii.elements[2]*=r,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=D,ii.elements[9]*=D,ii.elements[10]*=D,g.setFromRotationMatrix(ii),I.x=B,I.y=E,I.z=n,this}makePerspective(A,g,I,e,B,E){const n=this.elements,s=2*B/(g-A),r=2*B/(I-e),u=(g+A)/(g-A),D=(I+e)/(I-e),f=-(E+B)/(E-B),y=-2*E*B/(E-B);return n[0]=s,n[4]=0,n[8]=u,n[12]=0,n[1]=0,n[5]=r,n[9]=D,n[13]=0,n[2]=0,n[6]=0,n[10]=f,n[14]=y,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(A,g,I,e,B,E){const n=this.elements,s=1/(g-A),r=1/(I-e),u=1/(E-B),D=(g+A)*s,f=(I+e)*r,y=(E+B)*u;return n[0]=2*s,n[4]=0,n[8]=0,n[12]=-D,n[1]=0,n[5]=2*r,n[9]=0,n[13]=-f,n[2]=0,n[6]=0,n[10]=-2*u,n[14]=-y,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(A){const g=this.elements,I=A.elements;for(let e=0;e<16;e++)if(g[e]!==I[e])return!1;return!0}fromArray(A,g=0){for(let I=0;I<16;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A[g+9]=I[9],A[g+10]=I[10],A[g+11]=I[11],A[g+12]=I[12],A[g+13]=I[13],A[g+14]=I[14],A[g+15]=I[15],A}}const UB=new BA,ii=new qt,ps=new BA(0,0,0),CC=new BA(1,1,1),ai=new BA,GQ=new BA,De=new BA,Ri=new qt,xE=new $I;class kB{constructor(A=0,g=0,I=0,e=kB.DefaultOrder){this.isEuler=!0,this._x=A,this._y=g,this._z=I,this._order=e}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,I,e=this._order){return this._x=A,this._y=g,this._z=I,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,I=!0){const e=A.elements,B=e[0],E=e[4],n=e[8],s=e[1],r=e[5],u=e[9],D=e[2],f=e[6],y=e[10];switch(g){case"XYZ":this._y=Math.asin(zI(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-u,y),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(f,r),this._z=0);break;case"YXZ":this._x=Math.asin(-zI(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(n,y),this._z=Math.atan2(s,r)):(this._y=Math.atan2(-D,B),this._z=0);break;case"ZXY":this._x=Math.asin(zI(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-D,y),this._z=Math.atan2(-E,r)):(this._y=0,this._z=Math.atan2(s,B));break;case"ZYX":this._y=Math.asin(-zI(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(f,y),this._z=Math.atan2(s,B)):(this._x=0,this._z=Math.atan2(-E,r));break;case"YZX":this._z=Math.asin(zI(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,r),this._y=Math.atan2(-D,B)):(this._x=0,this._y=Math.atan2(n,y));break;case"XZY":this._z=Math.asin(-zI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(f,r),this._y=Math.atan2(n,B)):(this._x=Math.atan2(-u,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,I===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,I){return Ri.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ri,g,I)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return xE.setFromEuler(this),this.setFromQuaternion(xE,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}kB.DefaultOrder="XYZ",kB.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ri{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let EB=0;const Ti=new BA,LB=new $I,Gi=new qt,a=new BA,l=new BA,p=new BA,k=new $I,_=new BA(1,0,0),$=new BA(0,1,0),hA=new BA(0,0,1),DA={type:"added"},KA={type:"removed"};class bA extends te{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EB++}),this.uuid=Le(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bA.DefaultUp.clone();const A=new BA,g=new kB,I=new $I,e=new BA(1,1,1);function B(){I.setFromEuler(g,!1)}function E(){g.setFromQuaternion(I,void 0,!1)}g._onChange(B),I._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:I},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new qt},normalMatrix:{value:new xe}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=bA.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bA.DefaultMatrixWorldAutoUpdate,this.layers=new ri,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return LB.setFromAxisAngle(A,g),this.quaternion.multiply(LB),this}rotateOnWorldAxis(A,g){return LB.setFromAxisAngle(A,g),this.quaternion.premultiply(LB),this}rotateX(A){return this.rotateOnAxis(_,A)}rotateY(A){return this.rotateOnAxis($,A)}rotateZ(A){return this.rotateOnAxis(hA,A)}translateOnAxis(A,g){return Ti.copy(A).applyQuaternion(this.quaternion),this.position.add(Ti.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis(_,A)}translateY(A){return this.translateOnAxis($,A)}translateZ(A){return this.translateOnAxis(hA,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(A,g,I){A.isVector3?a.copy(A):a.set(A,g,I);const e=this.parent;this.updateWorldMatrix(!0,!1),l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(l,a,this.up):Gi.lookAt(a,l,this.up),this.quaternion.setFromRotationMatrix(Gi),e&&(Gi.extractRotation(e.matrixWorld),LB.setFromRotationMatrix(Gi),this.quaternion.premultiply(LB.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(DA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.remove(arguments[I]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(KA)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const g=this.children[A];g.parent=null,g.dispatchEvent(KA)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Gi.multiply(A.parent.matrixWorld)),A.applyMatrix4(Gi),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let I=0,e=this.children.length;I<e;I++){const E=this.children[I].getObjectByProperty(A,g);if(E!==void 0)return E}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l,A,p),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l,k,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let I=0,e=g.length;I<e;I++)g[I].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let I=0,e=g.length;I<e;I++)g[I].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let I=0,e=g.length;I<e;I++){const B=g[I];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const I=this.parent;if(A===!0&&I!==null&&I.matrixWorldAutoUpdate===!0&&I.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const e=this.children;for(let B=0,E=e.length;B<E;B++){const n=e[B];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",I={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},I.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const e={};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON()));function B(n,s){return n[s.uuid]===void 0&&(n[s.uuid]=s.toJSON(A)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(e.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=B(A.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const s=n.shapes;if(Array.isArray(s))for(let r=0,u=s.length;r<u;r++){const D=s[r];B(A.shapes,D)}else B(A.shapes,s)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let s=0,r=this.material.length;s<r;s++)n.push(B(A.materials,this.material[s]));e.material=n}else e.material=B(A.materials,this.material);if(this.children.length>0){e.children=[];for(let n=0;n<this.children.length;n++)e.children.push(this.children[n].toJSON(A).object)}if(this.animations.length>0){e.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];e.animations.push(B(A.animations,s))}}if(g){const n=E(A.geometries),s=E(A.materials),r=E(A.textures),u=E(A.images),D=E(A.shapes),f=E(A.skeletons),y=E(A.animations),S=E(A.nodes);n.length>0&&(I.geometries=n),s.length>0&&(I.materials=s),r.length>0&&(I.textures=r),u.length>0&&(I.images=u),D.length>0&&(I.shapes=D),f.length>0&&(I.skeletons=f),y.length>0&&(I.animations=y),S.length>0&&(I.nodes=S)}return I.object=e,I;function E(n){const s=[];for(const r in n){const u=n[r];delete u.metadata,s.push(u)}return s}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let I=0;I<A.children.length;I++){const e=A.children[I];this.add(e.clone())}return this}}bA.DefaultUp=new BA(0,1,0),bA.DefaultMatrixAutoUpdate=!0,bA.DefaultMatrixWorldAutoUpdate=!0;const Gg=new BA,Ng=new BA,Cg=new BA,xg=new BA,jg=new BA,EI=new BA,iI=new BA,hI=new BA,hg=new BA,ut=new BA;class dI{constructor(A=new BA,g=new BA,I=new BA){this.a=A,this.b=g,this.c=I}static getNormal(A,g,I,e){e.subVectors(I,g),Gg.subVectors(A,g),e.cross(Gg);const B=e.lengthSq();return B>0?e.multiplyScalar(1/Math.sqrt(B)):e.set(0,0,0)}static getBarycoord(A,g,I,e,B){Gg.subVectors(e,g),Ng.subVectors(I,g),Cg.subVectors(A,g);const E=Gg.dot(Gg),n=Gg.dot(Ng),s=Gg.dot(Cg),r=Ng.dot(Ng),u=Ng.dot(Cg),D=E*r-n*n;if(D===0)return B.set(-2,-1,-1);const f=1/D,y=(r*s-n*u)*f,S=(E*u-n*s)*f;return B.set(1-y-S,S,y)}static containsPoint(A,g,I,e){return this.getBarycoord(A,g,I,e,xg),xg.x>=0&&xg.y>=0&&xg.x+xg.y<=1}static getUV(A,g,I,e,B,E,n,s){return this.getBarycoord(A,g,I,e,xg),s.set(0,0),s.addScaledVector(B,xg.x),s.addScaledVector(E,xg.y),s.addScaledVector(n,xg.z),s}static isFrontFacing(A,g,I,e){return Gg.subVectors(I,g),Ng.subVectors(A,g),Gg.cross(Ng).dot(e)<0}set(A,g,I){return this.a.copy(A),this.b.copy(g),this.c.copy(I),this}setFromPointsAndIndices(A,g,I,e){return this.a.copy(A[g]),this.b.copy(A[I]),this.c.copy(A[e]),this}setFromAttributeAndIndices(A,g,I,e){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,I),this.c.fromBufferAttribute(A,e),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Gg.subVectors(this.c,this.b),Ng.subVectors(this.a,this.b),Gg.cross(Ng).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return dI.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return dI.getBarycoord(A,this.a,this.b,this.c,g)}getUV(A,g,I,e,B){return dI.getUV(A,this.a,this.b,this.c,g,I,e,B)}containsPoint(A){return dI.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return dI.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const I=this.a,e=this.b,B=this.c;let E,n;jg.subVectors(e,I),EI.subVectors(B,I),hI.subVectors(A,I);const s=jg.dot(hI),r=EI.dot(hI);if(s<=0&&r<=0)return g.copy(I);hg.subVectors(A,e);const u=jg.dot(hg),D=EI.dot(hg);if(u>=0&&D<=u)return g.copy(e);const f=s*D-u*r;if(f<=0&&s>=0&&u<=0)return E=s/(s-u),g.copy(I).addScaledVector(jg,E);ut.subVectors(A,B);const y=jg.dot(ut),S=EI.dot(ut);if(S>=0&&y<=S)return g.copy(B);const R=y*r-s*S;if(R<=0&&r>=0&&S<=0)return n=r/(r-S),g.copy(I).addScaledVector(EI,n);const M=u*S-y*D;if(M<=0&&D-u>=0&&y-S>=0)return iI.subVectors(B,e),n=(D-u)/(D-u+(y-S)),g.copy(e).addScaledVector(iI,n);const b=1/(M+R+f);return E=R*b,n=f*b,g.copy(I).addScaledVector(jg,E).addScaledVector(EI,n)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let JI=0;class GI extends te{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JI++}),this.uuid=Le(),this.name="",this.type="Material",this.blending=J,this.side=x,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kA,this.blendDst=JA,this.blendEquation=cA,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yA,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=MC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const I=A[g];if(I===void 0){console.warn("THREE.Material: '"+g+"' parameter is undefined.");continue}const e=this[g];if(e===void 0){console.warn("THREE."+this.type+": '"+g+"' is not a property of this material.");continue}e&&e.isColor?e.set(I):e&&e.isVector3&&I&&I.isVector3?e.copy(I):this[g]=I}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const I={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),this.color&&this.color.isColor&&(I.color=this.color.getHex()),this.roughness!==void 0&&(I.roughness=this.roughness),this.metalness!==void 0&&(I.metalness=this.metalness),this.sheen!==void 0&&(I.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(I.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(I.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(I.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(I.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(I.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(I.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(I.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(I.shininess=this.shininess),this.clearcoat!==void 0&&(I.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(I.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(I.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(I.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(I.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,I.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(I.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(I.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(I.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(I.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(I.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(I.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(I.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(I.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(I.lightMap=this.lightMap.toJSON(A).uuid,I.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(I.aoMap=this.aoMap.toJSON(A).uuid,I.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(I.bumpMap=this.bumpMap.toJSON(A).uuid,I.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(I.normalMap=this.normalMap.toJSON(A).uuid,I.normalMapType=this.normalMapType,I.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(I.displacementMap=this.displacementMap.toJSON(A).uuid,I.displacementScale=this.displacementScale,I.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(I.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(I.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(I.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(I.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(I.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(I.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(I.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(I.combine=this.combine)),this.envMapIntensity!==void 0&&(I.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(I.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(I.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(I.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(I.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(I.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(I.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(I.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(I.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(I.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(I.size=this.size),this.shadowSide!==null&&(I.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(I.sizeAttenuation=this.sizeAttenuation),this.blending!==J&&(I.blending=this.blending),this.side!==x&&(I.side=this.side),this.vertexColors&&(I.vertexColors=!0),this.opacity<1&&(I.opacity=this.opacity),this.transparent===!0&&(I.transparent=this.transparent),I.depthFunc=this.depthFunc,I.depthTest=this.depthTest,I.depthWrite=this.depthWrite,I.colorWrite=this.colorWrite,I.stencilWrite=this.stencilWrite,I.stencilWriteMask=this.stencilWriteMask,I.stencilFunc=this.stencilFunc,I.stencilRef=this.stencilRef,I.stencilFuncMask=this.stencilFuncMask,I.stencilFail=this.stencilFail,I.stencilZFail=this.stencilZFail,I.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(I.rotation=this.rotation),this.polygonOffset===!0&&(I.polygonOffset=!0),this.polygonOffsetFactor!==0&&(I.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(I.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(I.linewidth=this.linewidth),this.dashSize!==void 0&&(I.dashSize=this.dashSize),this.gapSize!==void 0&&(I.gapSize=this.gapSize),this.scale!==void 0&&(I.scale=this.scale),this.dithering===!0&&(I.dithering=!0),this.alphaTest>0&&(I.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(I.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(I.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(I.wireframe=this.wireframe),this.wireframeLinewidth>1&&(I.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(I.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(I.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(I.flatShading=this.flatShading),this.visible===!1&&(I.visible=!1),this.toneMapped===!1&&(I.toneMapped=!1),this.fog===!1&&(I.fog=!1),JSON.stringify(this.userData)!=="{}"&&(I.userData=this.userData);function e(B){const E=[];for(const n in B){const s=B[n];delete s.metadata,E.push(s)}return E}if(g){const B=e(A.textures),E=e(A.images);B.length>0&&(I.textures=B),E.length>0&&(I.images=E)}return I}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let I=null;if(g!==null){const e=g.length;I=new Array(e);for(let B=0;B!==e;++B)I[B]=g[B].clone()}return this.clippingPlanes=I,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class vI extends GI{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Ce=new BA,xB=new pg;class AI{constructor(A,g,I){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=I===!0,this.usage=ji,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,g,I){A*=this.itemSize,I*=g.itemSize;for(let e=0,B=this.itemSize;e<B;e++)this.array[A+e]=g.array[I+e];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,I=this.count;g<I;g++)xB.fromBufferAttribute(this,g),xB.applyMatrix3(A),this.setXY(g,xB.x,xB.y);else if(this.itemSize===3)for(let g=0,I=this.count;g<I;g++)Ce.fromBufferAttribute(this,g),Ce.applyMatrix3(A),this.setXYZ(g,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(A){for(let g=0,I=this.count;g<I;g++)Ce.fromBufferAttribute(this,g),Ce.applyMatrix4(A),this.setXYZ(g,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(A){for(let g=0,I=this.count;g<I;g++)Ce.fromBufferAttribute(this,g),Ce.applyNormalMatrix(A),this.setXYZ(g,Ce.x,Ce.y,Ce.z);return this}transformDirection(A){for(let g=0,I=this.count;g<I;g++)Ce.fromBufferAttribute(this,g),Ce.transformDirection(A),this.setXYZ(g,Ce.x,Ce.y,Ce.z);return this}set(A,g=0){return this.array.set(A,g),this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=Ii(g,this.array)),g}setX(A,g){return this.normalized&&(g=NI(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=Ii(g,this.array)),g}setY(A,g){return this.normalized&&(g=NI(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=Ii(g,this.array)),g}setZ(A,g){return this.normalized&&(g=NI(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=Ii(g,this.array)),g}setW(A,g){return this.normalized&&(g=NI(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,I){return A*=this.itemSize,this.normalized&&(g=NI(g,this.array),I=NI(I,this.array)),this.array[A+0]=g,this.array[A+1]=I,this}setXYZ(A,g,I,e){return A*=this.itemSize,this.normalized&&(g=NI(g,this.array),I=NI(I,this.array),e=NI(e,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=e,this}setXYZW(A,g,I,e,B){return A*=this.itemSize,this.normalized&&(g=NI(g,this.array),I=NI(I,this.array),e=NI(e,this.array),B=NI(B,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=e,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==ji&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ys extends AI{constructor(A,g,I){super(new Int8Array(A),g,I)}}class JE extends AI{constructor(A,g,I){super(new Uint8Array(A),g,I)}}class Vn extends AI{constructor(A,g,I){super(new Uint8ClampedArray(A),g,I)}}class Sd extends AI{constructor(A,g,I){super(new Int16Array(A),g,I)}}class Ms extends AI{constructor(A,g,I){super(new Uint16Array(A),g,I)}}class Fd extends AI{constructor(A,g,I){super(new Int32Array(A),g,I)}}class ms extends AI{constructor(A,g,I){super(new Uint32Array(A),g,I)}}class Nd extends AI{constructor(A,g,I){super(new Uint16Array(A),g,I),this.isFloat16BufferAttribute=!0}}class wt extends AI{constructor(A,g,I){super(new Float32Array(A),g,I)}}class Ud extends AI{constructor(A,g,I){super(new Float64Array(A),g,I)}}let kd=0;const Si=new qt,Rs=new bA,SQ=new BA,hi=new ue,bE=new ue,Ge=new BA;class nI extends te{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Le(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(RC(A)?ms:Ms)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,I=0){this.groups.push({start:A,count:g,materialIndex:I})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const I=this.attributes.normal;if(I!==void 0){const B=new xe().getNormalMatrix(A);I.applyNormalMatrix(B),I.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(A),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Si.makeRotationFromQuaternion(A),this.applyMatrix4(Si),this}rotateX(A){return Si.makeRotationX(A),this.applyMatrix4(Si),this}rotateY(A){return Si.makeRotationY(A),this.applyMatrix4(Si),this}rotateZ(A){return Si.makeRotationZ(A),this.applyMatrix4(Si),this}translate(A,g,I){return Si.makeTranslation(A,g,I),this.applyMatrix4(Si),this}scale(A,g,I){return Si.makeScale(A,g,I),this.applyMatrix4(Si),this}lookAt(A){return Rs.lookAt(A),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(SQ).negate(),this.translate(SQ.x,SQ.y,SQ.z),this}setFromPoints(A){const g=[];for(let I=0,e=A.length;I<e;I++){const B=A[I];g.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new wt(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ue);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new BA(-1/0,-1/0,-1/0),new BA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let I=0,e=g.length;I<e;I++){const B=g[I];hi.setFromBufferAttribute(B),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new NB);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new BA,1/0);return}if(A){const I=this.boundingSphere.center;if(hi.setFromBufferAttribute(A),g)for(let B=0,E=g.length;B<E;B++){const n=g[B];bE.setFromBufferAttribute(n),this.morphTargetsRelative?(Ge.addVectors(hi.min,bE.min),hi.expandByPoint(Ge),Ge.addVectors(hi.max,bE.max),hi.expandByPoint(Ge)):(hi.expandByPoint(bE.min),hi.expandByPoint(bE.max))}hi.getCenter(I);let e=0;for(let B=0,E=A.count;B<E;B++)Ge.fromBufferAttribute(A,B),e=Math.max(e,I.distanceToSquared(Ge));if(g)for(let B=0,E=g.length;B<E;B++){const n=g[B],s=this.morphTargetsRelative;for(let r=0,u=n.count;r<u;r++)Ge.fromBufferAttribute(n,r),s&&(SQ.fromBufferAttribute(A,r),Ge.add(SQ)),e=Math.max(e,I.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const I=A.array,e=g.position.array,B=g.normal.array,E=g.uv.array,n=e.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new AI(new Float32Array(4*n),4));const s=this.getAttribute("tangent").array,r=[],u=[];for(let RA=0;RA<n;RA++)r[RA]=new BA,u[RA]=new BA;const D=new BA,f=new BA,y=new BA,S=new pg,R=new pg,M=new pg,b=new BA,T=new BA;function Y(RA,sg,vg){D.fromArray(e,RA*3),f.fromArray(e,sg*3),y.fromArray(e,vg*3),S.fromArray(E,RA*2),R.fromArray(E,sg*2),M.fromArray(E,vg*2),f.sub(D),y.sub(D),R.sub(S),M.sub(S);const Ig=1/(R.x*M.y-M.x*R.y);isFinite(Ig)&&(b.copy(f).multiplyScalar(M.y).addScaledVector(y,-R.y).multiplyScalar(Ig),T.copy(y).multiplyScalar(R.x).addScaledVector(f,-M.x).multiplyScalar(Ig),r[RA].add(b),r[sg].add(b),r[vg].add(b),u[RA].add(T),u[sg].add(T),u[vg].add(T))}let q=this.groups;q.length===0&&(q=[{start:0,count:I.length}]);for(let RA=0,sg=q.length;RA<sg;++RA){const vg=q[RA],Ig=vg.start,HA=vg.count;for(let lg=Ig,Fg=Ig+HA;lg<Fg;lg+=3)Y(I[lg+0],I[lg+1],I[lg+2])}const Z=new BA,CA=new BA,pA=new BA,W=new BA;function rA(RA){pA.fromArray(B,RA*3),W.copy(pA);const sg=r[RA];Z.copy(sg),Z.sub(pA.multiplyScalar(pA.dot(sg))).normalize(),CA.crossVectors(W,sg);const Ig=CA.dot(u[RA])<0?-1:1;s[RA*4]=Z.x,s[RA*4+1]=Z.y,s[RA*4+2]=Z.z,s[RA*4+3]=Ig}for(let RA=0,sg=q.length;RA<sg;++RA){const vg=q[RA],Ig=vg.start,HA=vg.count;for(let lg=Ig,Fg=Ig+HA;lg<Fg;lg+=3)rA(I[lg+0]),rA(I[lg+1]),rA(I[lg+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let I=this.getAttribute("normal");if(I===void 0)I=new AI(new Float32Array(g.count*3),3),this.setAttribute("normal",I);else for(let f=0,y=I.count;f<y;f++)I.setXYZ(f,0,0,0);const e=new BA,B=new BA,E=new BA,n=new BA,s=new BA,r=new BA,u=new BA,D=new BA;if(A)for(let f=0,y=A.count;f<y;f+=3){const S=A.getX(f+0),R=A.getX(f+1),M=A.getX(f+2);e.fromBufferAttribute(g,S),B.fromBufferAttribute(g,R),E.fromBufferAttribute(g,M),u.subVectors(E,B),D.subVectors(e,B),u.cross(D),n.fromBufferAttribute(I,S),s.fromBufferAttribute(I,R),r.fromBufferAttribute(I,M),n.add(u),s.add(u),r.add(u),I.setXYZ(S,n.x,n.y,n.z),I.setXYZ(R,s.x,s.y,s.z),I.setXYZ(M,r.x,r.y,r.z)}else for(let f=0,y=g.count;f<y;f+=3)e.fromBufferAttribute(g,f+0),B.fromBufferAttribute(g,f+1),E.fromBufferAttribute(g,f+2),u.subVectors(E,B),D.subVectors(e,B),u.cross(D),I.setXYZ(f+0,u.x,u.y,u.z),I.setXYZ(f+1,u.x,u.y,u.z),I.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),I.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let g=0,I=A.count;g<I;g++)Ge.fromBufferAttribute(A,g),Ge.normalize(),A.setXYZ(g,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function A(n,s){const r=n.array,u=n.itemSize,D=n.normalized,f=new r.constructor(s.length*u);let y=0,S=0;for(let R=0,M=s.length;R<M;R++){n.isInterleavedBufferAttribute?y=s[R]*n.data.stride+n.offset:y=s[R]*u;for(let b=0;b<u;b++)f[S++]=r[y++]}return new AI(f,u,D)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new nI,I=this.index.array,e=this.attributes;for(const n in e){const s=e[n],r=A(s,I);g.setAttribute(n,r)}const B=this.morphAttributes;for(const n in B){const s=[],r=B[n];for(let u=0,D=r.length;u<D;u++){const f=r[u],y=A(f,I);s.push(y)}g.morphAttributes[n]=s}g.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let n=0,s=E.length;n<s;n++){const r=E[n];g.addGroup(r.start,r.count,r.materialIndex)}return g}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const s=this.parameters;for(const r in s)s[r]!==void 0&&(A[r]=s[r]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const I=this.attributes;for(const s in I){const r=I[s];A.data.attributes[s]=r.toJSON(A.data)}const e={};let B=!1;for(const s in this.morphAttributes){const r=this.morphAttributes[s],u=[];for(let D=0,f=r.length;D<f;D++){const y=r[D];u.push(y.toJSON(A.data))}u.length>0&&(e[s]=u,B=!0)}B&&(A.data.morphAttributes=e,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const n=this.boundingSphere;return n!==null&&(A.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const I=A.index;I!==null&&this.setIndex(I.clone(g));const e=A.attributes;for(const r in e){const u=e[r];this.setAttribute(r,u.clone(g))}const B=A.morphAttributes;for(const r in B){const u=[],D=B[r];for(let f=0,y=D.length;f<y;f++)u.push(D[f].clone(g));this.morphAttributes[r]=u}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let r=0,u=E.length;r<u;r++){const D=E[r];this.addGroup(D.start,D.count,D.materialIndex)}const n=A.boundingBox;n!==null&&(this.boundingBox=n.clone());const s=A.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pr=new qt,FQ=new BC,Gs=new NB,QC=new BA,EC=new BA,nC=new BA,Ss=new BA,Fs=new BA,Ns=new BA,Zn=new BA,Xn=new BA,zn=new BA,jn=new pg,$n=new pg,Ao=new pg,Us=new BA,go=new BA;class Je extends bA{constructor(A=new nI,g=new vI){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,I=Object.keys(g);if(I.length>0){const e=g[I[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=e.length;B<E;B++){const n=e[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=B}}}}raycast(A,g){const I=this.geometry,e=this.material,B=this.matrixWorld;if(e===void 0||(I.boundingSphere===null&&I.computeBoundingSphere(),Gs.copy(I.boundingSphere),Gs.applyMatrix4(B),A.ray.intersectsSphere(Gs)===!1)||(pr.copy(B).invert(),FQ.copy(A.ray).applyMatrix4(pr),I.boundingBox!==null&&FQ.intersectsBox(I.boundingBox)===!1))return;let E;const n=I.index,s=I.attributes.position,r=I.morphAttributes.position,u=I.morphTargetsRelative,D=I.attributes.uv,f=I.attributes.uv2,y=I.groups,S=I.drawRange;if(n!==null)if(Array.isArray(e))for(let R=0,M=y.length;R<M;R++){const b=y[R],T=e[b.materialIndex],Y=Math.max(b.start,S.start),q=Math.min(n.count,Math.min(b.start+b.count,S.start+S.count));for(let Z=Y,CA=q;Z<CA;Z+=3){const pA=n.getX(Z),W=n.getX(Z+1),rA=n.getX(Z+2);E=to(this,T,A,FQ,s,r,u,D,f,pA,W,rA),E&&(E.faceIndex=Math.floor(Z/3),E.face.materialIndex=b.materialIndex,g.push(E))}}else{const R=Math.max(0,S.start),M=Math.min(n.count,S.start+S.count);for(let b=R,T=M;b<T;b+=3){const Y=n.getX(b),q=n.getX(b+1),Z=n.getX(b+2);E=to(this,e,A,FQ,s,r,u,D,f,Y,q,Z),E&&(E.faceIndex=Math.floor(b/3),g.push(E))}}else if(s!==void 0)if(Array.isArray(e))for(let R=0,M=y.length;R<M;R++){const b=y[R],T=e[b.materialIndex],Y=Math.max(b.start,S.start),q=Math.min(s.count,Math.min(b.start+b.count,S.start+S.count));for(let Z=Y,CA=q;Z<CA;Z+=3){const pA=Z,W=Z+1,rA=Z+2;E=to(this,T,A,FQ,s,r,u,D,f,pA,W,rA),E&&(E.faceIndex=Math.floor(Z/3),E.face.materialIndex=b.materialIndex,g.push(E))}}else{const R=Math.max(0,S.start),M=Math.min(s.count,S.start+S.count);for(let b=R,T=M;b<T;b+=3){const Y=b,q=b+1,Z=b+2;E=to(this,e,A,FQ,s,r,u,D,f,Y,q,Z),E&&(E.faceIndex=Math.floor(b/3),g.push(E))}}}}function Ld(C,A,g,I,e,B,E,n){let s;if(A.side===L?s=I.intersectTriangle(E,B,e,!0,n):s=I.intersectTriangle(e,B,E,A.side!==H,n),s===null)return null;go.copy(n),go.applyMatrix4(C.matrixWorld);const r=g.ray.origin.distanceTo(go);return r<g.near||r>g.far?null:{distance:r,point:go.clone(),object:C}}function to(C,A,g,I,e,B,E,n,s,r,u,D){QC.fromBufferAttribute(e,r),EC.fromBufferAttribute(e,u),nC.fromBufferAttribute(e,D);const f=C.morphTargetInfluences;if(B&&f){Zn.set(0,0,0),Xn.set(0,0,0),zn.set(0,0,0);for(let S=0,R=B.length;S<R;S++){const M=f[S],b=B[S];M!==0&&(Ss.fromBufferAttribute(b,r),Fs.fromBufferAttribute(b,u),Ns.fromBufferAttribute(b,D),E?(Zn.addScaledVector(Ss,M),Xn.addScaledVector(Fs,M),zn.addScaledVector(Ns,M)):(Zn.addScaledVector(Ss.sub(QC),M),Xn.addScaledVector(Fs.sub(EC),M),zn.addScaledVector(Ns.sub(nC),M)))}QC.add(Zn),EC.add(Xn),nC.add(zn)}C.isSkinnedMesh&&(C.boneTransform(r,QC),C.boneTransform(u,EC),C.boneTransform(D,nC));const y=Ld(C,A,g,I,QC,EC,nC,Us);if(y){n&&(jn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,u),Ao.fromBufferAttribute(n,D),y.uv=dI.getUV(Us,QC,EC,nC,jn,$n,Ao,new pg)),s&&(jn.fromBufferAttribute(s,r),$n.fromBufferAttribute(s,u),Ao.fromBufferAttribute(s,D),y.uv2=dI.getUV(Us,QC,EC,nC,jn,$n,Ao,new pg));const S={a:r,b:u,c:D,normal:new BA,materialIndex:0};dI.getNormal(QC,EC,nC,S.normal),y.face=S}return y}class oC extends nI{constructor(A=1,g=1,I=1,e=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:I,widthSegments:e,heightSegments:B,depthSegments:E};const n=this;e=Math.floor(e),B=Math.floor(B),E=Math.floor(E);const s=[],r=[],u=[],D=[];let f=0,y=0;S("z","y","x",-1,-1,I,g,A,E,B,0),S("z","y","x",1,-1,I,g,-A,E,B,1),S("x","z","y",1,1,A,I,g,e,E,2),S("x","z","y",1,-1,A,I,-g,e,E,3),S("x","y","z",1,-1,A,g,I,e,B,4),S("x","y","z",-1,-1,A,g,-I,e,B,5),this.setIndex(s),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(D,2));function S(R,M,b,T,Y,q,Z,CA,pA,W,rA){const RA=q/pA,sg=Z/W,vg=q/2,Ig=Z/2,HA=CA/2,lg=pA+1,Fg=W+1;let Yg=0,ug=0;const XA=new BA;for(let ig=0;ig<Fg;ig++){const Hg=ig*sg-Ig;for(let qg=0;qg<lg;qg++){const Tg=qg*RA-vg;XA[R]=Tg*T,XA[M]=Hg*Y,XA[b]=HA,r.push(XA.x,XA.y,XA.z),XA[R]=0,XA[M]=0,XA[b]=CA>0?1:-1,u.push(XA.x,XA.y,XA.z),D.push(qg/pA),D.push(1-ig/W),Yg+=1}}for(let ig=0;ig<W;ig++)for(let Hg=0;Hg<pA;Hg++){const qg=f+Hg+lg*ig,Tg=f+Hg+lg*(ig+1),pt=f+(Hg+1)+lg*(ig+1),Ot=f+(Hg+1)+lg*ig;s.push(qg,Tg,Ot),s.push(Tg,pt,Ot),ug+=6}n.addGroup(y,ug,rA),y+=ug,f+=Yg}}static fromJSON(A){return new oC(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function NQ(C){const A={};for(const g in C){A[g]={};for(const I in C[g]){const e=C[g][I];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?A[g][I]=e.clone():Array.isArray(e)?A[g][I]=e.slice():A[g][I]=e}}return A}function Oe(C){const A={};for(let g=0;g<C.length;g++){const I=NQ(C[g]);for(const e in I)A[e]=I[e]}return A}function xd(C){const A=[];for(let g=0;g<C.length;g++)A.push(C[g].clone());return A}const yr={clone:NQ,merge:Oe};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nB extends GI{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=NQ(A.uniforms),this.uniformsGroups=xd(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const e in this.uniforms){const E=this.uniforms[e].value;E&&E.isTexture?g.uniforms[e]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?g.uniforms[e]={type:"c",value:E.getHex()}:E&&E.isVector2?g.uniforms[e]={type:"v2",value:E.toArray()}:E&&E.isVector3?g.uniforms[e]={type:"v3",value:E.toArray()}:E&&E.isVector4?g.uniforms[e]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?g.uniforms[e]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?g.uniforms[e]={type:"m4",value:E.toArray()}:g.uniforms[e]={value:E}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader;const I={};for(const e in this.extensions)this.extensions[e]===!0&&(I[e]=!0);return Object.keys(I).length>0&&(g.extensions=I),g}}class Io extends bA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class be extends Io{constructor(A=50,g=1,I=.1,e=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=I,this.far=e,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=$B*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(_I*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return $B*2*Math.atan(Math.tan(_I*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,g,I,e,B,E){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=e,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(_I*.5*this.fov)/this.zoom,I=2*g,e=this.aspect*I,B=-.5*e;const E=this.view;if(this.view!==null&&this.view.enabled){const s=E.fullWidth,r=E.fullHeight;B+=E.offsetX*e/s,g-=E.offsetY*I/r,e*=E.width/s,I*=E.height/r}const n=this.filmOffset;n!==0&&(B+=A*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+e,g,g-I,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const UQ=90,kQ=1;class Mr extends bA{constructor(A,g,I){super(),this.type="CubeCamera",this.renderTarget=I;const e=new be(UQ,kQ,A,g);e.layers=this.layers,e.up.set(0,-1,0),e.lookAt(new BA(1,0,0)),this.add(e);const B=new be(UQ,kQ,A,g);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new BA(-1,0,0)),this.add(B);const E=new be(UQ,kQ,A,g);E.layers=this.layers,E.up.set(0,0,1),E.lookAt(new BA(0,1,0)),this.add(E);const n=new be(UQ,kQ,A,g);n.layers=this.layers,n.up.set(0,0,-1),n.lookAt(new BA(0,-1,0)),this.add(n);const s=new be(UQ,kQ,A,g);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new BA(0,0,1)),this.add(s);const r=new be(UQ,kQ,A,g);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new BA(0,0,-1)),this.add(r)}update(A,g){this.parent===null&&this.updateMatrixWorld();const I=this.renderTarget,[e,B,E,n,s,r]=this.children,u=A.getRenderTarget(),D=A.toneMapping,f=A.xr.enabled;A.toneMapping=at,A.xr.enabled=!1;const y=I.texture.generateMipmaps;I.texture.generateMipmaps=!1,A.setRenderTarget(I,0),A.render(g,e),A.setRenderTarget(I,1),A.render(g,B),A.setRenderTarget(I,2),A.render(g,E),A.setRenderTarget(I,3),A.render(g,n),A.setRenderTarget(I,4),A.render(g,s),I.texture.generateMipmaps=y,A.setRenderTarget(I,5),A.render(g,r),A.setRenderTarget(u),A.toneMapping=D,A.xr.enabled=f,I.texture.needsPMREMUpdate=!0}}class KE extends KI{constructor(A,g,I,e,B,E,n,s,r,u){A=A!==void 0?A:[],g=g!==void 0?g:ct,super(A,g,I,e,B,E,n,s,r,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class mr extends Pe{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const I={width:A,height:A,depth:1},e=[I,I,I,I,I,I];this.texture=new KE(e,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Jg}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.encoding=g.encoding,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const I={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},e=new oC(5,5,5),B=new nB({name:"CubemapFromEquirect",uniforms:NQ(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,side:L,blending:AA});B.uniforms.tEquirect.value=g;const E=new Je(e,B),n=g.minFilter;return g.minFilter===rt&&(g.minFilter=Jg),new Mr(1,10,this).update(A,E),g.minFilter=n,E.geometry.dispose(),E.material.dispose(),this}clear(A,g,I,e){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(g,I,e);A.setRenderTarget(B)}}const ks=new BA,Kd=new BA,Yd=new xe;class sC{constructor(A=new BA(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,I,e){return this.normal.set(A,g,I),this.constant=e,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,I){const e=ks.subVectors(I,g).cross(Kd.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(e,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,g){const I=A.delta(ks),e=this.normal.dot(I);if(e===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/e;return B<0||B>1?null:g.copy(I).multiplyScalar(B).add(A.start)}intersectsLine(A){const g=this.distanceToPoint(A.start),I=this.distanceToPoint(A.end);return g<0&&I>0||I<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const I=g||Yd.getNormalMatrix(A),e=this.coplanarPoint(ks).applyMatrix4(A),B=this.normal.applyMatrix3(I).normalize();return this.constant=-e.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const LQ=new NB,eo=new BA;class io{constructor(A=new sC,g=new sC,I=new sC,e=new sC,B=new sC,E=new sC){this.planes=[A,g,I,e,B,E]}set(A,g,I,e,B,E){const n=this.planes;return n[0].copy(A),n[1].copy(g),n[2].copy(I),n[3].copy(e),n[4].copy(B),n[5].copy(E),this}copy(A){const g=this.planes;for(let I=0;I<6;I++)g[I].copy(A.planes[I]);return this}setFromProjectionMatrix(A){const g=this.planes,I=A.elements,e=I[0],B=I[1],E=I[2],n=I[3],s=I[4],r=I[5],u=I[6],D=I[7],f=I[8],y=I[9],S=I[10],R=I[11],M=I[12],b=I[13],T=I[14],Y=I[15];return g[0].setComponents(n-e,D-s,R-f,Y-M).normalize(),g[1].setComponents(n+e,D+s,R+f,Y+M).normalize(),g[2].setComponents(n+B,D+r,R+y,Y+b).normalize(),g[3].setComponents(n-B,D-r,R-y,Y-b).normalize(),g[4].setComponents(n-E,D-u,R-S,Y-T).normalize(),g[5].setComponents(n+E,D+u,R+S,Y+T).normalize(),this}intersectsObject(A){const g=A.geometry;return g.boundingSphere===null&&g.computeBoundingSphere(),LQ.copy(g.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(LQ)}intersectsSprite(A){return LQ.center.set(0,0,0),LQ.radius=.7071067811865476,LQ.applyMatrix4(A.matrixWorld),this.intersectsSphere(LQ)}intersectsSphere(A){const g=this.planes,I=A.center,e=-A.radius;for(let B=0;B<6;B++)if(g[B].distanceToPoint(I)<e)return!1;return!0}intersectsBox(A){const g=this.planes;for(let I=0;I<6;I++){const e=g[I];if(eo.x=e.normal.x>0?A.max.x:A.min.x,eo.y=e.normal.y>0?A.max.y:A.min.y,eo.z=e.normal.z>0?A.max.z:A.min.z,e.distanceToPoint(eo)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let I=0;I<6;I++)if(g[I].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rr(){let C=null,A=!1,g=null,I=null;function e(B,E){g(B,E),I=C.requestAnimationFrame(e)}return{start:function(){A!==!0&&g!==null&&(I=C.requestAnimationFrame(e),A=!0)},stop:function(){C.cancelAnimationFrame(I),A=!1},setAnimationLoop:function(B){g=B},setContext:function(B){C=B}}}function vd(C,A){const g=A.isWebGL2,I=new WeakMap;function e(r,u){const D=r.array,f=r.usage,y=C.createBuffer();C.bindBuffer(u,y),C.bufferData(u,D,f),r.onUploadCallback();let S;if(D instanceof Float32Array)S=C.FLOAT;else if(D instanceof Uint16Array)if(r.isFloat16BufferAttribute)if(g)S=C.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=C.UNSIGNED_SHORT;else if(D instanceof Int16Array)S=C.SHORT;else if(D instanceof Uint32Array)S=C.UNSIGNED_INT;else if(D instanceof Int32Array)S=C.INT;else if(D instanceof Int8Array)S=C.BYTE;else if(D instanceof Uint8Array)S=C.UNSIGNED_BYTE;else if(D instanceof Uint8ClampedArray)S=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+D);return{buffer:y,type:S,bytesPerElement:D.BYTES_PER_ELEMENT,version:r.version}}function B(r,u,D){const f=u.array,y=u.updateRange;C.bindBuffer(D,r),y.count===-1?C.bufferSubData(D,0,f):(g?C.bufferSubData(D,y.offset*f.BYTES_PER_ELEMENT,f,y.offset,y.count):C.bufferSubData(D,y.offset*f.BYTES_PER_ELEMENT,f.subarray(y.offset,y.offset+y.count)),y.count=-1)}function E(r){return r.isInterleavedBufferAttribute&&(r=r.data),I.get(r)}function n(r){r.isInterleavedBufferAttribute&&(r=r.data);const u=I.get(r);u&&(C.deleteBuffer(u.buffer),I.delete(r))}function s(r,u){if(r.isGLBufferAttribute){const f=I.get(r);(!f||f.version<r.version)&&I.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}r.isInterleavedBufferAttribute&&(r=r.data);const D=I.get(r);D===void 0?I.set(r,e(r,u)):D.version<r.version&&(B(D.buffer,r,u),D.version=r.version)}return{get:E,remove:n,update:s}}class xQ extends nI{constructor(A=1,g=1,I=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:I,heightSegments:e};const B=A/2,E=g/2,n=Math.floor(I),s=Math.floor(e),r=n+1,u=s+1,D=A/n,f=g/s,y=[],S=[],R=[],M=[];for(let b=0;b<u;b++){const T=b*f-E;for(let Y=0;Y<r;Y++){const q=Y*D-B;S.push(q,-T,0),R.push(0,0,1),M.push(Y/n),M.push(1-b/s)}}for(let b=0;b<s;b++)for(let T=0;T<n;T++){const Y=T+r*b,q=T+r*(b+1),Z=T+1+r*(b+1),CA=T+1+r*b;y.push(Y,q,CA),y.push(q,Z,CA)}this.setIndex(y),this.setAttribute("position",new wt(S,3)),this.setAttribute("normal",new wt(R,3)),this.setAttribute("uv",new wt(M,2))}static fromJSON(A){return new xQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od="vec3 transformed = vec3( position );",Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
		float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
		float x2 = x * x;
		float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
		return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,	0.0556434,
		-1.5371385,	1.8760108, -0.2040259,
		-0.4985314,	0.0415560,	1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,au="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,AD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gD=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ID=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,BD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,CD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,QD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ED=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
							f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
							f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DD=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ND=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,UD=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kD=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,LD=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,JD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,KD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BI={alphamap_fragment:Hd,alphamap_pars_fragment:qd,alphatest_fragment:Td,alphatest_pars_fragment:_d,aomap_fragment:Wd,aomap_pars_fragment:Pd,begin_vertex:Od,beginnormal_vertex:Vd,bsdfs:Zd,iridescence_fragment:Xd,bumpmap_pars_fragment:zd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Au,clipping_planes_vertex:gu,color_fragment:tu,color_pars_fragment:Iu,color_pars_vertex:eu,color_vertex:iu,common:Bu,cube_uv_reflection_fragment:Cu,defaultnormal_vertex:Qu,displacementmap_pars_vertex:Eu,displacementmap_vertex:nu,emissivemap_fragment:ou,emissivemap_pars_fragment:su,encodings_fragment:au,encodings_pars_fragment:ru,envmap_fragment:hu,envmap_common_pars_fragment:cu,envmap_pars_fragment:lu,envmap_pars_vertex:du,envmap_physical_pars_fragment:Fu,envmap_vertex:uu,fog_vertex:Du,fog_pars_vertex:fu,fog_fragment:wu,fog_pars_fragment:pu,gradientmap_pars_fragment:yu,lightmap_fragment:Mu,lightmap_pars_fragment:mu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Gu,lights_pars_begin:Su,lights_toon_fragment:Nu,lights_toon_pars_fragment:Uu,lights_phong_fragment:ku,lights_phong_pars_fragment:Lu,lights_physical_fragment:xu,lights_physical_pars_fragment:Ju,lights_fragment_begin:bu,lights_fragment_maps:Ku,lights_fragment_end:Yu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Tu,map_fragment:_u,map_pars_fragment:Wu,map_particle_fragment:Pu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Zu,morphcolor_vertex:Xu,morphnormal_vertex:zu,morphtarget_pars_vertex:ju,morphtarget_vertex:$u,normal_fragment_begin:AD,normal_fragment_maps:gD,normal_pars_fragment:tD,normal_pars_vertex:ID,normal_vertex:eD,normalmap_pars_fragment:iD,clearcoat_normal_fragment_begin:BD,clearcoat_normal_fragment_maps:CD,clearcoat_pars_fragment:QD,iridescence_pars_fragment:ED,output_fragment:nD,packing:oD,premultiplied_alpha_fragment:sD,project_vertex:aD,dithering_fragment:rD,dithering_pars_fragment:hD,roughnessmap_fragment:cD,roughnessmap_pars_fragment:lD,shadowmap_pars_fragment:dD,shadowmap_pars_vertex:uD,shadowmap_vertex:DD,shadowmask_pars_fragment:fD,skinbase_vertex:wD,skinning_pars_vertex:pD,skinning_vertex:yD,skinnormal_vertex:MD,specularmap_fragment:mD,specularmap_pars_fragment:RD,tonemapping_fragment:GD,tonemapping_pars_fragment:SD,transmission_fragment:FD,transmission_pars_fragment:ND,uv_pars_fragment:UD,uv_pars_vertex:kD,uv_vertex:LD,uv2_pars_fragment:xD,uv2_pars_vertex:JD,uv2_vertex:bD,worldpos_vertex:KD,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},At={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xe},uv2Transform:{value:new xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pg(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new pg(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}}},_i={basic:{uniforms:Oe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:BI.meshbasic_vert,fragmentShader:BI.meshbasic_frag},lambert:{uniforms:Oe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Et(0)}}]),vertexShader:BI.meshlambert_vert,fragmentShader:BI.meshlambert_frag},phong:{uniforms:Oe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:BI.meshphong_vert,fragmentShader:BI.meshphong_frag},standard:{uniforms:Oe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:BI.meshphysical_vert,fragmentShader:BI.meshphysical_frag},toon:{uniforms:Oe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Et(0)}}]),vertexShader:BI.meshtoon_vert,fragmentShader:BI.meshtoon_frag},matcap:{uniforms:Oe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:BI.meshmatcap_vert,fragmentShader:BI.meshmatcap_frag},points:{uniforms:Oe([At.points,At.fog]),vertexShader:BI.points_vert,fragmentShader:BI.points_frag},dashed:{uniforms:Oe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:BI.linedashed_vert,fragmentShader:BI.linedashed_frag},depth:{uniforms:Oe([At.common,At.displacementmap]),vertexShader:BI.depth_vert,fragmentShader:BI.depth_frag},normal:{uniforms:Oe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:BI.meshnormal_vert,fragmentShader:BI.meshnormal_frag},sprite:{uniforms:Oe([At.sprite,At.fog]),vertexShader:BI.sprite_vert,fragmentShader:BI.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null}},vertexShader:BI.background_vert,fragmentShader:BI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:BI.backgroundCube_vert,fragmentShader:BI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:BI.cube_vert,fragmentShader:BI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:BI.equirect_vert,fragmentShader:BI.equirect_frag},distanceRGBA:{uniforms:Oe([At.common,At.displacementmap,{referencePosition:{value:new BA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:BI.distanceRGBA_vert,fragmentShader:BI.distanceRGBA_frag},shadow:{uniforms:Oe([At.lights,At.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:BI.shadow_vert,fragmentShader:BI.shadow_frag}};_i.physical={uniforms:Oe([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pg(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:BI.meshphysical_vert,fragmentShader:BI.meshphysical_frag};function YD(C,A,g,I,e,B,E){const n=new Et(0);let s=B===!0?0:1,r,u,D=null,f=0,y=null;function S(M,b){let T=!1,Y=b.isScene===!0?b.background:null;Y&&Y.isTexture&&(Y=(b.backgroundBlurriness>0?g:A).get(Y));const q=C.xr,Z=q.getSession&&q.getSession();Z&&Z.environmentBlendMode==="additive"&&(Y=null),Y===null?R(n,s):Y&&Y.isColor&&(R(Y,1),T=!0),(C.autoClear||T)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),Y&&(Y.isCubeTexture||Y.mapping===iA)?(u===void 0&&(u=new Je(new oC(1,1,1),new nB({name:"BackgroundCubeMaterial",uniforms:NQ(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:L,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(CA,pA,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),e.update(u)),u.material.uniforms.envMap.value=Y,u.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,(D!==Y||f!==Y.version||y!==C.toneMapping)&&(u.material.needsUpdate=!0,D=Y,f=Y.version,y=C.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):Y&&Y.isTexture&&(r===void 0&&(r=new Je(new xQ(2,2),new nB({name:"BackgroundMaterial",uniforms:NQ(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:x,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),e.update(r)),r.material.uniforms.t2D.value=Y,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),r.material.uniforms.uvTransform.value.copy(Y.matrix),(D!==Y||f!==Y.version||y!==C.toneMapping)&&(r.material.needsUpdate=!0,D=Y,f=Y.version,y=C.toneMapping),r.layers.enableAll(),M.unshift(r,r.geometry,r.material,0,0,null))}function R(M,b){I.buffers.color.setClear(M.r,M.g,M.b,b,E)}return{getClearColor:function(){return n},setClearColor:function(M,b=1){n.set(M),s=b,R(n,s)},getClearAlpha:function(){return s},setClearAlpha:function(M){s=M,R(n,s)},render:S}}function vD(C,A,g,I){const e=C.getParameter(C.MAX_VERTEX_ATTRIBS),B=I.isWebGL2?null:A.get("OES_vertex_array_object"),E=I.isWebGL2||B!==null,n={},s=M(null);let r=s,u=!1;function D(HA,lg,Fg,Yg,ug){let XA=!1;if(E){const ig=R(Yg,Fg,lg);r!==ig&&(r=ig,y(r.object)),XA=b(HA,Yg,Fg,ug),XA&&T(HA,Yg,Fg,ug)}else{const ig=lg.wireframe===!0;(r.geometry!==Yg.id||r.program!==Fg.id||r.wireframe!==ig)&&(r.geometry=Yg.id,r.program=Fg.id,r.wireframe=ig,XA=!0)}ug!==null&&g.update(ug,C.ELEMENT_ARRAY_BUFFER),(XA||u)&&(u=!1,W(HA,lg,Fg,Yg),ug!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,g.get(ug).buffer))}function f(){return I.isWebGL2?C.createVertexArray():B.createVertexArrayOES()}function y(HA){return I.isWebGL2?C.bindVertexArray(HA):B.bindVertexArrayOES(HA)}function S(HA){return I.isWebGL2?C.deleteVertexArray(HA):B.deleteVertexArrayOES(HA)}function R(HA,lg,Fg){const Yg=Fg.wireframe===!0;let ug=n[HA.id];ug===void 0&&(ug={},n[HA.id]=ug);let XA=ug[lg.id];XA===void 0&&(XA={},ug[lg.id]=XA);let ig=XA[Yg];return ig===void 0&&(ig=M(f()),XA[Yg]=ig),ig}function M(HA){const lg=[],Fg=[],Yg=[];for(let ug=0;ug<e;ug++)lg[ug]=0,Fg[ug]=0,Yg[ug]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:lg,enabledAttributes:Fg,attributeDivisors:Yg,object:HA,attributes:{},index:null}}function b(HA,lg,Fg,Yg){const ug=r.attributes,XA=lg.attributes;let ig=0;const Hg=Fg.getAttributes();for(const qg in Hg)if(Hg[qg].location>=0){const pt=ug[qg];let Ot=XA[qg];if(Ot===void 0&&(qg==="instanceMatrix"&&HA.instanceMatrix&&(Ot=HA.instanceMatrix),qg==="instanceColor"&&HA.instanceColor&&(Ot=HA.instanceColor)),pt===void 0||pt.attribute!==Ot||Ot&&pt.data!==Ot.data)return!0;ig++}return r.attributesNum!==ig||r.index!==Yg}function T(HA,lg,Fg,Yg){const ug={},XA=lg.attributes;let ig=0;const Hg=Fg.getAttributes();for(const qg in Hg)if(Hg[qg].location>=0){let pt=XA[qg];pt===void 0&&(qg==="instanceMatrix"&&HA.instanceMatrix&&(pt=HA.instanceMatrix),qg==="instanceColor"&&HA.instanceColor&&(pt=HA.instanceColor));const Ot={};Ot.attribute=pt,pt&&pt.data&&(Ot.data=pt.data),ug[qg]=Ot,ig++}r.attributes=ug,r.attributesNum=ig,r.index=Yg}function Y(){const HA=r.newAttributes;for(let lg=0,Fg=HA.length;lg<Fg;lg++)HA[lg]=0}function q(HA){Z(HA,0)}function Z(HA,lg){const Fg=r.newAttributes,Yg=r.enabledAttributes,ug=r.attributeDivisors;Fg[HA]=1,Yg[HA]===0&&(C.enableVertexAttribArray(HA),Yg[HA]=1),ug[HA]!==lg&&((I.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[I.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](HA,lg),ug[HA]=lg)}function CA(){const HA=r.newAttributes,lg=r.enabledAttributes;for(let Fg=0,Yg=lg.length;Fg<Yg;Fg++)lg[Fg]!==HA[Fg]&&(C.disableVertexAttribArray(Fg),lg[Fg]=0)}function pA(HA,lg,Fg,Yg,ug,XA){I.isWebGL2===!0&&(Fg===C.INT||Fg===C.UNSIGNED_INT)?C.vertexAttribIPointer(HA,lg,Fg,ug,XA):C.vertexAttribPointer(HA,lg,Fg,Yg,ug,XA)}function W(HA,lg,Fg,Yg){if(I.isWebGL2===!1&&(HA.isInstancedMesh||Yg.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;Y();const ug=Yg.attributes,XA=Fg.getAttributes(),ig=lg.defaultAttributeValues;for(const Hg in XA){const qg=XA[Hg];if(qg.location>=0){let Tg=ug[Hg];if(Tg===void 0&&(Hg==="instanceMatrix"&&HA.instanceMatrix&&(Tg=HA.instanceMatrix),Hg==="instanceColor"&&HA.instanceColor&&(Tg=HA.instanceColor)),Tg!==void 0){const pt=Tg.normalized,Ot=Tg.itemSize,_A=g.get(Tg);if(_A===void 0)continue;const aI=_A.buffer,xt=_A.type,Vt=_A.bytesPerElement;if(Tg.isInterleavedBufferAttribute){const nt=Tg.data,uI=nt.stride,Mg=Tg.offset;if(nt.isInstancedInterleavedBuffer){for(let Dg=0;Dg<qg.locationSize;Dg++)Z(qg.location+Dg,nt.meshPerAttribute);HA.isInstancedMesh!==!0&&Yg._maxInstanceCount===void 0&&(Yg._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Dg=0;Dg<qg.locationSize;Dg++)q(qg.location+Dg);C.bindBuffer(C.ARRAY_BUFFER,aI);for(let Dg=0;Dg<qg.locationSize;Dg++)pA(qg.location+Dg,Ot/qg.locationSize,xt,pt,uI*Vt,(Mg+Ot/qg.locationSize*Dg)*Vt)}else{if(Tg.isInstancedBufferAttribute){for(let nt=0;nt<qg.locationSize;nt++)Z(qg.location+nt,Tg.meshPerAttribute);HA.isInstancedMesh!==!0&&Yg._maxInstanceCount===void 0&&(Yg._maxInstanceCount=Tg.meshPerAttribute*Tg.count)}else for(let nt=0;nt<qg.locationSize;nt++)q(qg.location+nt);C.bindBuffer(C.ARRAY_BUFFER,aI);for(let nt=0;nt<qg.locationSize;nt++)pA(qg.location+nt,Ot/qg.locationSize,xt,pt,Ot*Vt,Ot/qg.locationSize*nt*Vt)}}else if(ig!==void 0){const pt=ig[Hg];if(pt!==void 0)switch(pt.length){case 2:C.vertexAttrib2fv(qg.location,pt);break;case 3:C.vertexAttrib3fv(qg.location,pt);break;case 4:C.vertexAttrib4fv(qg.location,pt);break;default:C.vertexAttrib1fv(qg.location,pt)}}}}CA()}function rA(){vg();for(const HA in n){const lg=n[HA];for(const Fg in lg){const Yg=lg[Fg];for(const ug in Yg)S(Yg[ug].object),delete Yg[ug];delete lg[Fg]}delete n[HA]}}function RA(HA){if(n[HA.id]===void 0)return;const lg=n[HA.id];for(const Fg in lg){const Yg=lg[Fg];for(const ug in Yg)S(Yg[ug].object),delete Yg[ug];delete lg[Fg]}delete n[HA.id]}function sg(HA){for(const lg in n){const Fg=n[lg];if(Fg[HA.id]===void 0)continue;const Yg=Fg[HA.id];for(const ug in Yg)S(Yg[ug].object),delete Yg[ug];delete Fg[HA.id]}}function vg(){Ig(),u=!0,r!==s&&(r=s,y(r.object))}function Ig(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:D,reset:vg,resetDefaultState:Ig,dispose:rA,releaseStatesOfGeometry:RA,releaseStatesOfProgram:sg,initAttributes:Y,enableAttribute:q,disableUnusedAttributes:CA}}function HD(C,A,g,I){const e=I.isWebGL2;let B;function E(r){B=r}function n(r,u){C.drawArrays(B,r,u),g.update(u,B,1)}function s(r,u,D){if(D===0)return;let f,y;if(e)f=C,y="drawArraysInstanced";else if(f=A.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[y](B,r,u,D),g.update(u,B,D)}this.setMode=E,this.render=n,this.renderInstances=s}function qD(C,A,g){let I;function e(){if(I!==void 0)return I;if(A.has("EXT_texture_filter_anisotropic")===!0){const pA=A.get("EXT_texture_filter_anisotropic");I=C.getParameter(pA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else I=0;return I}function B(pA){if(pA==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";pA="mediump"}return pA==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&C instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&C instanceof WebGL2ComputeRenderingContext;let n=g.precision!==void 0?g.precision:"highp";const s=B(n);s!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",s,"instead."),n=s);const r=E||A.has("WEBGL_draw_buffers"),u=g.logarithmicDepthBuffer===!0,D=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),f=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=C.getParameter(C.MAX_TEXTURE_SIZE),S=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),R=C.getParameter(C.MAX_VERTEX_ATTRIBS),M=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),b=C.getParameter(C.MAX_VARYING_VECTORS),T=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),Y=f>0,q=E||A.has("OES_texture_float"),Z=Y&&q,CA=E?C.getParameter(C.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:r,getMaxAnisotropy:e,getMaxPrecision:B,precision:n,logarithmicDepthBuffer:u,maxTextures:D,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:S,maxAttributes:R,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:Y,floatFragmentTextures:q,floatVertexTextures:Z,maxSamples:CA}}function TD(C){const A=this;let g=null,I=0,e=!1,B=!1;const E=new sC,n=new xe,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(D,f,y){const S=D.length!==0||f||I!==0||e;return e=f,g=u(D,y,0),I=D.length,S},this.beginShadows=function(){B=!0,u(null)},this.endShadows=function(){B=!1,r()},this.setState=function(D,f,y){const S=D.clippingPlanes,R=D.clipIntersection,M=D.clipShadows,b=C.get(D);if(!e||S===null||S.length===0||B&&!M)B?u(null):r();else{const T=B?0:I,Y=T*4;let q=b.clippingState||null;s.value=q,q=u(S,f,Y,y);for(let Z=0;Z!==Y;++Z)q[Z]=g[Z];b.clippingState=q,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=T}};function r(){s.value!==g&&(s.value=g,s.needsUpdate=I>0),A.numPlanes=I,A.numIntersection=0}function u(D,f,y,S){const R=D!==null?D.length:0;let M=null;if(R!==0){if(M=s.value,S!==!0||M===null){const b=y+R*4,T=f.matrixWorldInverse;n.getNormalMatrix(T),(M===null||M.length<b)&&(M=new Float32Array(b));for(let Y=0,q=y;Y!==R;++Y,q+=4)E.copy(D[Y]).applyMatrix4(T,n),E.normal.toArray(M,q),M[q+3]=E.constant}s.value=M,s.needsUpdate=!0}return A.numPlanes=R,A.numIntersection=0,M}}function _D(C){let A=new WeakMap;function g(E,n){return n===jt?E.mapping=ct:n===$A&&(E.mapping=Bt),E}function I(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const n=E.mapping;if(n===jt||n===$A)if(A.has(E)){const s=A.get(E).texture;return g(s,E.mapping)}else{const s=E.image;if(s&&s.height>0){const r=new mr(s.height/2);return r.fromEquirectangularTexture(C,E),A.set(E,r),E.addEventListener("dispose",e),g(r.texture,E.mapping)}else return null}}return E}function e(E){const n=E.target;n.removeEventListener("dispose",e);const s=A.get(n);s!==void 0&&(A.delete(n),s.dispose())}function B(){A=new WeakMap}return{get:I,dispose:B}}class Bo extends Io{constructor(A=-1,g=1,I=1,e=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=I,this.bottom=e,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,I,e,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=e,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),I=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let B=I-A,E=I+A,n=e+g,s=e-g;if(this.view!==null&&this.view.enabled){const r=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=r*this.view.offsetX,E=B+r*this.view.width,n-=u*this.view.offsetY,s=n-u*this.view.height}this.projectionMatrix.makeOrthographic(B,E,n,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const JQ=4,Gr=[.125,.215,.35,.446,.526,.582],LC=20,Ls=new Bo,Sr=new Et;let xs=null;const xC=(1+Math.sqrt(5))/2,bQ=1/xC,Fr=[new BA(1,1,1),new BA(-1,1,1),new BA(1,1,-1),new BA(-1,1,-1),new BA(0,xC,bQ),new BA(0,xC,-bQ),new BA(bQ,0,xC),new BA(-bQ,0,xC),new BA(xC,bQ,0),new BA(-xC,bQ,0)];class Js{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,I=.1,e=100){xs=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,I,e,B),g>0&&this._blur(B,0,0,g),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ur(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(xs),A.scissorTest=!1,Co(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===ct||A.mapping===Bt?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),xs=this._renderer.getRenderTarget();const I=g||this._allocateTargets();return this._textureToCubeUV(A,I),this._applyPMREM(I),this._cleanup(I),I}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,I={magFilter:Jg,minFilter:Jg,generateMipmaps:!1,type:lt,format:PI,encoding:Kg,depthBuffer:!1},e=Nr(A,g,I);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nr(A,g,I);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WD(B)),this._blurMaterial=PD(B,A,g)}return e}_compileMaterial(A){const g=new Je(this._lodPlanes[0],A);this._renderer.compile(g,Ls)}_sceneToCubeUV(A,g,I,e){const n=new be(90,1,g,I),s=[1,-1,1,1,1,1],r=[1,1,1,-1,-1,-1],u=this._renderer,D=u.autoClear,f=u.toneMapping;u.getClearColor(Sr),u.toneMapping=at,u.autoClear=!1;const y=new vI({name:"PMREM.Background",side:L,depthWrite:!1,depthTest:!1}),S=new Je(new oC,y);let R=!1;const M=A.background;M?M.isColor&&(y.color.copy(M),A.background=null,R=!0):(y.color.copy(Sr),R=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(n.up.set(0,s[b],0),n.lookAt(r[b],0,0)):T===1?(n.up.set(0,0,s[b]),n.lookAt(0,r[b],0)):(n.up.set(0,s[b],0),n.lookAt(0,0,r[b]));const Y=this._cubeSize;Co(e,T*Y,b>2?Y:0,Y,Y),u.setRenderTarget(e),R&&u.render(S,n),u.render(A,n)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=f,u.autoClear=D,A.background=M}_textureToCubeUV(A,g){const I=this._renderer,e=A.mapping===ct||A.mapping===Bt;e?(this._cubemapMaterial===null&&(this._cubemapMaterial=kr()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ur());const B=e?this._cubemapMaterial:this._equirectMaterial,E=new Je(this._lodPlanes[0],B),n=B.uniforms;n.envMap.value=A;const s=this._cubeSize;Co(g,0,0,3*s,2*s),I.setRenderTarget(g),I.render(E,Ls)}_applyPMREM(A){const g=this._renderer,I=g.autoClear;g.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const B=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),E=Fr[(e-1)%Fr.length];this._blur(A,e-1,e,B,E)}g.autoClear=I}_blur(A,g,I,e,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,g,I,e,"latitudinal",B),this._halfBlur(E,A,I,I,e,"longitudinal",B)}_halfBlur(A,g,I,e,B,E,n){const s=this._renderer,r=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,D=new Je(this._lodPlanes[e],r),f=r.uniforms,y=this._sizeLods[I]-1,S=isFinite(B)?Math.PI/(2*y):2*Math.PI/(2*LC-1),R=B/S,M=isFinite(B)?1+Math.floor(u*R):LC;M>LC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${LC}`);const b=[];let T=0;for(let pA=0;pA<LC;++pA){const W=pA/R,rA=Math.exp(-W*W/2);b.push(rA),pA===0?T+=rA:pA<M&&(T+=2*rA)}for(let pA=0;pA<b.length;pA++)b[pA]=b[pA]/T;f.envMap.value=A.texture,f.samples.value=M,f.weights.value=b,f.latitudinal.value=E==="latitudinal",n&&(f.poleAxis.value=n);const{_lodMax:Y}=this;f.dTheta.value=S,f.mipInt.value=Y-I;const q=this._sizeLods[e],Z=3*q*(e>Y-JQ?e-Y+JQ:0),CA=4*(this._cubeSize-q);Co(g,Z,CA,3*q,2*q),s.setRenderTarget(g),s.render(D,Ls)}}function WD(C){const A=[],g=[],I=[];let e=C;const B=C-JQ+1+Gr.length;for(let E=0;E<B;E++){const n=Math.pow(2,e);g.push(n);let s=1/n;E>C-JQ?s=Gr[E-C+JQ-1]:E===0&&(s=0),I.push(s);const r=1/(n-2),u=-r,D=1+r,f=[u,u,D,u,D,D,u,u,D,D,u,D],y=6,S=6,R=3,M=2,b=1,T=new Float32Array(R*S*y),Y=new Float32Array(M*S*y),q=new Float32Array(b*S*y);for(let CA=0;CA<y;CA++){const pA=CA%3*2/3-1,W=CA>2?0:-1,rA=[pA,W,0,pA+2/3,W,0,pA+2/3,W+1,0,pA,W,0,pA+2/3,W+1,0,pA,W+1,0];T.set(rA,R*S*CA),Y.set(f,M*S*CA);const RA=[CA,CA,CA,CA,CA,CA];q.set(RA,b*S*CA)}const Z=new nI;Z.setAttribute("position",new AI(T,R)),Z.setAttribute("uv",new AI(Y,M)),Z.setAttribute("faceIndex",new AI(q,b)),A.push(Z),e>JQ&&e--}return{lodPlanes:A,sizeLods:g,sigmas:I}}function Nr(C,A,g){const I=new Pe(C,A,g);return I.texture.mapping=iA,I.texture.name="PMREM.cubeUv",I.scissorTest=!0,I}function Co(C,A,g,I,e){C.viewport.set(A,g,I,e),C.scissor.set(A,g,I,e)}function PD(C,A,g){const I=new Float32Array(LC),e=new BA(0,1,0);return new nB({name:"SphericalGaussianBlur",defines:{n:LC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:I},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function Ur(){return new nB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function kr(){return new nB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OD(C){let A=new WeakMap,g=null;function I(n){if(n&&n.isTexture){const s=n.mapping,r=s===jt||s===$A,u=s===ct||s===Bt;if(r||u)if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let D=A.get(n);return g===null&&(g=new Js(C)),D=r?g.fromEquirectangular(n,D):g.fromCubemap(n,D),A.set(n,D),D.texture}else{if(A.has(n))return A.get(n).texture;{const D=n.image;if(r&&D&&D.height>0||u&&D&&e(D)){g===null&&(g=new Js(C));const f=r?g.fromEquirectangular(n):g.fromCubemap(n);return A.set(n,f),n.addEventListener("dispose",B),f.texture}else return null}}}return n}function e(n){let s=0;const r=6;for(let u=0;u<r;u++)n[u]!==void 0&&s++;return s===r}function B(n){const s=n.target;s.removeEventListener("dispose",B);const r=A.get(s);r!==void 0&&(A.delete(s),r.dispose())}function E(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:I,dispose:E}}function VD(C){const A={};function g(I){if(A[I]!==void 0)return A[I];let e;switch(I){case"WEBGL_depth_texture":e=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=C.getExtension(I)}return A[I]=e,e}return{has:function(I){return g(I)!==null},init:function(I){I.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(I){const e=g(I);return e===null&&console.warn("THREE.WebGLRenderer: "+I+" extension not supported."),e}}}function ZD(C,A,g,I){const e={},B=new WeakMap;function E(D){const f=D.target;f.index!==null&&A.remove(f.index);for(const S in f.attributes)A.remove(f.attributes[S]);f.removeEventListener("dispose",E),delete e[f.id];const y=B.get(f);y&&(A.remove(y),B.delete(f)),I.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,g.memory.geometries--}function n(D,f){return e[f.id]===!0||(f.addEventListener("dispose",E),e[f.id]=!0,g.memory.geometries++),f}function s(D){const f=D.attributes;for(const S in f)A.update(f[S],C.ARRAY_BUFFER);const y=D.morphAttributes;for(const S in y){const R=y[S];for(let M=0,b=R.length;M<b;M++)A.update(R[M],C.ARRAY_BUFFER)}}function r(D){const f=[],y=D.index,S=D.attributes.position;let R=0;if(y!==null){const T=y.array;R=y.version;for(let Y=0,q=T.length;Y<q;Y+=3){const Z=T[Y+0],CA=T[Y+1],pA=T[Y+2];f.push(Z,CA,CA,pA,pA,Z)}}else{const T=S.array;R=S.version;for(let Y=0,q=T.length/3-1;Y<q;Y+=3){const Z=Y+0,CA=Y+1,pA=Y+2;f.push(Z,CA,CA,pA,pA,Z)}}const M=new(RC(f)?ms:Ms)(f,1);M.version=R;const b=B.get(D);b&&A.remove(b),B.set(D,M)}function u(D){const f=B.get(D);if(f){const y=D.index;y!==null&&f.version<y.version&&r(D)}else r(D);return B.get(D)}return{get:n,update:s,getWireframeAttribute:u}}function XD(C,A,g,I){const e=I.isWebGL2;let B;function E(f){B=f}let n,s;function r(f){n=f.type,s=f.bytesPerElement}function u(f,y){C.drawElements(B,y,n,f*s),g.update(y,B,1)}function D(f,y,S){if(S===0)return;let R,M;if(e)R=C,M="drawElementsInstanced";else if(R=A.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",R===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}R[M](B,y,n,f*s,S),g.update(y,B,S)}this.setMode=E,this.setIndex=r,this.render=u,this.renderInstances=D}function zD(C){const A={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function I(B,E,n){switch(g.calls++,E){case C.TRIANGLES:g.triangles+=n*(B/3);break;case C.LINES:g.lines+=n*(B/2);break;case C.LINE_STRIP:g.lines+=n*(B-1);break;case C.LINE_LOOP:g.lines+=n*B;break;case C.POINTS:g.points+=n*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function e(){g.frame++,g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:A,render:g,programs:null,autoReset:!0,reset:e,update:I}}function jD(C,A){return C[0]-A[0]}function $D(C,A){return Math.abs(A[1])-Math.abs(C[1])}function Af(C,A,g){const I={},e=new Float32Array(8),B=new WeakMap,E=new RI,n=[];for(let r=0;r<8;r++)n[r]=[r,0];function s(r,u,D,f){const y=r.morphTargetInfluences;if(A.isWebGL2===!0){const R=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M=R!==void 0?R.length:0;let b=B.get(u);if(b===void 0||b.count!==M){let Fg=function(){HA.dispose(),B.delete(u),u.removeEventListener("dispose",Fg)};var S=Fg;b!==void 0&&b.texture.dispose();const q=u.morphAttributes.position!==void 0,Z=u.morphAttributes.normal!==void 0,CA=u.morphAttributes.color!==void 0,pA=u.morphAttributes.position||[],W=u.morphAttributes.normal||[],rA=u.morphAttributes.color||[];let RA=0;q===!0&&(RA=1),Z===!0&&(RA=2),CA===!0&&(RA=3);let sg=u.attributes.position.count*RA,vg=1;sg>A.maxTextureSize&&(vg=Math.ceil(sg/A.maxTextureSize),sg=A.maxTextureSize);const Ig=new Float32Array(sg*vg*4*M),HA=new NC(Ig,sg,vg,M);HA.type=$g,HA.needsUpdate=!0;const lg=RA*4;for(let Yg=0;Yg<M;Yg++){const ug=pA[Yg],XA=W[Yg],ig=rA[Yg],Hg=sg*vg*4*Yg;for(let qg=0;qg<ug.count;qg++){const Tg=qg*lg;q===!0&&(E.fromBufferAttribute(ug,qg),Ig[Hg+Tg+0]=E.x,Ig[Hg+Tg+1]=E.y,Ig[Hg+Tg+2]=E.z,Ig[Hg+Tg+3]=0),Z===!0&&(E.fromBufferAttribute(XA,qg),Ig[Hg+Tg+4]=E.x,Ig[Hg+Tg+5]=E.y,Ig[Hg+Tg+6]=E.z,Ig[Hg+Tg+7]=0),CA===!0&&(E.fromBufferAttribute(ig,qg),Ig[Hg+Tg+8]=E.x,Ig[Hg+Tg+9]=E.y,Ig[Hg+Tg+10]=E.z,Ig[Hg+Tg+11]=ig.itemSize===4?E.w:1)}}b={count:M,texture:HA,size:new pg(sg,vg)},B.set(u,b),u.addEventListener("dispose",Fg)}let T=0;for(let q=0;q<y.length;q++)T+=y[q];const Y=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(C,"morphTargetBaseInfluence",Y),f.getUniforms().setValue(C,"morphTargetInfluences",y),f.getUniforms().setValue(C,"morphTargetsTexture",b.texture,g),f.getUniforms().setValue(C,"morphTargetsTextureSize",b.size)}else{const R=y===void 0?0:y.length;let M=I[u.id];if(M===void 0||M.length!==R){M=[];for(let Z=0;Z<R;Z++)M[Z]=[Z,0];I[u.id]=M}for(let Z=0;Z<R;Z++){const CA=M[Z];CA[0]=Z,CA[1]=y[Z]}M.sort($D);for(let Z=0;Z<8;Z++)Z<R&&M[Z][1]?(n[Z][0]=M[Z][0],n[Z][1]=M[Z][1]):(n[Z][0]=Number.MAX_SAFE_INTEGER,n[Z][1]=0);n.sort(jD);const b=u.morphAttributes.position,T=u.morphAttributes.normal;let Y=0;for(let Z=0;Z<8;Z++){const CA=n[Z],pA=CA[0],W=CA[1];pA!==Number.MAX_SAFE_INTEGER&&W?(b&&u.getAttribute("morphTarget"+Z)!==b[pA]&&u.setAttribute("morphTarget"+Z,b[pA]),T&&u.getAttribute("morphNormal"+Z)!==T[pA]&&u.setAttribute("morphNormal"+Z,T[pA]),e[Z]=W,Y+=W):(b&&u.hasAttribute("morphTarget"+Z)===!0&&u.deleteAttribute("morphTarget"+Z),T&&u.hasAttribute("morphNormal"+Z)===!0&&u.deleteAttribute("morphNormal"+Z),e[Z]=0)}const q=u.morphTargetsRelative?1:1-Y;f.getUniforms().setValue(C,"morphTargetBaseInfluence",q),f.getUniforms().setValue(C,"morphTargetInfluences",e)}}return{update:s}}function gf(C,A,g,I){let e=new WeakMap;function B(s){const r=I.render.frame,u=s.geometry,D=A.get(s,u);return e.get(D)!==r&&(A.update(D),e.set(D,r)),s.isInstancedMesh&&(s.hasEventListener("dispose",n)===!1&&s.addEventListener("dispose",n),g.update(s.instanceMatrix,C.ARRAY_BUFFER),s.instanceColor!==null&&g.update(s.instanceColor,C.ARRAY_BUFFER)),D}function E(){e=new WeakMap}function n(s){const r=s.target;r.removeEventListener("dispose",n),g.remove(r.instanceMatrix),r.instanceColor!==null&&g.remove(r.instanceColor)}return{update:B,dispose:E}}const Lr=new KI,xr=new NC,Jr=new yQ,br=new KE,Kr=[],Yr=[],vr=new Float32Array(16),Hr=new Float32Array(9),qr=new Float32Array(4);function KQ(C,A,g){const I=C[0];if(I<=0||I>0)return C;const e=A*g;let B=Kr[e];if(B===void 0&&(B=new Float32Array(e),Kr[e]=B),A!==0){I.toArray(B,0);for(let E=1,n=0;E!==A;++E)n+=g,C[E].toArray(B,n)}return B}function fe(C,A){if(C.length!==A.length)return!1;for(let g=0,I=C.length;g<I;g++)if(C[g]!==A[g])return!1;return!0}function we(C,A){for(let g=0,I=A.length;g<I;g++)C[g]=A[g]}function Qo(C,A){let g=Yr[A];g===void 0&&(g=new Int32Array(A),Yr[A]=g);for(let I=0;I!==A;++I)g[I]=C.allocateTextureUnit();return g}function tf(C,A){const g=this.cache;g[0]!==A&&(C.uniform1f(this.addr,A),g[0]=A)}function If(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(fe(g,A))return;C.uniform2fv(this.addr,A),we(g,A)}}function ef(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)(g[0]!==A.r||g[1]!==A.g||g[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(fe(g,A))return;C.uniform3fv(this.addr,A),we(g,A)}}function Bf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(fe(g,A))return;C.uniform4fv(this.addr,A),we(g,A)}}function Cf(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(fe(g,A))return;C.uniformMatrix2fv(this.addr,!1,A),we(g,A)}else{if(fe(g,I))return;qr.set(I),C.uniformMatrix2fv(this.addr,!1,qr),we(g,I)}}function Qf(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(fe(g,A))return;C.uniformMatrix3fv(this.addr,!1,A),we(g,A)}else{if(fe(g,I))return;Hr.set(I),C.uniformMatrix3fv(this.addr,!1,Hr),we(g,I)}}function Ef(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(fe(g,A))return;C.uniformMatrix4fv(this.addr,!1,A),we(g,A)}else{if(fe(g,I))return;vr.set(I),C.uniformMatrix4fv(this.addr,!1,vr),we(g,I)}}function nf(C,A){const g=this.cache;g[0]!==A&&(C.uniform1i(this.addr,A),g[0]=A)}function of(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(fe(g,A))return;C.uniform2iv(this.addr,A),we(g,A)}}function sf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(fe(g,A))return;C.uniform3iv(this.addr,A),we(g,A)}}function af(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(fe(g,A))return;C.uniform4iv(this.addr,A),we(g,A)}}function rf(C,A){const g=this.cache;g[0]!==A&&(C.uniform1ui(this.addr,A),g[0]=A)}function hf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(fe(g,A))return;C.uniform2uiv(this.addr,A),we(g,A)}}function cf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(fe(g,A))return;C.uniform3uiv(this.addr,A),we(g,A)}}function lf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(fe(g,A))return;C.uniform4uiv(this.addr,A),we(g,A)}}function df(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture2D(A||Lr,e)}function uf(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture3D(A||Jr,e)}function Df(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTextureCube(A||br,e)}function ff(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture2DArray(A||xr,e)}function wf(C){switch(C){case 5126:return tf;case 35664:return If;case 35665:return ef;case 35666:return Bf;case 35674:return Cf;case 35675:return Qf;case 35676:return Ef;case 5124:case 35670:return nf;case 35667:case 35671:return of;case 35668:case 35672:return sf;case 35669:case 35673:return af;case 5125:return rf;case 36294:return hf;case 36295:return cf;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return ff}}function pf(C,A){C.uniform1fv(this.addr,A)}function yf(C,A){const g=KQ(A,this.size,2);C.uniform2fv(this.addr,g)}function Mf(C,A){const g=KQ(A,this.size,3);C.uniform3fv(this.addr,g)}function mf(C,A){const g=KQ(A,this.size,4);C.uniform4fv(this.addr,g)}function Rf(C,A){const g=KQ(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,g)}function Gf(C,A){const g=KQ(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,g)}function Sf(C,A){const g=KQ(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,g)}function Ff(C,A){C.uniform1iv(this.addr,A)}function Nf(C,A){C.uniform2iv(this.addr,A)}function Uf(C,A){C.uniform3iv(this.addr,A)}function kf(C,A){C.uniform4iv(this.addr,A)}function Lf(C,A){C.uniform1uiv(this.addr,A)}function xf(C,A){C.uniform2uiv(this.addr,A)}function Jf(C,A){C.uniform3uiv(this.addr,A)}function bf(C,A){C.uniform4uiv(this.addr,A)}function Kf(C,A,g){const I=this.cache,e=A.length,B=Qo(g,e);fe(I,B)||(C.uniform1iv(this.addr,B),we(I,B));for(let E=0;E!==e;++E)g.setTexture2D(A[E]||Lr,B[E])}function Yf(C,A,g){const I=this.cache,e=A.length,B=Qo(g,e);fe(I,B)||(C.uniform1iv(this.addr,B),we(I,B));for(let E=0;E!==e;++E)g.setTexture3D(A[E]||Jr,B[E])}function vf(C,A,g){const I=this.cache,e=A.length,B=Qo(g,e);fe(I,B)||(C.uniform1iv(this.addr,B),we(I,B));for(let E=0;E!==e;++E)g.setTextureCube(A[E]||br,B[E])}function Hf(C,A,g){const I=this.cache,e=A.length,B=Qo(g,e);fe(I,B)||(C.uniform1iv(this.addr,B),we(I,B));for(let E=0;E!==e;++E)g.setTexture2DArray(A[E]||xr,B[E])}function qf(C){switch(C){case 5126:return pf;case 35664:return yf;case 35665:return Mf;case 35666:return mf;case 35674:return Rf;case 35675:return Gf;case 35676:return Sf;case 5124:case 35670:return Ff;case 35667:case 35671:return Nf;case 35668:case 35672:return Uf;case 35669:case 35673:return kf;case 5125:return Lf;case 36294:return xf;case 36295:return Jf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return Hf}}class Tf{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.setValue=wf(g.type)}}class _f{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.size=g.size,this.setValue=qf(g.type)}}class Wf{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,I){const e=this.seq;for(let B=0,E=e.length;B!==E;++B){const n=e[B];n.setValue(A,g[n.id],I)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Tr(C,A){C.seq.push(A),C.map[A.id]=A}function Pf(C,A,g){const I=C.name,e=I.length;for(Ks.lastIndex=0;;){const B=Ks.exec(I),E=Ks.lastIndex;let n=B[1];const s=B[2]==="]",r=B[3];if(s&&(n=n|0),r===void 0||r==="["&&E+2===e){Tr(g,r===void 0?new Tf(n,C,A):new _f(n,C,A));break}else{let D=g.map[n];D===void 0&&(D=new Wf(n),Tr(g,D)),g=D}}}class Eo{constructor(A,g){this.seq=[],this.map={};const I=A.getProgramParameter(g,A.ACTIVE_UNIFORMS);for(let e=0;e<I;++e){const B=A.getActiveUniform(g,e),E=A.getUniformLocation(g,B.name);Pf(B,E,this)}}setValue(A,g,I,e){const B=this.map[g];B!==void 0&&B.setValue(A,I,e)}setOptional(A,g,I){const e=g[I];e!==void 0&&this.setValue(A,I,e)}static upload(A,g,I,e){for(let B=0,E=g.length;B!==E;++B){const n=g[B],s=I[n.id];s.needsUpdate!==!1&&n.setValue(A,s.value,e)}}static seqWithValue(A,g){const I=[];for(let e=0,B=A.length;e!==B;++e){const E=A[e];E.id in g&&I.push(E)}return I}}function _r(C,A,g){const I=C.createShader(A);return C.shaderSource(I,g),C.compileShader(I),I}let Of=0;function Vf(C,A){const g=C.split(`
`),I=[],e=Math.max(A-6,0),B=Math.min(A+6,g.length);for(let E=e;E<B;E++){const n=E+1;I.push(`${n===A?">":" "} ${n}: ${g[E]}`)}return I.join(`
`)}function Zf(C){switch(C){case Kg:return["Linear","( value )"];case Lg:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",C),["Linear","( value )"]}}function Wr(C,A,g){const I=C.getShaderParameter(A,C.COMPILE_STATUS),e=C.getShaderInfoLog(A).trim();if(I&&e==="")return"";const B=/ERROR: 0:(\d+)/.exec(e);if(B){const E=parseInt(B[1]);return g.toUpperCase()+`

`+e+`

`+Vf(C.getShaderSource(A),E)}else return e}function Xf(C,A){const g=Zf(A);return"vec4 "+C+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function zf(C,A){let g;switch(A){case Ag:g="Linear";break;case VA:g="Reinhard";break;case wg:g="OptimizedCineon";break;case et:g="ACESFilmic";break;case Wg:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+C+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function jf(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.tangentSpaceNormalMap||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(YE).join(`
`)}function $f(C){const A=[];for(const g in C){const I=C[g];I!==!1&&A.push("#define "+g+" "+I)}return A.join(`
`)}function A0(C,A){const g={},I=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let e=0;e<I;e++){const B=C.getActiveAttrib(A,e),E=B.name;let n=1;B.type===C.FLOAT_MAT2&&(n=2),B.type===C.FLOAT_MAT3&&(n=3),B.type===C.FLOAT_MAT4&&(n=4),g[E]={type:B.type,location:C.getAttribLocation(A,E),locationSize:n}}return g}function YE(C){return C!==""}function Pr(C,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Or(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(C){return C.replace(g0,t0)}function t0(C,A){const g=BI[A];if(g===void 0)throw new Error("Can not resolve #include <"+A+">");return Ys(g)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vr(C){return C.replace(I0,e0)}function e0(C,A,g,I){let e="";for(let B=parseInt(A);B<parseInt(g);B++)e+=I.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return e}function Zr(C){let A="precision "+C.precision+` float;
precision `+C.precision+" int;";return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function i0(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===F?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===G?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===N&&(A="SHADOWMAP_TYPE_VSM"),A}function B0(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ct:case Bt:A="ENVMAP_TYPE_CUBE";break;case iA:A="ENVMAP_TYPE_CUBE_UV";break}return A}function C0(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case Bt:A="ENVMAP_MODE_REFRACTION";break}return A}function Q0(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case kg:A="ENVMAP_BLENDING_MULTIPLY";break;case tt:A="ENVMAP_BLENDING_MIX";break;case Og:A="ENVMAP_BLENDING_ADD";break}return A}function E0(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const g=Math.log2(A)-2,I=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:I,maxMip:g}}function n0(C,A,g,I){const e=C.getContext(),B=g.defines;let E=g.vertexShader,n=g.fragmentShader;const s=i0(g),r=B0(g),u=C0(g),D=Q0(g),f=E0(g),y=g.isWebGL2?"":jf(g),S=$f(B),R=e.createProgram();let M,b,T=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(M=[S].filter(YE).join(`
`),M.length>0&&(M+=`
`),b=[y,S].filter(YE).join(`
`),b.length>0&&(b+=`
`)):(M=[Zr(g),"#define SHADER_NAME "+g.shaderName,S,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.supportsVertexTextures?"#define VERTEX_TEXTURES":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+u:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.displacementMap&&g.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+s:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(YE).join(`
`),b=[y,Zr(g),"#define SHADER_NAME "+g.shaderName,S,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+r:"",g.envMap?"#define "+u:"",g.envMap?"#define "+D:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+s:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==at?"#define TONE_MAPPING":"",g.toneMapping!==at?BI.tonemapping_pars_fragment:"",g.toneMapping!==at?zf("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",BI.encodings_pars_fragment,Xf("linearToOutputTexel",g.outputEncoding),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(YE).join(`
`)),E=Ys(E),E=Pr(E,g),E=Or(E,g),n=Ys(n),n=Pr(n,g),n=Or(n,g),E=Vr(E),n=Vr(n),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",g.glslVersion===jB?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===jB?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const Y=T+M+E,q=T+b+n,Z=_r(e,e.VERTEX_SHADER,Y),CA=_r(e,e.FRAGMENT_SHADER,q);if(e.attachShader(R,Z),e.attachShader(R,CA),g.index0AttributeName!==void 0?e.bindAttribLocation(R,0,g.index0AttributeName):g.morphTargets===!0&&e.bindAttribLocation(R,0,"position"),e.linkProgram(R),C.debug.checkShaderErrors){const rA=e.getProgramInfoLog(R).trim(),RA=e.getShaderInfoLog(Z).trim(),sg=e.getShaderInfoLog(CA).trim();let vg=!0,Ig=!0;if(e.getProgramParameter(R,e.LINK_STATUS)===!1){vg=!1;const HA=Wr(e,Z,"vertex"),lg=Wr(e,CA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(R,e.VALIDATE_STATUS)+`

Program Info Log: `+rA+`
`+HA+`
`+lg)}else rA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rA):(RA===""||sg==="")&&(Ig=!1);Ig&&(this.diagnostics={runnable:vg,programLog:rA,vertexShader:{log:RA,prefix:M},fragmentShader:{log:sg,prefix:b}})}e.deleteShader(Z),e.deleteShader(CA);let pA;this.getUniforms=function(){return pA===void 0&&(pA=new Eo(e,R)),pA};let W;return this.getAttributes=function(){return W===void 0&&(W=A0(e,R)),W},this.destroy=function(){I.releaseStatesOfProgram(this),e.deleteProgram(R),this.program=void 0},this.name=g.shaderName,this.id=Of++,this.cacheKey=A,this.usedTimes=1,this.program=R,this.vertexShader=Z,this.fragmentShader=CA,this}let o0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,I=A.fragmentShader,e=this._getShaderStage(g),B=this._getShaderStage(I),E=this._getShaderCacheForMaterial(A);return E.has(e)===!1&&(E.add(e),e.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const I of g)I.usedTimes--,I.usedTimes===0&&this.shaderCache.delete(I.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let I=g.get(A);return I===void 0&&(I=new Set,g.set(A,I)),I}_getShaderStage(A){const g=this.shaderCache;let I=g.get(A);return I===void 0&&(I=new a0(A),g.set(A,I)),I}}class a0{constructor(A){this.id=o0++,this.code=A,this.usedTimes=0}}function r0(C,A,g,I,e,B,E){const n=new ri,s=new s0,r=[],u=e.isWebGL2,D=e.logarithmicDepthBuffer,f=e.vertexTextures;let y=e.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(W,rA,RA,sg,vg){const Ig=sg.fog,HA=vg.geometry,lg=W.isMeshStandardMaterial?sg.environment:null,Fg=(W.isMeshStandardMaterial?g:A).get(W.envMap||lg),Yg=Fg&&Fg.mapping===iA?Fg.image.height:null,ug=S[W.type];W.precision!==null&&(y=e.getMaxPrecision(W.precision),y!==W.precision&&console.warn("THREE.WebGLProgram.getParameters:",W.precision,"not supported, using",y,"instead."));const XA=HA.morphAttributes.position||HA.morphAttributes.normal||HA.morphAttributes.color,ig=XA!==void 0?XA.length:0;let Hg=0;HA.morphAttributes.position!==void 0&&(Hg=1),HA.morphAttributes.normal!==void 0&&(Hg=2),HA.morphAttributes.color!==void 0&&(Hg=3);let qg,Tg,pt,Ot;if(ug){const uI=_i[ug];qg=uI.vertexShader,Tg=uI.fragmentShader}else qg=W.vertexShader,Tg=W.fragmentShader,s.update(W),pt=s.getVertexShaderID(W),Ot=s.getFragmentShaderID(W);const _A=C.getRenderTarget(),aI=W.alphaTest>0,xt=W.clearcoat>0,Vt=W.iridescence>0;return{isWebGL2:u,shaderID:ug,shaderName:W.type,vertexShader:qg,fragmentShader:Tg,defines:W.defines,customVertexShaderID:pt,customFragmentShaderID:Ot,isRawShaderMaterial:W.isRawShaderMaterial===!0,glslVersion:W.glslVersion,precision:y,instancing:vg.isInstancedMesh===!0,instancingColor:vg.isInstancedMesh===!0&&vg.instanceColor!==null,supportsVertexTextures:f,outputEncoding:_A===null?C.outputEncoding:_A.isXRRenderTarget===!0?_A.texture.encoding:Kg,map:!!W.map,matcap:!!W.matcap,envMap:!!Fg,envMapMode:Fg&&Fg.mapping,envMapCubeUVHeight:Yg,lightMap:!!W.lightMap,aoMap:!!W.aoMap,emissiveMap:!!W.emissiveMap,bumpMap:!!W.bumpMap,normalMap:!!W.normalMap,objectSpaceNormalMap:W.normalMapType===zt,tangentSpaceNormalMap:W.normalMapType===dt,decodeVideoTexture:!!W.map&&W.map.isVideoTexture===!0&&W.map.encoding===Lg,clearcoat:xt,clearcoatMap:xt&&!!W.clearcoatMap,clearcoatRoughnessMap:xt&&!!W.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!W.clearcoatNormalMap,iridescence:Vt,iridescenceMap:Vt&&!!W.iridescenceMap,iridescenceThicknessMap:Vt&&!!W.iridescenceThicknessMap,displacementMap:!!W.displacementMap,roughnessMap:!!W.roughnessMap,metalnessMap:!!W.metalnessMap,specularMap:!!W.specularMap,specularIntensityMap:!!W.specularIntensityMap,specularColorMap:!!W.specularColorMap,opaque:W.transparent===!1&&W.blending===J,alphaMap:!!W.alphaMap,alphaTest:aI,gradientMap:!!W.gradientMap,sheen:W.sheen>0,sheenColorMap:!!W.sheenColorMap,sheenRoughnessMap:!!W.sheenRoughnessMap,transmission:W.transmission>0,transmissionMap:!!W.transmissionMap,thicknessMap:!!W.thicknessMap,combine:W.combine,vertexTangents:!!W.normalMap&&!!HA.attributes.tangent,vertexColors:W.vertexColors,vertexAlphas:W.vertexColors===!0&&!!HA.attributes.color&&HA.attributes.color.itemSize===4,vertexUvs:!!W.map||!!W.bumpMap||!!W.normalMap||!!W.specularMap||!!W.alphaMap||!!W.emissiveMap||!!W.roughnessMap||!!W.metalnessMap||!!W.clearcoatMap||!!W.clearcoatRoughnessMap||!!W.clearcoatNormalMap||!!W.iridescenceMap||!!W.iridescenceThicknessMap||!!W.displacementMap||!!W.transmissionMap||!!W.thicknessMap||!!W.specularIntensityMap||!!W.specularColorMap||!!W.sheenColorMap||!!W.sheenRoughnessMap,uvsVertexOnly:!(W.map||W.bumpMap||W.normalMap||W.specularMap||W.alphaMap||W.emissiveMap||W.roughnessMap||W.metalnessMap||W.clearcoatNormalMap||W.iridescenceMap||W.iridescenceThicknessMap||W.transmission>0||W.transmissionMap||W.thicknessMap||W.specularIntensityMap||W.specularColorMap||W.sheen>0||W.sheenColorMap||W.sheenRoughnessMap)&&!!W.displacementMap,fog:!!Ig,useFog:W.fog===!0,fogExp2:Ig&&Ig.isFogExp2,flatShading:!!W.flatShading,sizeAttenuation:W.sizeAttenuation,logarithmicDepthBuffer:D,skinning:vg.isSkinnedMesh===!0,morphTargets:HA.morphAttributes.position!==void 0,morphNormals:HA.morphAttributes.normal!==void 0,morphColors:HA.morphAttributes.color!==void 0,morphTargetsCount:ig,morphTextureStride:Hg,numDirLights:rA.directional.length,numPointLights:rA.point.length,numSpotLights:rA.spot.length,numSpotLightMaps:rA.spotLightMap.length,numRectAreaLights:rA.rectArea.length,numHemiLights:rA.hemi.length,numDirLightShadows:rA.directionalShadowMap.length,numPointLightShadows:rA.pointShadowMap.length,numSpotLightShadows:rA.spotShadowMap.length,numSpotLightShadowsWithMaps:rA.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:W.dithering,shadowMapEnabled:C.shadowMap.enabled&&RA.length>0,shadowMapType:C.shadowMap.type,toneMapping:W.toneMapped?C.toneMapping:at,physicallyCorrectLights:C.physicallyCorrectLights,premultipliedAlpha:W.premultipliedAlpha,doubleSided:W.side===H,flipSided:W.side===L,useDepthPacking:!!W.depthPacking,depthPacking:W.depthPacking||0,index0AttributeName:W.index0AttributeName,extensionDerivatives:W.extensions&&W.extensions.derivatives,extensionFragDepth:W.extensions&&W.extensions.fragDepth,extensionDrawBuffers:W.extensions&&W.extensions.drawBuffers,extensionShaderTextureLOD:W.extensions&&W.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||I.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||I.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||I.has("EXT_shader_texture_lod"),customProgramCacheKey:W.customProgramCacheKey()}}function M(W){const rA=[];if(W.shaderID?rA.push(W.shaderID):(rA.push(W.customVertexShaderID),rA.push(W.customFragmentShaderID)),W.defines!==void 0)for(const RA in W.defines)rA.push(RA),rA.push(W.defines[RA]);return W.isRawShaderMaterial===!1&&(b(rA,W),T(rA,W),rA.push(C.outputEncoding)),rA.push(W.customProgramCacheKey),rA.join()}function b(W,rA){W.push(rA.precision),W.push(rA.outputEncoding),W.push(rA.envMapMode),W.push(rA.envMapCubeUVHeight),W.push(rA.combine),W.push(rA.vertexUvs),W.push(rA.fogExp2),W.push(rA.sizeAttenuation),W.push(rA.morphTargetsCount),W.push(rA.morphAttributeCount),W.push(rA.numDirLights),W.push(rA.numPointLights),W.push(rA.numSpotLights),W.push(rA.numSpotLightMaps),W.push(rA.numHemiLights),W.push(rA.numRectAreaLights),W.push(rA.numDirLightShadows),W.push(rA.numPointLightShadows),W.push(rA.numSpotLightShadows),W.push(rA.numSpotLightShadowsWithMaps),W.push(rA.shadowMapType),W.push(rA.toneMapping),W.push(rA.numClippingPlanes),W.push(rA.numClipIntersection),W.push(rA.depthPacking)}function T(W,rA){n.disableAll(),rA.isWebGL2&&n.enable(0),rA.supportsVertexTextures&&n.enable(1),rA.instancing&&n.enable(2),rA.instancingColor&&n.enable(3),rA.map&&n.enable(4),rA.matcap&&n.enable(5),rA.envMap&&n.enable(6),rA.lightMap&&n.enable(7),rA.aoMap&&n.enable(8),rA.emissiveMap&&n.enable(9),rA.bumpMap&&n.enable(10),rA.normalMap&&n.enable(11),rA.objectSpaceNormalMap&&n.enable(12),rA.tangentSpaceNormalMap&&n.enable(13),rA.clearcoat&&n.enable(14),rA.clearcoatMap&&n.enable(15),rA.clearcoatRoughnessMap&&n.enable(16),rA.clearcoatNormalMap&&n.enable(17),rA.iridescence&&n.enable(18),rA.iridescenceMap&&n.enable(19),rA.iridescenceThicknessMap&&n.enable(20),rA.displacementMap&&n.enable(21),rA.specularMap&&n.enable(22),rA.roughnessMap&&n.enable(23),rA.metalnessMap&&n.enable(24),rA.gradientMap&&n.enable(25),rA.alphaMap&&n.enable(26),rA.alphaTest&&n.enable(27),rA.vertexColors&&n.enable(28),rA.vertexAlphas&&n.enable(29),rA.vertexUvs&&n.enable(30),rA.vertexTangents&&n.enable(31),rA.uvsVertexOnly&&n.enable(32),W.push(n.mask),n.disableAll(),rA.fog&&n.enable(0),rA.useFog&&n.enable(1),rA.flatShading&&n.enable(2),rA.logarithmicDepthBuffer&&n.enable(3),rA.skinning&&n.enable(4),rA.morphTargets&&n.enable(5),rA.morphNormals&&n.enable(6),rA.morphColors&&n.enable(7),rA.premultipliedAlpha&&n.enable(8),rA.shadowMapEnabled&&n.enable(9),rA.physicallyCorrectLights&&n.enable(10),rA.doubleSided&&n.enable(11),rA.flipSided&&n.enable(12),rA.useDepthPacking&&n.enable(13),rA.dithering&&n.enable(14),rA.specularIntensityMap&&n.enable(15),rA.specularColorMap&&n.enable(16),rA.transmission&&n.enable(17),rA.transmissionMap&&n.enable(18),rA.thicknessMap&&n.enable(19),rA.sheen&&n.enable(20),rA.sheenColorMap&&n.enable(21),rA.sheenRoughnessMap&&n.enable(22),rA.decodeVideoTexture&&n.enable(23),rA.opaque&&n.enable(24),W.push(n.mask)}function Y(W){const rA=S[W.type];let RA;if(rA){const sg=_i[rA];RA=yr.clone(sg.uniforms)}else RA=W.uniforms;return RA}function q(W,rA){let RA;for(let sg=0,vg=r.length;sg<vg;sg++){const Ig=r[sg];if(Ig.cacheKey===rA){RA=Ig,++RA.usedTimes;break}}return RA===void 0&&(RA=new n0(C,rA,W,B),r.push(RA)),RA}function Z(W){if(--W.usedTimes===0){const rA=r.indexOf(W);r[rA]=r[r.length-1],r.pop(),W.destroy()}}function CA(W){s.remove(W)}function pA(){s.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:Y,acquireProgram:q,releaseProgram:Z,releaseShaderCache:CA,programs:r,dispose:pA}}function h0(){let C=new WeakMap;function A(B){let E=C.get(B);return E===void 0&&(E={},C.set(B,E)),E}function g(B){C.delete(B)}function I(B,E,n){C.get(B)[E]=n}function e(){C=new WeakMap}return{get:A,remove:g,update:I,dispose:e}}function c0(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function Xr(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function zr(){const C=[];let A=0;const g=[],I=[],e=[];function B(){A=0,g.length=0,I.length=0,e.length=0}function E(D,f,y,S,R,M){let b=C[A];return b===void 0?(b={id:D.id,object:D,geometry:f,material:y,groupOrder:S,renderOrder:D.renderOrder,z:R,group:M},C[A]=b):(b.id=D.id,b.object=D,b.geometry=f,b.material=y,b.groupOrder=S,b.renderOrder=D.renderOrder,b.z=R,b.group=M),A++,b}function n(D,f,y,S,R,M){const b=E(D,f,y,S,R,M);y.transmission>0?I.push(b):y.transparent===!0?e.push(b):g.push(b)}function s(D,f,y,S,R,M){const b=E(D,f,y,S,R,M);y.transmission>0?I.unshift(b):y.transparent===!0?e.unshift(b):g.unshift(b)}function r(D,f){g.length>1&&g.sort(D||c0),I.length>1&&I.sort(f||Xr),e.length>1&&e.sort(f||Xr)}function u(){for(let D=A,f=C.length;D<f;D++){const y=C[D];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:g,transmissive:I,transparent:e,init:B,push:n,unshift:s,finish:u,sort:r}}function l0(){let C=new WeakMap;function A(I,e){const B=C.get(I);let E;return B===void 0?(E=new zr,C.set(I,[E])):e>=B.length?(E=new zr,B.push(E)):E=B[e],E}function g(){C=new WeakMap}return{get:A,dispose:g}}function d0(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new BA,color:new Et};break;case"SpotLight":g={position:new BA,direction:new BA,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new BA,color:new Et,distance:0,decay:0};break;case"HemisphereLight":g={direction:new BA,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":g={color:new Et,position:new BA,halfWidth:new BA,halfHeight:new BA};break}return C[A.id]=g,g}}}function u0(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let g;switch(A.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pg};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pg};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pg,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=g,g}}}let D0=0;function f0(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function w0(C,A){const g=new d0,I=u0(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)e.probe.push(new BA);const B=new BA,E=new qt,n=new qt;function s(u,D){let f=0,y=0,S=0;for(let sg=0;sg<9;sg++)e.probe[sg].set(0,0,0);let R=0,M=0,b=0,T=0,Y=0,q=0,Z=0,CA=0,pA=0,W=0;u.sort(f0);const rA=D!==!0?Math.PI:1;for(let sg=0,vg=u.length;sg<vg;sg++){const Ig=u[sg],HA=Ig.color,lg=Ig.intensity,Fg=Ig.distance,Yg=Ig.shadow&&Ig.shadow.map?Ig.shadow.map.texture:null;if(Ig.isAmbientLight)f+=HA.r*lg*rA,y+=HA.g*lg*rA,S+=HA.b*lg*rA;else if(Ig.isLightProbe)for(let ug=0;ug<9;ug++)e.probe[ug].addScaledVector(Ig.sh.coefficients[ug],lg);else if(Ig.isDirectionalLight){const ug=g.get(Ig);if(ug.color.copy(Ig.color).multiplyScalar(Ig.intensity*rA),Ig.castShadow){const XA=Ig.shadow,ig=I.get(Ig);ig.shadowBias=XA.bias,ig.shadowNormalBias=XA.normalBias,ig.shadowRadius=XA.radius,ig.shadowMapSize=XA.mapSize,e.directionalShadow[R]=ig,e.directionalShadowMap[R]=Yg,e.directionalShadowMatrix[R]=Ig.shadow.matrix,q++}e.directional[R]=ug,R++}else if(Ig.isSpotLight){const ug=g.get(Ig);ug.position.setFromMatrixPosition(Ig.matrixWorld),ug.color.copy(HA).multiplyScalar(lg*rA),ug.distance=Fg,ug.coneCos=Math.cos(Ig.angle),ug.penumbraCos=Math.cos(Ig.angle*(1-Ig.penumbra)),ug.decay=Ig.decay,e.spot[b]=ug;const XA=Ig.shadow;if(Ig.map&&(e.spotLightMap[pA]=Ig.map,pA++,XA.updateMatrices(Ig),Ig.castShadow&&W++),e.spotLightMatrix[b]=XA.matrix,Ig.castShadow){const ig=I.get(Ig);ig.shadowBias=XA.bias,ig.shadowNormalBias=XA.normalBias,ig.shadowRadius=XA.radius,ig.shadowMapSize=XA.mapSize,e.spotShadow[b]=ig,e.spotShadowMap[b]=Yg,CA++}b++}else if(Ig.isRectAreaLight){const ug=g.get(Ig);ug.color.copy(HA).multiplyScalar(lg),ug.halfWidth.set(Ig.width*.5,0,0),ug.halfHeight.set(0,Ig.height*.5,0),e.rectArea[T]=ug,T++}else if(Ig.isPointLight){const ug=g.get(Ig);if(ug.color.copy(Ig.color).multiplyScalar(Ig.intensity*rA),ug.distance=Ig.distance,ug.decay=Ig.decay,Ig.castShadow){const XA=Ig.shadow,ig=I.get(Ig);ig.shadowBias=XA.bias,ig.shadowNormalBias=XA.normalBias,ig.shadowRadius=XA.radius,ig.shadowMapSize=XA.mapSize,ig.shadowCameraNear=XA.camera.near,ig.shadowCameraFar=XA.camera.far,e.pointShadow[M]=ig,e.pointShadowMap[M]=Yg,e.pointShadowMatrix[M]=Ig.shadow.matrix,Z++}e.point[M]=ug,M++}else if(Ig.isHemisphereLight){const ug=g.get(Ig);ug.skyColor.copy(Ig.color).multiplyScalar(lg*rA),ug.groundColor.copy(Ig.groundColor).multiplyScalar(lg*rA),e.hemi[Y]=ug,Y++}}T>0&&(A.isWebGL2||C.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=At.LTC_FLOAT_1,e.rectAreaLTC2=At.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=At.LTC_HALF_1,e.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=f,e.ambient[1]=y,e.ambient[2]=S;const RA=e.hash;(RA.directionalLength!==R||RA.pointLength!==M||RA.spotLength!==b||RA.rectAreaLength!==T||RA.hemiLength!==Y||RA.numDirectionalShadows!==q||RA.numPointShadows!==Z||RA.numSpotShadows!==CA||RA.numSpotMaps!==pA)&&(e.directional.length=R,e.spot.length=b,e.rectArea.length=T,e.point.length=M,e.hemi.length=Y,e.directionalShadow.length=q,e.directionalShadowMap.length=q,e.pointShadow.length=Z,e.pointShadowMap.length=Z,e.spotShadow.length=CA,e.spotShadowMap.length=CA,e.directionalShadowMatrix.length=q,e.pointShadowMatrix.length=Z,e.spotLightMatrix.length=CA+pA-W,e.spotLightMap.length=pA,e.numSpotLightShadowsWithMaps=W,RA.directionalLength=R,RA.pointLength=M,RA.spotLength=b,RA.rectAreaLength=T,RA.hemiLength=Y,RA.numDirectionalShadows=q,RA.numPointShadows=Z,RA.numSpotShadows=CA,RA.numSpotMaps=pA,e.version=D0++)}function r(u,D){let f=0,y=0,S=0,R=0,M=0;const b=D.matrixWorldInverse;for(let T=0,Y=u.length;T<Y;T++){const q=u[T];if(q.isDirectionalLight){const Z=e.directional[f];Z.direction.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(q.target.matrixWorld),Z.direction.sub(B),Z.direction.transformDirection(b),f++}else if(q.isSpotLight){const Z=e.spot[S];Z.position.setFromMatrixPosition(q.matrixWorld),Z.position.applyMatrix4(b),Z.direction.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(q.target.matrixWorld),Z.direction.sub(B),Z.direction.transformDirection(b),S++}else if(q.isRectAreaLight){const Z=e.rectArea[R];Z.position.setFromMatrixPosition(q.matrixWorld),Z.position.applyMatrix4(b),n.identity(),E.copy(q.matrixWorld),E.premultiply(b),n.extractRotation(E),Z.halfWidth.set(q.width*.5,0,0),Z.halfHeight.set(0,q.height*.5,0),Z.halfWidth.applyMatrix4(n),Z.halfHeight.applyMatrix4(n),R++}else if(q.isPointLight){const Z=e.point[y];Z.position.setFromMatrixPosition(q.matrixWorld),Z.position.applyMatrix4(b),y++}else if(q.isHemisphereLight){const Z=e.hemi[M];Z.direction.setFromMatrixPosition(q.matrixWorld),Z.direction.transformDirection(b),M++}}}return{setup:s,setupView:r,state:e}}function jr(C,A){const g=new w0(C,A),I=[],e=[];function B(){I.length=0,e.length=0}function E(D){I.push(D)}function n(D){e.push(D)}function s(D){g.setup(I,D)}function r(D){g.setupView(I,D)}return{init:B,state:{lightsArray:I,shadowsArray:e,lights:g},setupLights:s,setupLightsView:r,pushLight:E,pushShadow:n}}function p0(C,A){let g=new WeakMap;function I(B,E=0){const n=g.get(B);let s;return n===void 0?(s=new jr(C,A),g.set(B,[s])):E>=n.length?(s=new jr(C,A),n.push(s)):s=n[E],s}function e(){g=new WeakMap}return{get:I,dispose:e}}class vs extends GI{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Hs extends GI{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new BA,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`):typeof readline=="function"&&(l=readline())!==null&&(l+=`
`);if(!l)return null;a.input=uQ(l,!0)}return a.input.shift()},put_char:function(a,l){l===null||l===10?(fI(zB(a.output,0)),a.output=[]):l!=0&&a.output.push(l)},fsync:function(a){a.output&&a.output.length>0&&(fI(zB(a.output,0)),a.output=[])}},default_tty1_ops:{put_char:function(a,l){l===null||l===10?(yI(zB(a.output,0)),a.output=[]):l!=0&&a.output.push(l)},fsync:function(a){a.output&&a.output.length>0&&(yI(zB(a.output,0)),a.output=[])}}};function Pn(a){yi()}var Pt={ops_table:null,mount:function(a){return Pt.createNode(null,"/",16895,0)},createNode:function(a,l,p,k){if(K.isBlkdev(p)||K.isFIFO(p))throw new K.ErrnoError(63);Pt.ops_table||(Pt.ops_table={dir:{node:{getattr:Pt.node_ops.getattr,setattr:Pt.node_ops.setattr,lookup:Pt.node_ops.lookup,mknod:Pt.node_ops.mknod,rename:Pt.node_ops.rename,unlink:Pt.node_ops.unlink,rmdir:Pt.node_ops.rmdir,readdir:Pt.node_ops.readdir,symlink:Pt.node_ops.symlink},stream:{llseek:Pt.stream_ops.llseek}},file:{node:{getattr:Pt.node_ops.getattr,setattr:Pt.node_ops.setattr},stream:{llseek:Pt.stream_ops.llseek,read:Pt.stream_ops.read,write:Pt.stream_ops.write,allocate:Pt.stream_ops.allocate,mmap:Pt.stream_ops.mmap,msync:Pt.stream_ops.msync}},link:{node:{getattr:Pt.node_ops.getattr,setattr:Pt.node_ops.setattr,readlink:Pt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Pt.node_ops.getattr,setattr:Pt.node_ops.setattr},stream:K.chrdev_stream_ops}});var _=K.createNode(a,l,p,k);return K.isDir(_.mode)?(_.node_ops=Pt.ops_table.dir.node,_.stream_ops=Pt.ops_table.dir.stream,_.contents={}):K.isFile(_.mode)?(_.node_ops=Pt.ops_table.file.node,_.stream_ops=Pt.ops_table.file.stream,_.usedBytes=0,_.contents=null):K.isLink(_.mode)?(_.node_ops=Pt.ops_table.link.node,_.stream_ops=Pt.ops_table.link.stream):K.isChrdev(_.mode)&&(_.node_ops=Pt.ops_table.chrdev.node,_.stream_ops=Pt.ops_table.chrdev.stream),_.timestamp=Date.now(),a&&(a.contents[l]=_,a.timestamp=_.timestamp),_},getFileDataAsTypedArray:function(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage:function(a,l){var p=a.contents?a.contents.length:0;if(!(p>=l)){l=Math.max(l,p*(p<1048576?2:1.125)>>>0),p!=0&&(l=Math.max(l,256));var k=a.contents;a.contents=new Uint8Array(l),a.usedBytes>0&&a.contents.set(k.subarray(0,a.usedBytes),0)}},resizeFileStorage:function(a,l){if(a.usedBytes!=l)if(l==0)a.contents=null,a.usedBytes=0;else{var p=a.contents;a.contents=new Uint8Array(l),p&&a.contents.set(p.subarray(0,Math.min(l,a.usedBytes))),a.usedBytes=l}},node_ops:{getattr:function(a){var l={};return l.dev=K.isChrdev(a.mode)?a.id:1,l.ino=a.id,l.mode=a.mode,l.nlink=1,l.uid=0,l.gid=0,l.rdev=a.rdev,K.isDir(a.mode)?l.size=4096:K.isFile(a.mode)?l.size=a.usedBytes:K.isLink(a.mode)?l.size=a.link.length:l.size=0,l.atime=new Date(a.timestamp),l.mtime=new Date(a.timestamp),l.ctime=new Date(a.timestamp),l.blksize=4096,l.blocks=Math.ceil(l.size/l.blksize),l},setattr:function(a,l){l.mode!==void 0&&(a.mode=l.mode),l.timestamp!==void 0&&(a.timestamp=l.timestamp),l.size!==void 0&&Pt.resizeFileStorage(a,l.size)},lookup:function(a,l){throw K.genericErrors[44]},mknod:function(a,l,p,k){return Pt.createNode(a,l,p,k)},rename:function(a,l,p){if(K.isDir(a.mode)){var k;try{k=K.lookupNode(l,p)}catch{}if(k)for(var _ in k.contents)throw new K.ErrnoError(55)}delete a.parent.contents[a.name],a.parent.timestamp=Date.now(),a.name=p,l.contents[p]=a,l.timestamp=a.parent.timestamp,a.parent=l},unlink:function(a,l){delete a.contents[l],a.timestamp=Date.now()},rmdir:function(a,l){var p=K.lookupNode(a,l);for(var k in p.contents)throw new K.ErrnoError(55);delete a.contents[l],a.timestamp=Date.now()},readdir:function(a){var l=[".",".."];for(var p in a.contents)a.contents.hasOwnProperty(p)&&l.push(p);return l},symlink:function(a,l,p){var k=Pt.createNode(a,l,41471,0);return k.link=p,k},readlink:function(a){if(!K.isLink(a.mode))throw new K.ErrnoError(28);return a.link}},stream_ops:{read:function(a,l,p,k,_){var $=a.node.contents;if(_>=a.node.usedBytes)return 0;var hA=Math.min(a.node.usedBytes-_,k);if(hA>8&&$.subarray)l.set($.subarray(_,_+hA),p);else for(var DA=0;DA<hA;DA++)l[p+DA]=$[_+DA];return hA},write:function(a,l,p,k,_,$){if(l.buffer===oe.buffer&&($=!1),!k)return 0;var hA=a.node;if(hA.timestamp=Date.now(),l.subarray&&(!hA.contents||hA.contents.subarray)){if($)return hA.contents=l.subarray(p,p+k),hA.usedBytes=k,k;if(hA.usedBytes===0&&_===0)return hA.contents=l.slice(p,p+k),hA.usedBytes=k,k;if(_+k<=hA.usedBytes)return hA.contents.set(l.subarray(p,p+k),_),k}if(Pt.expandFileStorage(hA,_+k),hA.contents.subarray&&l.subarray)hA.contents.set(l.subarray(p,p+k),_);else for(var DA=0;DA<k;DA++)hA.contents[_+DA]=l[p+DA];return hA.usedBytes=Math.max(hA.usedBytes,_+k),k},llseek:function(a,l,p){var k=l;if(p===1?k+=a.position:p===2&&K.isFile(a.node.mode)&&(k+=a.node.usedBytes),k<0)throw new K.ErrnoError(28);return k},allocate:function(a,l,p){Pt.expandFileStorage(a.node,l+p),a.node.usedBytes=Math.max(a.node.usedBytes,l+p)},mmap:function(a,l,p,k,_){if(!K.isFile(a.node.mode))throw new K.ErrnoError(43);var $,hA,DA=a.node.contents;if(2&_||DA.buffer!==pB){if((p>0||p+l<DA.length)&&(DA=DA.subarray?DA.subarray(p,p+l):Array.prototype.slice.call(DA,p,p+l)),hA=!0,!($=Pn()))throw new K.ErrnoError(48);oe.set(DA,$)}else hA=!1,$=DA.byteOffset;return{ptr:$,allocated:hA}},msync:function(a,l,p,k,_){if(!K.isFile(a.node.mode))throw new K.ErrnoError(43);return 2&_||Pt.stream_ops.write(a,l,0,k,p,!1),0}}},K={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(a=Ki.resolve(K.cwd(),a)))return{path:"",node:null};var p={follow_mount:!0,recurse_count:0};if((l=Object.assign(p,l)).recurse_count>8)throw new K.ErrnoError(32);for(var k=pI.normalizeArray(a.split("/").filter(function(Ng){return!!Ng}),!1),_=K.root,$="/",hA=0;hA<k.length;hA++){var DA=hA===k.length-1;if(DA&&l.parent)break;if(_=K.lookupNode(_,k[hA]),$=pI.join2($,k[hA]),K.isMountpoint(_)&&(!DA||DA&&l.follow_mount)&&(_=_.mounted.root),!DA||l.follow)for(var KA=0;K.isLink(_.mode);){var bA=K.readlink($);$=Ki.resolve(pI.dirname($),bA);var Gg=K.lookupPath($,{recurse_count:l.recurse_count+1});if(_=Gg.node,KA++>40)throw new K.ErrnoError(32)}}return{path:$,node:_}},getPath:function(a){for(var l;;){if(K.isRoot(a)){var p=a.mount.mountpoint;return l?p[p.length-1]!=="/"?p+"/"+l:p+l:p}l=l?a.name+"/"+l:a.name,a=a.parent}},hashName:function(a,l){for(var p=0,k=0;k<l.length;k++)p=(p<<5)-p+l.charCodeAt(k)|0;return(a+p>>>0)%K.nameTable.length},hashAddNode:function(a){var l=K.hashName(a.parent.id,a.name);a.name_next=K.nameTable[l],K.nameTable[l]=a},hashRemoveNode:function(a){var l=K.hashName(a.parent.id,a.name);if(K.nameTable[l]===a)K.nameTable[l]=a.name_next;else for(var p=K.nameTable[l];p;){if(p.name_next===a){p.name_next=a.name_next;break}p=p.name_next}},lookupNode:function(a,l){var p=K.mayLookup(a);if(p)throw new K.ErrnoError(p,a);for(var k=K.hashName(a.id,l),_=K.nameTable[k];_;_=_.name_next){var $=_.name;if(_.parent.id===a.id&&$===l)return _}return K.lookup(a,l)},createNode:function(a,l,p,k){var _=new K.FSNode(a,l,p,k);return K.hashAddNode(_),_},destroyNode:function(a){K.hashRemoveNode(a)},isRoot:function(a){return a===a.parent},isMountpoint:function(a){return!!a.mounted},isFile:function(a){return(61440&a)==32768},isDir:function(a){return(61440&a)==16384},isLink:function(a){return(61440&a)==40960},isChrdev:function(a){return(61440&a)==8192},isBlkdev:function(a){return(61440&a)==24576},isFIFO:function(a){return(61440&a)==4096},isSocket:function(a){return(49152&a)==49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(a){var l=K.flagModes[a];if(l===void 0)throw new Error("Unknown file open mode: "+a);return l},flagsToPermissionString:function(a){var l=["r","w","rw"][3&a];return 512&a&&(l+="w"),l},nodePermissions:function(a,l){return K.ignorePermissions||(!l.includes("r")||292&a.mode)&&(!l.includes("w")||146&a.mode)&&(!l.includes("x")||73&a.mode)?0:2},mayLookup:function(a){return K.nodePermissions(a,"x")||(a.node_ops.lookup?0:2)},mayCreate:function(a,l){try{return K.lookupNode(a,l),20}catch{}return K.nodePermissions(a,"wx")},mayDelete:function(a,l,p){var k;try{k=K.lookupNode(a,l)}catch($){return $.errno}var _=K.nodePermissions(a,"wx");if(_)return _;if(p){if(!K.isDir(k.mode))return 54;if(K.isRoot(k)||K.getPath(k)===K.cwd())return 10}else if(K.isDir(k.mode))return 31;return 0},mayOpen:function(a,l){return a?K.isLink(a.mode)?32:K.isDir(a.mode)&&(K.flagsToPermissionString(l)!=="r"||512&l)?31:K.nodePermissions(a,K.flagsToPermissionString(l)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K.MAX_OPEN_FDS,p=a;p<=l;p++)if(!K.streams[p])return p;throw new K.ErrnoError(33)},getStream:function(a){return K.streams[a]},createStream:function(a,l,p){K.FSStream||(K.FSStream=function(){this.shared={}},K.FSStream.prototype={},Object.defineProperties(K.FSStream.prototype,{object:{get:function(){return this.node},set:function(_){this.node=_}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return(2097155&this.flags)!=0}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(_){this.shared.flags=_}},position:{get:function(){return this.shared.position},set:function(_){this.shared.position=_}}})),a=Object.assign(new K.FSStream,a);var k=K.nextfd(l,p);return a.fd=k,K.streams[k]=a,a},closeStream:function(a){K.streams[a]=null},chrdev_stream_ops:{open:function(a){var l=K.getDevice(a.node.rdev);a.stream_ops=l.stream_ops,a.stream_ops.open&&a.stream_ops.open(a)},llseek:function(){throw new K.ErrnoError(70)}},major:function(a){return a>>8},minor:function(a){return 255&a},makedev:function(a,l){return a<<8|l},registerDevice:function(a,l){K.devices[a]={stream_ops:l}},getDevice:function(a){return K.devices[a]},getMounts:function(a){for(var l=[],p=[a];p.length;){var k=p.pop();l.push(k),p.push.apply(p,k.mounts)}return l},syncfs:function(a,l){typeof a=="function"&&(l=a,a=!1),K.syncFSRequests++,K.syncFSRequests>1&&yI("warning: "+K.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var p=K.getMounts(K.root.mount),k=0;function _(hA){return K.syncFSRequests--,l(hA)}function $(hA){if(hA)return $.errored?void 0:($.errored=!0,_(hA));++k>=p.length&&_(null)}p.forEach(function(hA){if(!hA.type.syncfs)return $(null);hA.type.syncfs(hA,a,$)})},mount:function(a,l,p){var k,_=p==="/",$=!p;if(_&&K.root)throw new K.ErrnoError(10);if(!_&&!$){var hA=K.lookupPath(p,{follow_mount:!1});if(p=hA.path,k=hA.node,K.isMountpoint(k))throw new K.ErrnoError(10);if(!K.isDir(k.mode))throw new K.ErrnoError(54)}var DA={type:a,opts:l,mountpoint:p,mounts:[]},KA=a.mount(DA);return KA.mount=DA,DA.root=KA,_?K.root=KA:k&&(k.mounted=DA,k.mount&&k.mount.mounts.push(DA)),KA},unmount:function(a){var l=K.lookupPath(a,{follow_mount:!1});if(!K.isMountpoint(l.node))throw new K.ErrnoError(28);var p=l.node,k=p.mounted,_=K.getMounts(k);Object.keys(K.nameTable).forEach(function(hA){for(var DA=K.nameTable[hA];DA;){var KA=DA.name_next;_.includes(DA.mount)&&K.destroyNode(DA),DA=KA}}),p.mounted=null;var $=p.mount.mounts.indexOf(k);p.mount.mounts.splice($,1)},lookup:function(a,l){return a.node_ops.lookup(a,l)},mknod:function(a,l,p){var k=K.lookupPath(a,{parent:!0}).node,_=pI.basename(a);if(!_||_==="."||_==="..")throw new K.ErrnoError(28);var $=K.mayCreate(k,_);if($)throw new K.ErrnoError($);if(!k.node_ops.mknod)throw new K.ErrnoError(63);return k.node_ops.mknod(k,_,l,p)},create:function(a,l){return l=l!==void 0?l:438,l&=4095,l|=32768,K.mknod(a,l,0)},mkdir:function(a,l){return l=l!==void 0?l:511,l&=1023,l|=16384,K.mknod(a,l,0)},mkdirTree:function(a,l){for(var p=a.split("/"),k="",_=0;_<p.length;++_)if(p[_]){k+="/"+p[_];try{K.mkdir(k,l)}catch($){if($.errno!=20)throw $}}},mkdev:function(a,l,p){return p===void 0&&(p=l,l=438),l|=8192,K.mknod(a,l,p)},symlink:function(a,l){if(!Ki.resolve(a))throw new K.ErrnoError(44);var p=K.lookupPath(l,{parent:!0}).node;if(!p)throw new K.ErrnoError(44);var k=pI.basename(l),_=K.mayCreate(p,k);if(_)throw new K.ErrnoError(_);if(!p.node_ops.symlink)throw new K.ErrnoError(63);return p.node_ops.symlink(p,k,a)},rename:function(a,l){var p,k,_=pI.dirname(a),$=pI.dirname(l),hA=pI.basename(a),DA=pI.basename(l);if(p=K.lookupPath(a,{parent:!0}).node,k=K.lookupPath(l,{parent:!0}).node,!p||!k)throw new K.ErrnoError(44);if(p.mount!==k.mount)throw new K.ErrnoError(75);var KA,bA=K.lookupNode(p,hA),Gg=Ki.relative(a,$);if(Gg.charAt(0)!==".")throw new K.ErrnoError(28);if((Gg=Ki.relative(l,_)).charAt(0)!==".")throw new K.ErrnoError(55);try{KA=K.lookupNode(k,DA)}catch{}if(bA!==KA){var Ng=K.isDir(bA.mode),Cg=K.mayDelete(p,hA,Ng);if(Cg)throw new K.ErrnoError(Cg);if(Cg=KA?K.mayDelete(k,DA,Ng):K.mayCreate(k,DA))throw new K.ErrnoError(Cg);if(!p.node_ops.rename)throw new K.ErrnoError(63);if(K.isMountpoint(bA)||KA&&K.isMountpoint(KA))throw new K.ErrnoError(10);if(k!==p&&(Cg=K.nodePermissions(p,"w")))throw new K.ErrnoError(Cg);K.hashRemoveNode(bA);try{p.node_ops.rename(bA,k,DA)}catch(xg){throw xg}finally{K.hashAddNode(bA)}}},rmdir:function(a){var l=K.lookupPath(a,{parent:!0}).node,p=pI.basename(a),k=K.lookupNode(l,p),_=K.mayDelete(l,p,!0);if(_)throw new K.ErrnoError(_);if(!l.node_ops.rmdir)throw new K.ErrnoError(63);if(K.isMountpoint(k))throw new K.ErrnoError(10);l.node_ops.rmdir(l,p),K.destroyNode(k)},readdir:function(a){var l=K.lookupPath(a,{follow:!0}).node;if(!l.node_ops.readdir)throw new K.ErrnoError(54);return l.node_ops.readdir(l)},unlink:function(a){var l=K.lookupPath(a,{parent:!0}).node;if(!l)throw new K.ErrnoError(44);var p=pI.basename(a),k=K.lookupNode(l,p),_=K.mayDelete(l,p,!1);if(_)throw new K.ErrnoError(_);if(!l.node_ops.unlink)throw new K.ErrnoError(63);if(K.isMountpoint(k))throw new K.ErrnoError(10);l.node_ops.unlink(l,p),K.destroyNode(k)},readlink:function(a){var l=K.lookupPath(a).node;if(!l)throw new K.ErrnoError(44);if(!l.node_ops.readlink)throw new K.ErrnoError(28);return Ki.resolve(K.getPath(l.parent),l.node_ops.readlink(l))},stat:function(a,l){var p=K.lookupPath(a,{follow:!l}).node;if(!p)throw new K.ErrnoError(44);if(!p.node_ops.getattr)throw new K.ErrnoError(63);return p.node_ops.getattr(p)},lstat:function(a){return K.stat(a,!0)},chmod:function(a,l,p){var k;if(!(k=typeof a=="string"?K.lookupPath(a,{follow:!p}).node:a).node_ops.setattr)throw new K.ErrnoError(63);k.node_ops.setattr(k,{mode:4095&l|-4096&k.mode,timestamp:Date.now()})},lchmod:function(a,l){K.chmod(a,l,!0)},fchmod:function(a,l){var p=K.getStream(a);if(!p)throw new K.ErrnoError(8);K.chmod(p.node,l)},chown:function(a,l,p,k){var _;if(!(_=typeof a=="string"?K.lookupPath(a,{follow:!k}).node:a).node_ops.setattr)throw new K.ErrnoError(63);_.node_ops.setattr(_,{timestamp:Date.now()})},lchown:function(a,l,p){K.chown(a,l,p,!0)},fchown:function(a,l,p){var k=K.getStream(a);if(!k)throw new K.ErrnoError(8);K.chown(k.node,l,p)},truncate:function(a,l){if(l<0)throw new K.ErrnoError(28);var p;if(!(p=typeof a=="string"?K.lookupPath(a,{follow:!0}).node:a).node_ops.setattr)throw new K.ErrnoError(63);if(K.isDir(p.mode))throw new K.ErrnoError(31);if(!K.isFile(p.mode))throw new K.ErrnoError(28);var k=K.nodePermissions(p,"w");if(k)throw new K.ErrnoError(k);p.node_ops.setattr(p,{size:l,timestamp:Date.now()})},ftruncate:function(a,l){var p=K.getStream(a);if(!p)throw new K.ErrnoError(8);if(!(2097155&p.flags))throw new K.ErrnoError(28);K.truncate(p.node,l)},utime:function(a,l,p){var k=K.lookupPath(a,{follow:!0}).node;k.node_ops.setattr(k,{timestamp:Math.max(l,p)})},open:function(a,l,p){if(a==="")throw new K.ErrnoError(44);var k;if(p=p===void 0?438:p,p=64&(l=typeof l=="string"?K.modeStringToFlags(l):l)?4095&p|32768:0,oA(a)=="object")k=a;else{a=pI.normalize(a);try{k=K.lookupPath(a,{follow:!(131072&l)}).node}catch{}}var _=!1;if(64&l)if(k){if(128&l)throw new K.ErrnoError(20)}else k=K.mknod(a,p,0),_=!0;if(!k)throw new K.ErrnoError(44);if(K.isChrdev(k.mode)&&(l&=-513),65536&l&&!K.isDir(k.mode))throw new K.ErrnoError(54);if(!_){var $=K.mayOpen(k,l);if($)throw new K.ErrnoError($)}512&l&&!_&&K.truncate(k,0),l&=-131713;var hA=K.createStream({node:k,path:K.getPath(k),flags:l,seekable:!0,position:0,stream_ops:k.stream_ops,ungotten:[],error:!1});return hA.stream_ops.open&&hA.stream_ops.open(hA),!m.logReadFiles||1&l||(K.readFiles||(K.readFiles={}),a in K.readFiles||(K.readFiles[a]=1)),hA},close:function(a){if(K.isClosed(a))throw new K.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(l){throw l}finally{K.closeStream(a.fd)}a.fd=null},isClosed:function(a){return a.fd===null},llseek:function(a,l,p){if(K.isClosed(a))throw new K.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new K.ErrnoError(70);if(p!=0&&p!=1&&p!=2)throw new K.ErrnoError(28);return a.position=a.stream_ops.llseek(a,l,p),a.ungotten=[],a.position},read:function(a,l,p,k,_){if(k<0||_<0)throw new K.ErrnoError(28);if(K.isClosed(a))throw new K.ErrnoError(8);if((2097155&a.flags)==1)throw new K.ErrnoError(8);if(K.isDir(a.node.mode))throw new K.ErrnoError(31);if(!a.stream_ops.read)throw new K.ErrnoError(28);var $=_!==void 0;if($){if(!a.seekable)throw new K.ErrnoError(70)}else _=a.position;var hA=a.stream_ops.read(a,l,p,k,_);return $||(a.position+=hA),hA},write:function(a,l,p,k,_,$){if(k<0||_<0)throw new K.ErrnoError(28);if(K.isClosed(a))throw new K.ErrnoError(8);if(!(2097155&a.flags))throw new K.ErrnoError(8);if(K.isDir(a.node.mode))throw new K.ErrnoError(31);if(!a.stream_ops.write)throw new K.ErrnoError(28);a.seekable&&1024&a.flags&&K.llseek(a,0,2);var hA=_!==void 0;if(hA){if(!a.seekable)throw new K.ErrnoError(70)}else _=a.position;var DA=a.stream_ops.write(a,l,p,k,_,$);return hA||(a.position+=DA),DA},allocate:function(a,l,p){if(K.isClosed(a))throw new K.ErrnoError(8);if(l<0||p<=0)throw new K.ErrnoError(28);if(!(2097155&a.flags))throw new K.ErrnoError(8);if(!K.isFile(a.node.mode)&&!K.isDir(a.node.mode))throw new K.ErrnoError(43);if(!a.stream_ops.allocate)throw new K.ErrnoError(138);a.stream_ops.allocate(a,l,p)},mmap:function(a,l,p,k,_){if(2&k&&!(2&_)&&(2097155&a.flags)!=2)throw new K.ErrnoError(2);if((2097155&a.flags)==1)throw new K.ErrnoError(2);if(!a.stream_ops.mmap)throw new K.ErrnoError(43);return a.stream_ops.mmap(a,l,p,k,_)},msync:function(a,l,p,k,_){return a&&a.stream_ops.msync?a.stream_ops.msync(a,l,p,k,_):0},munmap:function(a){return 0},ioctl:function(a,l,p){if(!a.stream_ops.ioctl)throw new K.ErrnoError(59);return a.stream_ops.ioctl(a,l,p)},readFile:function(a){var l,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(p.flags=p.flags||0,p.encoding=p.encoding||"binary",p.encoding!=="utf8"&&p.encoding!=="binary")throw new Error('Invalid encoding type "'+p.encoding+'"');var k=K.open(a,p.flags),_=K.stat(a),$=_.size,hA=new Uint8Array($);return K.read(k,hA,0,$,0),p.encoding==="utf8"?l=zB(hA,0):p.encoding==="binary"&&(l=hA),K.close(k),l},writeFile:function(a,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};p.flags=p.flags||577;var k=K.open(a,p.flags,p.mode);if(typeof l=="string"){var _=new Uint8Array(ji(l)+1),$=MC(l,_,0,_.length);K.write(k,_,0,$,void 0,p.canOwn)}else{if(!ArrayBuffer.isView(l))throw new Error("Unsupported data type");K.write(k,l,0,l.byteLength,void 0,p.canOwn)}K.close(k)},cwd:function(){return K.currentPath},chdir:function(a){var l=K.lookupPath(a,{follow:!0});if(l.node===null)throw new K.ErrnoError(44);if(!K.isDir(l.node.mode))throw new K.ErrnoError(54);var p=K.nodePermissions(l.node,"x");if(p)throw new K.ErrnoError(p);K.currentPath=l.path},createDefaultDirectories:function(){K.mkdir("/tmp"),K.mkdir("/home"),K.mkdir("/home/web_user")},createDefaultDevices:function(){K.mkdir("/dev"),K.registerDevice(K.makedev(1,3),{read:function(){return 0},write:function(l,p,k,_,$){return _}}),K.mkdev("/dev/null",K.makedev(1,3)),RB.register(K.makedev(5,0),RB.default_tty_ops),RB.register(K.makedev(6,0),RB.default_tty1_ops),K.mkdev("/dev/tty",K.makedev(5,0)),K.mkdev("/dev/tty1",K.makedev(6,0));var a=function(){if((typeof crypto>"u"?"undefined":oA(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var l=new Uint8Array(1);return function(){return crypto.getRandomValues(l),l[0]}}if(Vg)try{var p=H(654);return function(){return p.randomBytes(1)[0]}}catch{}return function(){return yi("randomDevice")}}();K.createDevice("/dev","random",a),K.createDevice("/dev","urandom",a),K.mkdir("/dev/shm"),K.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){K.mkdir("/proc");var a=K.mkdir("/proc/self");K.mkdir("/proc/self/fd"),K.mount({mount:function(){var l=K.createNode(a,"fd",16895,73);return l.node_ops={lookup:function(p,k){var _=+k,$=K.getStream(_);if(!$)throw new K.ErrnoError(8);var hA={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return $.path}}};return hA.parent=hA,hA}},l}},{},"/proc/self/fd")},createStandardStreams:function(){m.stdin?K.createDevice("/dev","stdin",m.stdin):K.symlink("/dev/tty","/dev/stdin"),m.stdout?K.createDevice("/dev","stdout",null,m.stdout):K.symlink("/dev/tty","/dev/stdout"),m.stderr?K.createDevice("/dev","stderr",null,m.stderr):K.symlink("/dev/tty1","/dev/stderr"),K.open("/dev/stdin",0),K.open("/dev/stdout",1),K.open("/dev/stderr",1)},ensureErrnoError:function(){K.ErrnoError||(K.ErrnoError=function(a,l){this.node=l,this.setErrno=function(p){this.errno=p},this.setErrno(a),this.message="FS error"},K.ErrnoError.prototype=new Error,K.ErrnoError.prototype.constructor=K.ErrnoError,[44].forEach(function(a){K.genericErrors[a]=new K.ErrnoError(a),K.genericErrors[a].stack="<generic error, no stack>"}))},staticInit:function(){K.ensureErrnoError(),K.nameTable=new Array(4096),K.mount(Pt,{},"/"),K.createDefaultDirectories(),K.createDefaultDevices(),K.createSpecialDirectories(),K.filesystems={MEMFS:Pt}},init:function(a,l,p){K.init.initialized=!0,K.ensureErrnoError(),m.stdin=a||m.stdin,m.stdout=l||m.stdout,m.stderr=p||m.stderr,K.createStandardStreams()},quit:function(){K.init.initialized=!1;for(var a=0;a<K.streams.length;a++){var l=K.streams[a];l&&K.close(l)}},getMode:function(a,l){var p=0;return a&&(p|=365),l&&(p|=146),p},findObject:function(a,l){var p=K.analyzePath(a,l);return p.exists?p.object:null},analyzePath:function(a,l){try{a=(k=K.lookupPath(a,{follow:!l})).path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var k=K.lookupPath(a,{parent:!0});p.parentExists=!0,p.parentPath=k.path,p.parentObject=k.node,p.name=pI.basename(a),k=K.lookupPath(a,{follow:!l}),p.exists=!0,p.path=k.path,p.object=k.node,p.name=k.node.name,p.isRoot=k.path==="/"}catch(_){p.error=_.errno}return p},createPath:function(a,l,p,k){a=typeof a=="string"?a:K.getPath(a);for(var _=l.split("/").reverse();_.length;){var $=_.pop();if($){var hA=pI.join2(a,$);try{K.mkdir(hA)}catch{}a=hA}}return hA},createFile:function(a,l,p,k,_){var $=pI.join2(typeof a=="string"?a:K.getPath(a),l),hA=K.getMode(k,_);return K.create($,hA)},createDataFile:function(a,l,p,k,_,$){var hA=l;a&&(a=typeof a=="string"?a:K.getPath(a),hA=l?pI.join2(a,l):a);var DA=K.getMode(k,_),KA=K.create(hA,DA);if(p){if(typeof p=="string"){for(var bA=new Array(p.length),Gg=0,Ng=p.length;Gg<Ng;++Gg)bA[Gg]=p.charCodeAt(Gg);p=bA}K.chmod(KA,146|DA);var Cg=K.open(KA,577);K.write(Cg,p,0,p.length,0,$),K.close(Cg),K.chmod(KA,DA)}return KA},createDevice:function(a,l,p,k){var _=pI.join2(typeof a=="string"?a:K.getPath(a),l),$=K.getMode(!!p,!!k);K.createDevice.major||(K.createDevice.major=64);var hA=K.makedev(K.createDevice.major++,0);return K.registerDevice(hA,{open:function(DA){DA.seekable=!1},close:function(DA){k&&k.buffer&&k.buffer.length&&k(10)},read:function(DA,KA,bA,Gg,Ng){for(var Cg=0,xg=0;xg<Gg;xg++){var jg;try{jg=p()}catch{throw new K.ErrnoError(29)}if(jg===void 0&&Cg===0)throw new K.ErrnoError(6);if(jg==null)break;Cg++,KA[bA+xg]=jg}return Cg&&(DA.node.timestamp=Date.now()),Cg},write:function(DA,KA,bA,Gg,Ng){for(var Cg=0;Cg<Gg;Cg++)try{k(KA[bA+Cg])}catch{throw new K.ErrnoError(29)}return Gg&&(DA.node.timestamp=Date.now()),Cg}}),K.mkdev(_,$,hA)},forceLoadFile:function(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!fA)throw new Error("Cannot load without read() or XMLHttpRequest.");try{a.contents=uQ(fA(a.url),!0),a.usedBytes=a.contents.length}catch{throw new K.ErrnoError(29)}},createLazyFile:function(a,l,p,k,_){function $(){this.lengthKnown=!1,this.chunks=[]}if($.prototype.get=function(Ng){if(!(Ng>this.length-1||Ng<0)){var Cg=Ng%this.chunkSize,xg=Ng/this.chunkSize|0;return this.getter(xg)[Cg]}},$.prototype.setDataGetter=function(Ng){this.getter=Ng},$.prototype.cacheLength=function(){var Ng=new XMLHttpRequest;if(Ng.open("HEAD",p,!1),Ng.send(null),!(Ng.status>=200&&Ng.status<300||Ng.status===304))throw new Error("Couldn't load "+p+". Status: "+Ng.status);var Cg,xg=Number(Ng.getResponseHeader("Content-length")),jg=(Cg=Ng.getResponseHeader("Accept-Ranges"))&&Cg==="bytes",EI=(Cg=Ng.getResponseHeader("Content-Encoding"))&&Cg==="gzip",iI=1048576;jg||(iI=xg);var hI=this;hI.setDataGetter(function(hg){var ut=hg*iI,dI=(hg+1)*iI-1;if(dI=Math.min(dI,xg-1),hI.chunks[hg]===void 0&&(hI.chunks[hg]=function(JI,GI){if(JI>GI)throw new Error("invalid range ("+JI+", "+GI+") or no bytes requested!");if(GI>xg-1)throw new Error("only "+xg+" bytes available! programmer error!");var vI=new XMLHttpRequest;if(vI.open("GET",p,!1),xg!==iI&&vI.setRequestHeader("Range","bytes="+JI+"-"+GI),vI.responseType="arraybuffer",vI.overrideMimeType&&vI.overrideMimeType("text/plain; charset=x-user-defined"),vI.send(null),!(vI.status>=200&&vI.status<300||vI.status===304))throw new Error("Couldn't load "+p+". Status: "+vI.status);return vI.response!==void 0?new Uint8Array(vI.response||[]):uQ(vI.responseText||"",!0)}(ut,dI)),hI.chunks[hg]===void 0)throw new Error("doXHR failed!");return hI.chunks[hg]}),!EI&&xg||(iI=xg=1,xg=this.getter(0).length,iI=xg,fI("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xg,this._chunkSize=iI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!Sg)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var hA=new $;Object.defineProperties(hA,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var DA={isDevice:!1,contents:hA}}else DA={isDevice:!1,url:p};var KA=K.createFile(a,l,DA,k,_);DA.contents?KA.contents=DA.contents:DA.url&&(KA.contents=null,KA.url=DA.url),Object.defineProperties(KA,{usedBytes:{get:function(){return this.contents.length}}});var bA={};function Gg(Ng,Cg,xg,jg,EI){var iI=Ng.node.contents;if(EI>=iI.length)return 0;var hI=Math.min(iI.length-EI,jg);if(iI.slice)for(var hg=0;hg<hI;hg++)Cg[xg+hg]=iI[EI+hg];else for(hg=0;hg<hI;hg++)Cg[xg+hg]=iI.get(EI+hg);return hI}return Object.keys(KA.stream_ops).forEach(function(Ng){var Cg=KA.stream_ops[Ng];bA[Ng]=function(){return K.forceLoadFile(KA),Cg.apply(null,arguments)}}),bA.read=function(Ng,Cg,xg,jg,EI){return K.forceLoadFile(KA),Gg(Ng,Cg,xg,jg,EI)},bA.mmap=function(Ng,Cg,xg,jg,EI){K.forceLoadFile(KA);var iI=Pn();if(!iI)throw new K.ErrnoError(48);return Gg(Ng,oe,iI,Cg,xg),{ptr:iI,allocated:!0}},KA.stream_ops=bA,KA},createPreloadedFile:function(a,l,p,k,_,$,hA,DA,KA,bA){var Gg=l?Ki.resolve(pI.join2(a,l)):a;function Ng(Cg){function xg(jg){bA&&bA(),DA||K.createDataFile(a,l,jg,k,_,KA),$&&$(),jB()}Browser.handledByPreloadPlugin(Cg,Gg,xg,function(){hA&&hA(),jB()})||xg(Cg)}SE(),typeof p=="string"?function(Cg,xg,jg,EI){var iI="al "+Cg;mA(Cg,function(hI){de(hI,'Loading data file "'+Cg+'" failed (no arrayBuffer).'),Ng(new Uint8Array(hI)),iI&&jB()},function(hI){if(!jg)throw'Loading data file "'+Cg+'" failed.';jg()}),iI&&SE()}(p,0,hA):Ng(p)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(a,l,p){l=l||function(){},p=p||function(){};var k=K.indexedDB();try{var _=k.open(K.DB_NAME(),K.DB_VERSION)}catch($){return p($)}_.onupgradeneeded=function(){fI("creating db"),_.result.createObjectStore(K.DB_STORE_NAME)},_.onsuccess=function(){var $=_.result.transaction([K.DB_STORE_NAME],"readwrite"),hA=$.objectStore(K.DB_STORE_NAME),DA=0,KA=0,bA=a.length;function Gg(){KA==0?l():p()}a.forEach(function(Ng){var Cg=hA.put(K.analyzePath(Ng).object.contents,Ng);Cg.onsuccess=function(){++DA+KA==bA&&Gg()},Cg.onerror=function(){KA++,DA+KA==bA&&Gg()}}),$.onerror=p},_.onerror=p},loadFilesFromDB:function(a,l,p){l=l||function(){},p=p||function(){};var k=K.indexedDB();try{var _=k.open(K.DB_NAME(),K.DB_VERSION)}catch($){return p($)}_.onupgradeneeded=p,_.onsuccess=function(){var $=_.result;try{var hA=$.transaction([K.DB_STORE_NAME],"readonly")}catch(Cg){return void p(Cg)}var DA=hA.objectStore(K.DB_STORE_NAME),KA=0,bA=0,Gg=a.length;function Ng(){bA==0?l():p()}a.forEach(function(Cg){var xg=DA.get(Cg);xg.onsuccess=function(){K.analyzePath(Cg).exists&&K.unlink(Cg),K.createDataFile(pI.dirname(Cg),pI.basename(Cg),xg.result,!0,!0,!0),++KA+bA==Gg&&Ng()},xg.onerror=function(){bA++,KA+bA==Gg&&Ng()}}),hA.onerror=p},_.onerror=p}},ie={DEFAULT_POLLMASK:5,calculateAt:function(a,l,p){if(pI.isAbs(l))return l;var k;if(k=a===-100?K.cwd():ie.getStreamFromFD(a).path,l.length==0){if(!p)throw new K.ErrnoError(44);return k}return pI.join2(k,l)},doStat:function(a,l,p){try{var k=a(l)}catch(_){if(_&&_.node&&pI.normalize(l)!==pI.normalize(K.getPath(_.node)))return-54;throw _}return ft[p>>2]=k.dev,ft[p+8>>2]=k.ino,ft[p+12>>2]=k.mode,cI[p+16>>2]=k.nlink,ft[p+20>>2]=k.uid,ft[p+24>>2]=k.gid,ft[p+28>>2]=k.rdev,_I=[k.size>>>0,(QI=k.size,+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[p+40>>2]=_I[0],ft[p+44>>2]=_I[1],ft[p+48>>2]=4096,ft[p+52>>2]=k.blocks,_I=[Math.floor(k.atime.getTime()/1e3)>>>0,(QI=Math.floor(k.atime.getTime()/1e3),+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[p+56>>2]=_I[0],ft[p+60>>2]=_I[1],cI[p+64>>2]=0,_I=[Math.floor(k.mtime.getTime()/1e3)>>>0,(QI=Math.floor(k.mtime.getTime()/1e3),+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[p+72>>2]=_I[0],ft[p+76>>2]=_I[1],cI[p+80>>2]=0,_I=[Math.floor(k.ctime.getTime()/1e3)>>>0,(QI=Math.floor(k.ctime.getTime()/1e3),+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[p+88>>2]=_I[0],ft[p+92>>2]=_I[1],cI[p+96>>2]=0,_I=[k.ino>>>0,(QI=k.ino,+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[p+104>>2]=_I[0],ft[p+108>>2]=_I[1],0},doMsync:function(a,l,p,k,_){var $=ae.slice(a,a+p);K.msync(l,$,_,p,k)},varargs:void 0,get:function(){return ie.varargs+=4,ft[ie.varargs-4>>2]},getStr:function(a){return lQ(a)},getStreamFromFD:function(a){var l=K.getStream(a);if(!l)throw new K.ErrnoError(8);return l}},DQ={};function fQ(a){for(;a.length;){var l=a.pop();a.pop()(l)}}function AC(a){return this.fromWireType(ft[a>>2])}var Yi={},GB={},Ii={};function NI(a){if(a===void 0)return"_unknown";var l=(a=a.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return l>=48&&l<=57?"_"+a:a}function NE(a,l){return a=NI(a),new Function("body","return function "+a+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(l)}function pg(a,l){var p=NE(l,function(k){this.name=l,this.message=k;var _=new Error(k).stack;_!==void 0&&(this.stack=this.toString()+`
`+_.replace(/^Error(:[^\n]*)?\n/,""))});return p.prototype=Object.create(a.prototype),p.prototype.constructor=p,p.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},p}var xe=void 0;function RC(a){throw new xe(a)}function $i(a,l,p){function k(DA){var KA=p(DA);KA.length!==a.length&&RC("Mismatched type converter count");for(var bA=0;bA<a.length;++bA)Be(a[bA],KA[bA])}a.forEach(function(DA){Ii[DA]=l});var _=new Array(l.length),$=[],hA=0;l.forEach(function(DA,KA){GB.hasOwnProperty(DA)?_[KA]=GB[DA]:($.push(DA),Yi.hasOwnProperty(DA)||(Yi[DA]=[]),Yi[DA].push(function(){_[KA]=GB[DA],++hA===$.length&&k(_)}))}),$.length===0&&k(_)}function AB(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a)}}var gC=void 0;function jI(a){for(var l="",p=a;ae[p];)l+=gC[ae[p++]];return l}var vi=void 0;function lI(a){throw new vi(a)}function Be(a,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in l))throw new TypeError("registerType registeredInstance requires argPackAdvance");var k=l.name;if(a||lI('type "'+k+'" must have a positive integer typeid pointer'),GB.hasOwnProperty(a)){if(p.ignoreDuplicateRegistrations)return;lI("Cannot register type '"+k+"' twice")}if(GB[a]=l,delete Ii[a],Yi.hasOwnProperty(a)){var _=Yi[a];delete Yi[a],_.forEach(function($){return $()})}}function wQ(a){lI(a.$$.ptrType.registeredClass.name+" instance already deleted")}var Ie=!1;function ei(a){}function GC(a){a.count.value-=1,a.count.value===0&&function(l){l.smartPtr?l.smartPtrType.rawDestructor(l.smartPtr):l.ptrType.registeredClass.rawDestructor(l.ptr)}(a)}function pQ(a,l,p){if(l===p)return a;if(p.baseClass===void 0)return null;var k=pQ(a,l,p.baseClass);return k===null?null:p.downcast(k)}var SC={},Et=[];function gB(){for(;Et.length;){var a=Et.pop();a.$$.deleteScheduled=!1,a.delete()}}var SB=void 0,oi={};function tC(a,l){return l.ptrType&&l.ptr||RC("makeClassHandle requires ptr and ptrType"),!!l.smartPtrType!=!!l.smartPtr&&RC("Both smartPtrType and smartPtr must be specified"),l.count={value:1},FC(Object.create(a,{$$:{value:l}}))}function FC(a){return typeof FinalizationRegistry>"u"?(FC=function(l){return l},a):(Ie=new FinalizationRegistry(function(l){GC(l.$$)}),FC=function(l){var p=l.$$;if(p.smartPtr){var k={$$:p};Ie.register(l,k,l)}return l},ei=function(l){return Ie.unregister(l)},FC(a))}function KI(){}function RI(a,l,p){if(a[l].overloadTable===void 0){var k=a[l];a[l]=function(){return a[l].overloadTable.hasOwnProperty(arguments.length)||lI("Function '"+p+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[l].overloadTable+")!"),a[l].overloadTable[arguments.length].apply(this,arguments)},a[l].overloadTable=[],a[l].overloadTable[k.argCount]=k}}function Pe(a,l,p){m.hasOwnProperty(a)?((p===void 0||m[a].overloadTable!==void 0&&m[a].overloadTable[p]!==void 0)&&lI("Cannot register public name '"+a+"' twice"),RI(m,a,a),m.hasOwnProperty(p)&&lI("Cannot register multiple overloads of a function with the same number of arguments ("+p+")!"),m[a].overloadTable[p]=l):(m[a]=l,p!==void 0&&(m[a].numArguments=p))}function NC(a,l,p,k,_,$,hA,DA){this.name=a,this.constructor=l,this.instancePrototype=p,this.rawDestructor=k,this.baseClass=_,this.getActualType=$,this.upcast=hA,this.downcast=DA,this.pureVirtualFunctions=[]}function UE(a,l,p){for(;l!==p;)l.upcast||lI("Expected null or instance of "+p.name+", got an instance of "+l.name),a=l.upcast(a),l=l.baseClass;return a}function yQ(a,l){if(l===null)return this.isReference&&lI("null is not a valid "+this.name),0;l.$$||lI('Cannot pass "'+FB(l)+'" as a '+this.name),l.$$.ptr||lI("Cannot pass deleted object as a pointer of type "+this.name);var p=l.$$.ptrType.registeredClass;return UE(l.$$.ptr,p,this.registeredClass)}function Ds(a,l){var p;if(l===null)return this.isReference&&lI("null is not a valid "+this.name),this.isSmartPointer?(p=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,p),p):0;l.$$||lI('Cannot pass "'+FB(l)+'" as a '+this.name),l.$$.ptr||lI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&l.$$.ptrType.isConst&&lI("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);var k=l.$$.ptrType.registeredClass;if(p=UE(l.$$.ptr,k,this.registeredClass),this.isSmartPointer)switch(l.$$.smartPtr===void 0&&lI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:l.$$.smartPtrType===this?p=l.$$.smartPtr:lI("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:p=l.$$.smartPtr;break;case 2:if(l.$$.smartPtrType===this)p=l.$$.smartPtr;else{var _=l.clone();p=this.rawShare(p,mi.toHandle(function(){_.delete()})),a!==null&&a.push(this.rawDestructor,p)}break;default:lI("Unsupporting sharing policy")}return p}function fs(a,l){if(l===null)return this.isReference&&lI("null is not a valid "+this.name),0;l.$$||lI('Cannot pass "'+FB(l)+'" as a '+this.name),l.$$.ptr||lI("Cannot pass deleted object as a pointer of type "+this.name),l.$$.ptrType.isConst&&lI("Cannot convert argument of type "+l.$$.ptrType.name+" to parameter type "+this.name);var p=l.$$.ptrType.registeredClass;return UE(l.$$.ptr,p,this.registeredClass)}function $I(a,l,p,k,_,$,hA,DA,KA,bA,Gg){this.name=a,this.registeredClass=l,this.isReference=p,this.isConst=k,this.isSmartPointer=_,this.pointeeType=$,this.sharingPolicy=hA,this.rawGetPointee=DA,this.rawConstructor=KA,this.rawShare=bA,this.rawDestructor=Gg,_||l.baseClass!==void 0?this.toWireType=Ds:k?(this.toWireType=yQ,this.destructorFunction=null):(this.toWireType=fs,this.destructorFunction=null)}function BA(a,l,p){m.hasOwnProperty(a)||RC("Replacing nonexistant public symbol"),m[a].overloadTable!==void 0&&p!==void 0?m[a].overloadTable[p]=l:(m[a]=l,m[a].argCount=p)}function si(a){return Hn.get(a)}function On(a,l,p){return a.includes("j")?function(k,_,$){var hA=m["dynCall_"+k];return $&&$.length?hA.apply(null,[_].concat($)):hA.call(null,_)}(a,l,p):si(l).apply(null,p)}function ue(a,l){var p,k,_,$=(a=jI(a)).includes("j")?(p=a,k=l,_=[],function(){return _.length=0,Object.assign(_,arguments),On(p,k,_)}):si(l);return typeof $!="function"&&lI("unknown function pointer with signature "+a+": "+l),$}var Mi=void 0;function tB(a){var l=kB(a),p=jI(l);return Ri(l),p}function IC(a,l){var p=[],k={};throw l.forEach(function _($){k[$]||GB[$]||(Ii[$]?Ii[$].forEach(_):(p.push($),k[$]=!0))}),new Mi(a+": "+p.map(tB).join([", "]))}function IB(a,l){for(var p=[],k=0;k<a;k++)p.push(cI[l+4*k>>2]);return p}function eB(a,l,p,k,_){var $=l.length;$<2&&lI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var hA=l[1]!==null&&p!==null,DA=!1,KA=1;KA<l.length;++KA)if(l[KA]!==null&&l[KA].destructorFunction===void 0){DA=!0;break}var bA=l[0].name!=="void",Gg="",Ng="";for(KA=0;KA<$-2;++KA)Gg+=(KA!==0?", ":"")+"arg"+KA,Ng+=(KA!==0?", ":"")+"arg"+KA+"Wired";var Cg="return function "+NI(a)+"("+Gg+`) {
if (arguments.length !== `+($-2)+`) {
throwBindingError('function `+a+" called with ' + arguments.length + ' arguments, expected "+($-2)+` args!');
}
`;DA&&(Cg+=`var destructors = [];
`);var xg=DA?"destructors":"null",jg=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],EI=[lI,k,_,fQ,l[0],l[1]];for(hA&&(Cg+="var thisWired = classParam.toWireType("+xg+`, this);
`),KA=0;KA<$-2;++KA)Cg+="var arg"+KA+"Wired = argType"+KA+".toWireType("+xg+", arg"+KA+"); // "+l[KA+2].name+`
`,jg.push("argType"+KA),EI.push(l[KA+2]);if(hA&&(Ng="thisWired"+(Ng.length>0?", ":"")+Ng),Cg+=(bA?"var rv = ":"")+"invoker(fn"+(Ng.length>0?", ":"")+Ng+`);
`,DA)Cg+=`runDestructors(destructors);
`;else for(KA=hA?1:2;KA<l.length;++KA){var iI=KA===1?"thisWired":"arg"+(KA-2)+"Wired";l[KA].destructorFunction!==null&&(Cg+=iI+"_dtor("+iI+"); // "+l[KA].name+`
`,jg.push(iI+"_dtor"),EI.push(l[KA].destructorFunction))}return bA&&(Cg+=`var ret = retType.fromWireType(rv);
return ret;
`),Cg+=`}
`,jg.push(Cg),function(hI,hg){if(!(hI instanceof Function))throw new TypeError("new_ called with constructor type "+oA(hI)+" which is not a function");var ut=NE(hI.name||"unknownFunctionName",function(){});ut.prototype=hI.prototype;var dI=new ut,JI=hI.apply(dI,hg);return JI instanceof Object?JI:dI}(Function,jg).apply(null,EI)}var iB=[],he=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Hi(a){a>4&&--he[a].refcount==0&&(he[a]=void 0,iB.push(a))}var mi={toValue:function(a){return a||lI("Cannot use deleted val. handle = "+a),he[a].value},toHandle:function(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var l=iB.length?iB.pop():he.length;return he[l]={refcount:1,value:a},l}}};function FB(a){if(a===null)return"null";var l=oA(a);return l==="object"||l==="array"||l==="function"?a.toString():""+a}function MQ(a,l){switch(l){case 2:return function(p){return this.fromWireType(Kn[p>>2])};case 3:return function(p){return this.fromWireType(GE[p>>3])};default:throw new TypeError("Unknown float type: "+a)}}function mQ(a,l,p){switch(l){case 0:return p?function(k){return oe[k]}:function(k){return ae[k]};case 1:return p?function(k){return ti[k>>1]}:function(k){return yB[k>>1]};case 2:return p?function(k){return ft[k>>2]}:function(k){return cI[k>>2]};default:throw new TypeError("Unknown integer type: "+a)}}var BB=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function kE(a,l){for(var p=a,k=p>>1,_=k+l/2;!(k>=_)&&yB[k];)++k;if((p=k<<1)-a>32&&BB)return BB.decode(ae.subarray(a,p));for(var $="",hA=0;!(hA>=l/2);++hA){var DA=ti[a+2*hA>>1];if(DA==0)break;$+=String.fromCharCode(DA)}return $}function ws(a,l,p){if(p===void 0&&(p=2147483647),p<2)return 0;for(var k=l,_=(p-=2)<2*a.length?p/2:a.length,$=0;$<_;++$){var hA=a.charCodeAt($);ti[l>>1]=hA,l+=2}return ti[l>>1]=0,l-k}function UC(a){return 2*a.length}function LE(a,l){for(var p=0,k="";!(p>=l/4);){var _=ft[a+4*p>>2];if(_==0)break;if(++p,_>=65536){var $=_-65536;k+=String.fromCharCode(55296|$>>10,56320|1023&$)}else k+=String.fromCharCode(_)}return k}function NB(a,l,p){if(p===void 0&&(p=2147483647),p<4)return 0;for(var k=l,_=k+p-4,$=0;$<a.length;++$){var hA=a.charCodeAt($);if(hA>=55296&&hA<=57343&&(hA=65536+((1023&hA)<<10)|1023&a.charCodeAt(++$)),ft[l>>2]=hA,(l+=4)+4>_)break}return ft[l>>2]=0,l-k}function qi(a){for(var l=0,p=0;p<a.length;++p){var k=a.charCodeAt(p);k>=55296&&k<=57343&&++p,l+=4}return l}function RQ(a){var l=ji(a)+1,p=De(l);return p&&MC(a,oe,p,l),p}var eC=[];function CB(a){try{return ne.grow(a-pB.byteLength+65535>>>16),vn(ne.buffer),1}catch{}}var kC={};function QB(){if(!QB.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":oA(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:NA||"./this.program"};for(var l in kC)kC[l]===void 0?delete a[l]:a[l]=kC[l];var p=[];for(var l in a)p.push(l+"="+a[l]);QB.strings=p}return QB.strings}function iC(a){return a%4==0&&(a%100!=0||a%400==0)}var BC=[31,29,31,30,31,30,31,31,30,31,30,31],qt=[31,28,31,30,31,30,31,31,30,31,30,31];function UB(a,l,p,k){var _=ft[k+40>>2],$={tm_sec:ft[k>>2],tm_min:ft[k+4>>2],tm_hour:ft[k+8>>2],tm_mday:ft[k+12>>2],tm_mon:ft[k+16>>2],tm_year:ft[k+20>>2],tm_wday:ft[k+24>>2],tm_yday:ft[k+28>>2],tm_isdst:ft[k+32>>2],tm_gmtoff:ft[k+36>>2],tm_zone:_?lQ(_):""},hA=lQ(p),DA={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var KA in DA)hA=hA.replace(new RegExp(KA,"g"),DA[KA]);var bA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Gg=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ng(hg,ut,dI){for(var JI=typeof hg=="number"?hg.toString():hg||"";JI.length<ut;)JI=dI[0]+JI;return JI}function Cg(hg,ut){return Ng(hg,ut,"0")}function xg(hg,ut){function dI(GI){return GI<0?-1:GI>0?1:0}var JI;return(JI=dI(hg.getFullYear()-ut.getFullYear()))===0&&(JI=dI(hg.getMonth()-ut.getMonth()))===0&&(JI=dI(hg.getDate()-ut.getDate())),JI}function jg(hg){switch(hg.getDay()){case 0:return new Date(hg.getFullYear()-1,11,29);case 1:return hg;case 2:return new Date(hg.getFullYear(),0,3);case 3:return new Date(hg.getFullYear(),0,2);case 4:return new Date(hg.getFullYear(),0,1);case 5:return new Date(hg.getFullYear()-1,11,31);case 6:return new Date(hg.getFullYear()-1,11,30)}}function EI(hg){var ut=function(Ce,xB){for(var AI=new Date(Ce.getTime());xB>0;){var ys=iC(AI.getFullYear()),JE=AI.getMonth(),Vn=(ys?BC:qt)[JE];if(!(xB>Vn-AI.getDate()))return AI.setDate(AI.getDate()+xB),AI;xB-=Vn-AI.getDate()+1,AI.setDate(1),JE<11?AI.setMonth(JE+1):(AI.setMonth(0),AI.setFullYear(AI.getFullYear()+1))}return AI}(new Date(hg.tm_year+1900,0,1),hg.tm_yday),dI=new Date(ut.getFullYear(),0,4),JI=new Date(ut.getFullYear()+1,0,4),GI=jg(dI),vI=jg(JI);return xg(GI,ut)<=0?xg(vI,ut)<=0?ut.getFullYear()+1:ut.getFullYear():ut.getFullYear()-1}var iI={"%a":function(hg){return bA[hg.tm_wday].substring(0,3)},"%A":function(hg){return bA[hg.tm_wday]},"%b":function(hg){return Gg[hg.tm_mon].substring(0,3)},"%B":function(hg){return Gg[hg.tm_mon]},"%C":function(hg){return Cg((hg.tm_year+1900)/100|0,2)},"%d":function(hg){return Cg(hg.tm_mday,2)},"%e":function(hg){return Ng(hg.tm_mday,2," ")},"%g":function(hg){return EI(hg).toString().substring(2)},"%G":function(hg){return EI(hg)},"%H":function(hg){return Cg(hg.tm_hour,2)},"%I":function(hg){var ut=hg.tm_hour;return ut==0?ut=12:ut>12&&(ut-=12),Cg(ut,2)},"%j":function(hg){return Cg(hg.tm_mday+function(ut,dI){for(var JI=0,GI=0;GI<=dI;JI+=ut[GI++]);return JI}(iC(hg.tm_year+1900)?BC:qt,hg.tm_mon-1),3)},"%m":function(hg){return Cg(hg.tm_mon+1,2)},"%M":function(hg){return Cg(hg.tm_min,2)},"%n":function(){return`
`},"%p":function(hg){return hg.tm_hour>=0&&hg.tm_hour<12?"AM":"PM"},"%S":function(hg){return Cg(hg.tm_sec,2)},"%t":function(){return"	"},"%u":function(hg){return hg.tm_wday||7},"%U":function(hg){var ut=hg.tm_yday+7-hg.tm_wday;return Cg(Math.floor(ut/7),2)},"%V":function(hg){var ut=Math.floor((hg.tm_yday+7-(hg.tm_wday+6)%7)/7);if((hg.tm_wday+371-hg.tm_yday-2)%7<=2&&ut++,ut){if(ut==53){var dI=(hg.tm_wday+371-hg.tm_yday)%7;dI==4||dI==3&&iC(hg.tm_year)||(ut=1)}}else{ut=52;var JI=(hg.tm_wday+7-hg.tm_yday-1)%7;(JI==4||JI==5&&iC(hg.tm_year%400-1))&&ut++}return Cg(ut,2)},"%w":function(hg){return hg.tm_wday},"%W":function(hg){var ut=hg.tm_yday+7-(hg.tm_wday+6)%7;return Cg(Math.floor(ut/7),2)},"%y":function(hg){return(hg.tm_year+1900).toString().substring(2)},"%Y":function(hg){return hg.tm_year+1900},"%z":function(hg){var ut=hg.tm_gmtoff,dI=ut>=0;return ut=(ut=Math.abs(ut)/60)/60*100+ut%60,(dI?"+":"-")+("0000"+ut).slice(-4)},"%Z":function(hg){return hg.tm_zone},"%%":function(){return"%"}};for(var KA in hA=hA.replace(/%%/g,"\0\0"),iI)hA.includes(KA)&&(hA=hA.replace(new RegExp(KA,"g"),iI[KA]($)));var hI=uQ(hA=hA.replace(/\0\0/g,"%"),!1);return hI.length>l?0:(function(hg,ut){oe.set(hg,ut)}(hI,a),hI.length-1)}var ii=function(a,l,p,k){a||(a=this),this.parent=a,this.mount=a.mount,this.mounted=null,this.id=K.nextInode++,this.name=l,this.mode=p,this.node_ops={},this.stream_ops={},this.rdev=k};Object.defineProperties(ii.prototype,{read:{get:function(){return(365&this.mode)==365},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return(146&this.mode)==146},set:function(a){a?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return K.isDir(this.mode)}},isDevice:{get:function(){return K.isChrdev(this.mode)}}}),K.FSNode=ii,K.staticInit(),xe=m.InternalError=pg(Error,"InternalError"),function(){for(var a=new Array(256),l=0;l<256;++l)a[l]=String.fromCharCode(l);gC=a}(),vi=m.BindingError=pg(Error,"BindingError"),KI.prototype.isAliasOf=function(a){if(!(this instanceof KI)||!(a instanceof KI))return!1;for(var l=this.$$.ptrType.registeredClass,p=this.$$.ptr,k=a.$$.ptrType.registeredClass,_=a.$$.ptr;l.baseClass;)p=l.upcast(p),l=l.baseClass;for(;k.baseClass;)_=k.upcast(_),k=k.baseClass;return l===k&&p===_},KI.prototype.clone=function(){if(this.$$.ptr||wQ(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var a,l=FC(Object.create(Object.getPrototypeOf(this),{$$:{value:(a=this.$$,{count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType})}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},KI.prototype.delete=function(){this.$$.ptr||wQ(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&lI("Object already scheduled for deletion"),ei(this),GC(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},KI.prototype.isDeleted=function(){return!this.$$.ptr},KI.prototype.deleteLater=function(){return this.$$.ptr||wQ(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&lI("Object already scheduled for deletion"),Et.push(this),Et.length===1&&SB&&SB(gB),this.$$.deleteScheduled=!0,this},m.getInheritedInstanceCount=function(){return Object.keys(oi).length},m.getLiveInheritedInstances=function(){var a=[];for(var l in oi)oi.hasOwnProperty(l)&&a.push(oi[l]);return a},m.flushPendingDeletes=gB,m.setDelayFunction=function(a){SB=a,Et.length&&SB&&SB(gB)},$I.prototype.getPointee=function(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a},$I.prototype.destructor=function(a){this.rawDestructor&&this.rawDestructor(a)},$I.prototype.argPackAdvance=8,$I.prototype.readValueFromPointer=AC,$I.prototype.deleteObject=function(a){a!==null&&a.delete()},$I.prototype.fromWireType=function(a){var l=this.getPointee(a);if(!l)return this.destructor(a),null;var p=function(bA,Gg){return Gg=function(Ng,Cg){for(Cg===void 0&&lI("ptr should not be undefined");Ng.baseClass;)Cg=Ng.upcast(Cg),Ng=Ng.baseClass;return Cg}(bA,Gg),oi[Gg]}(this.registeredClass,l);if(p!==void 0){if(p.$$.count.value===0)return p.$$.ptr=l,p.$$.smartPtr=a,p.clone();var k=p.clone();return this.destructor(a),k}function _(){return this.isSmartPointer?tC(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:l,smartPtrType:this,smartPtr:a}):tC(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var $,hA=this.registeredClass.getActualType(l),DA=SC[hA];if(!DA)return _.call(this);$=this.isConst?DA.constPointerType:DA.pointerType;var KA=pQ(l,this.registeredClass,$.registeredClass);return KA===null?_.call(this):this.isSmartPointer?tC($.registeredClass.instancePrototype,{ptrType:$,ptr:KA,smartPtrType:this,smartPtr:a}):tC($.registeredClass.instancePrototype,{ptrType:$,ptr:KA})},Mi=m.UnboundTypeError=pg(Error,"UnboundTypeError"),m.count_emval_handles=function(){for(var a=0,l=5;l<he.length;++l)he[l]!==void 0&&++a;return a},m.get_first_emval=function(){for(var a=5;a<he.length;++a)if(he[a]!==void 0)return he[a];return null};var ps=typeof atob=="function"?atob:function(a){var l,p,k,_,$,hA,DA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",KA="",bA=0;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do l=DA.indexOf(a.charAt(bA++))<<2|(_=DA.indexOf(a.charAt(bA++)))>>4,p=(15&_)<<4|($=DA.indexOf(a.charAt(bA++)))>>2,k=(3&$)<<6|(hA=DA.indexOf(a.charAt(bA++))),KA+=String.fromCharCode(l),$!==64&&(KA+=String.fromCharCode(p)),hA!==64&&(KA+=String.fromCharCode(k));while(bA<a.length);return KA};function CC(a){if(Le(a))return function(l){if(typeof Vg=="boolean"&&Vg){var p=Buffer.from(l,"base64");return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}try{for(var k=ps(l),_=new Uint8Array(k.length),$=0;$<k.length;++$)_[$]=k.charCodeAt($);return _}catch{throw new Error("Converting base64 string to bytes failed.")}}(a.slice($B.length))}var ai,GQ={g:function(a){return De(a+24)+24},f:function(a,l,p){throw new us(a).init(l,p),a},o:function(a,l,p){ie.varargs=p;try{var k=ie.getStreamFromFD(a);switch(l){case 0:return(_=ie.get())<0?-28:K.createStream(k,_).fd;case 1:case 2:case 6:case 7:return 0;case 3:return k.flags;case 4:var _=ie.get();return k.flags|=_,0;case 5:return _=ie.get(),ti[_+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return ft[xE()>>2]=28,-1}}catch($){if(K===void 0||!($ instanceof K.ErrnoError))throw $;return-$.errno}},G:function(a,l,p){ie.varargs=p;try{var k=ie.getStreamFromFD(a);switch(l){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return k.tty?0:-59;case 21519:if(!k.tty)return-59;var _=ie.get();return ft[_>>2]=0,0;case 21520:return k.tty?-28:-59;case 21531:return _=ie.get(),K.ioctl(k,l,_);default:return-28}}catch($){if(K===void 0||!($ instanceof K.ErrnoError))throw $;return-$.errno}},H:function(a,l,p,k){ie.varargs=k;try{l=ie.getStr(l),l=ie.calculateAt(a,l);var _=k?ie.get():0;return K.open(l,p,_).fd}catch($){if(K===void 0||!($ instanceof K.ErrnoError))throw $;return-$.errno}},R:function(a){var l=DQ[a];delete DQ[a];var p=l.rawConstructor,k=l.rawDestructor,_=l.fields;$i([a],_.map(function($){return $.getterReturnType}).concat(_.map(function($){return $.setterArgumentType})),function($){var hA={};return _.forEach(function(DA,KA){var bA=DA.fieldName,Gg=$[KA],Ng=DA.getter,Cg=DA.getterContext,xg=$[KA+_.length],jg=DA.setter,EI=DA.setterContext;hA[bA]={read:function(iI){return Gg.fromWireType(Ng(Cg,iI))},write:function(iI,hI){var hg=[];jg(EI,iI,xg.toWireType(hg,hI)),fQ(hg)}}}),[{name:l.name,fromWireType:function(DA){var KA={};for(var bA in hA)KA[bA]=hA[bA].read(DA);return k(DA),KA},toWireType:function(DA,KA){for(var bA in hA)if(!(bA in KA))throw new TypeError('Missing field:  "'+bA+'"');var Gg=p();for(bA in hA)hA[bA].write(Gg,KA[bA]);return DA!==null&&DA.push(k,Gg),Gg},argPackAdvance:8,readValueFromPointer:AC,destructorFunction:k}]})},y:function(a,l,p,k,_){},L:function(a,l,p,k,_){var $=AB(p);Be(a,{name:l=jI(l),fromWireType:function(hA){return!!hA},toWireType:function(hA,DA){return DA?k:_},argPackAdvance:8,readValueFromPointer:function(hA){var DA;if(p===1)DA=oe;else if(p===2)DA=ti;else{if(p!==4)throw new TypeError("Unknown boolean type size: "+l);DA=ft}return this.fromWireType(DA[hA>>$])},destructorFunction:null})},U:function(a,l,p,k,_,$,hA,DA,KA,bA,Gg,Ng,Cg){Gg=jI(Gg),$=ue(_,$),DA&&(DA=ue(hA,DA)),bA&&(bA=ue(KA,bA)),Cg=ue(Ng,Cg);var xg=NI(Gg);Pe(xg,function(){IC("Cannot construct "+Gg+" due to unbound types",[k])}),$i([a,l,p],k?[k]:[],function(jg){var EI,iI;jg=jg[0],iI=k?(EI=jg.registeredClass).instancePrototype:KI.prototype;var hI=NE(xg,function(){if(Object.getPrototypeOf(this)!==hg)throw new vi("Use 'new' to construct "+Gg);if(ut.constructor_body===void 0)throw new vi(Gg+" has no accessible constructor");var vI=ut.constructor_body[arguments.length];if(vI===void 0)throw new vi("Tried to invoke ctor of "+Gg+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(ut.constructor_body).toString()+") parameters instead!");return vI.apply(this,arguments)}),hg=Object.create(iI,{constructor:{value:hI}});hI.prototype=hg;var ut=new NC(Gg,hI,hg,Cg,EI,$,DA,bA),dI=new $I(Gg,ut,!0,!1,!1),JI=new $I(Gg+"*",ut,!1,!1,!1),GI=new $I(Gg+" const*",ut,!1,!0,!1);return SC[a]={pointerType:JI,constPointerType:GI},BA(xg,hI),[dI,JI,GI]})},Q:function(a,l,p,k,_,$){de(l>0);var hA=IB(l,p);_=ue(k,_),$i([],[a],function(DA){var KA="constructor "+(DA=DA[0]).name;if(DA.registeredClass.constructor_body===void 0&&(DA.registeredClass.constructor_body=[]),DA.registeredClass.constructor_body[l-1]!==void 0)throw new vi("Cannot register multiple constructors with identical number of parameters ("+(l-1)+") for class '"+DA.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return DA.registeredClass.constructor_body[l-1]=function(){IC("Cannot construct "+DA.name+" due to unbound types",hA)},$i([],hA,function(bA){return bA.splice(1,0,null),DA.registeredClass.constructor_body[l-1]=eB(KA,bA,null,_,$),[]}),[]})},h:function(a,l,p,k,_,$,hA,DA){var KA=IB(p,k);l=jI(l),$=ue(_,$),$i([],[a],function(bA){var Gg=(bA=bA[0]).name+"."+l;function Ng(){IC("Cannot call "+Gg+" due to unbound types",KA)}l.startsWith("@@")&&(l=Symbol[l.substring(2)]),DA&&bA.registeredClass.pureVirtualFunctions.push(l);var Cg=bA.registeredClass.instancePrototype,xg=Cg[l];return xg===void 0||xg.overloadTable===void 0&&xg.className!==bA.name&&xg.argCount===p-2?(Ng.argCount=p-2,Ng.className=bA.name,Cg[l]=Ng):(RI(Cg,l,Gg),Cg[l].overloadTable[p-2]=Ng),$i([],KA,function(jg){var EI=eB(Gg,jg,bA,$,hA);return Cg[l].overloadTable===void 0?(EI.argCount=p-2,Cg[l]=EI):Cg[l].overloadTable[p-2]=EI,[]}),[]})},s:function(a,l,p){a=jI(a),$i([],[l],function(k){return k=k[0],m[a]=k.fromWireType(p),[]})},K:function(a,l){Be(a,{name:l=jI(l),fromWireType:function(p){var k=mi.toValue(p);return Hi(p),k},toWireType:function(p,k){return mi.toHandle(k)},argPackAdvance:8,readValueFromPointer:AC,destructorFunction:null})},r:function(a,l,p){var k=AB(p);Be(a,{name:l=jI(l),fromWireType:function(_){return _},toWireType:function(_,$){return $},argPackAdvance:8,readValueFromPointer:MQ(l,k),destructorFunction:null})},d:function(a,l,p,k,_,$){var hA=IB(l,p);a=jI(a),_=ue(k,_),Pe(a,function(){IC("Cannot call "+a+" due to unbound types",hA)},l-1),$i([],hA,function(DA){var KA=[DA[0],null].concat(DA.slice(1));return BA(a,eB(a,KA,null,_,$),l-1),[]})},e:function(a,l,p,k,_){l=jI(l);var $=AB(p),hA=function(bA){return bA};if(k===0){var DA=32-8*p;hA=function(bA){return bA<<DA>>>DA}}var KA=l.includes("unsigned");Be(a,{name:l,fromWireType:hA,toWireType:KA?function(bA,Gg){return this.name,Gg>>>0}:function(bA,Gg){return this.name,Gg},argPackAdvance:8,readValueFromPointer:mQ(l,$,k!==0),destructorFunction:null})},c:function(a,l,p){var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][l];function _($){var hA=cI,DA=hA[$>>=2],KA=hA[$+1];return new k(pB,KA,DA)}Be(a,{name:p=jI(p),fromWireType:_,argPackAdvance:8,readValueFromPointer:_},{ignoreDuplicateRegistrations:!0})},q:function(a,l){var p=(l=jI(l))==="std::string";Be(a,{name:l,fromWireType:function(k){var _,$=cI[k>>2],hA=k+4;if(p)for(var DA=hA,KA=0;KA<=$;++KA){var bA=hA+KA;if(KA==$||ae[bA]==0){var Gg=lQ(DA,bA-DA);_===void 0?_=Gg:(_+=String.fromCharCode(0),_+=Gg),DA=bA+1}}else{var Ng=new Array($);for(KA=0;KA<$;++KA)Ng[KA]=String.fromCharCode(ae[hA+KA]);_=Ng.join("")}return Ri(k),_},toWireType:function(k,_){var $;_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var hA=typeof _=="string";hA||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array||lI("Cannot pass non-string to std::string"),$=p&&hA?ji(_):_.length;var DA=De(4+$+1),KA=DA+4;if(cI[DA>>2]=$,p&&hA)MC(_,ae,KA,$+1);else if(hA)for(var bA=0;bA<$;++bA){var Gg=_.charCodeAt(bA);Gg>255&&(Ri(KA),lI("String has UTF-16 code units that do not fit in 8 bits")),ae[KA+bA]=Gg}else for(bA=0;bA<$;++bA)ae[KA+bA]=_[bA];return k!==null&&k.push(Ri,DA),DA},argPackAdvance:8,readValueFromPointer:AC,destructorFunction:function(k){Ri(k)}})},l:function(a,l,p){var k,_,$,hA,DA;p=jI(p),l===2?(k=kE,_=ws,hA=UC,$=function(){return yB},DA=1):l===4&&(k=LE,_=NB,hA=qi,$=function(){return cI},DA=2),Be(a,{name:p,fromWireType:function(KA){for(var bA,Gg=cI[KA>>2],Ng=$(),Cg=KA+4,xg=0;xg<=Gg;++xg){var jg=KA+4+xg*l;if(xg==Gg||Ng[jg>>DA]==0){var EI=k(Cg,jg-Cg);bA===void 0?bA=EI:(bA+=String.fromCharCode(0),bA+=EI),Cg=jg+l}}return Ri(KA),bA},toWireType:function(KA,bA){typeof bA!="string"&&lI("Cannot pass non-string to C++ string type "+p);var Gg=hA(bA),Ng=De(4+Gg+l);return cI[Ng>>2]=Gg>>DA,_(bA,Ng+4,Gg+l),KA!==null&&KA.push(Ri,Ng),Ng},argPackAdvance:8,readValueFromPointer:AC,destructorFunction:function(KA){Ri(KA)}})},T:function(a,l,p,k,_,$){DQ[a]={name:jI(l),rawConstructor:ue(p,k),rawDestructor:ue(_,$),fields:[]}},S:function(a,l,p,k,_,$,hA,DA,KA,bA){DQ[a].fields.push({fieldName:jI(l),getterReturnType:p,getter:ue(k,_),getterContext:$,setterArgumentType:hA,setter:ue(DA,KA),setterContext:bA})},M:function(a,l){Be(a,{isVoid:!0,name:l=jI(l),argPackAdvance:0,fromWireType:function(){},toWireType:function(p,k){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:Hi,P:function(a){a>4&&(he[a].refcount+=1)},N:function(a,l){var p,k;(k=GB[p=a])===void 0&&lI("_emval_take_value has unknown type "+tB(p));var _=(a=k).readValueFromPointer(l);return mi.toHandle(_)},I:function(a,l){var p,k=new Date(1e3*(cI[(p=a)>>2]+4294967296*ft[p+4>>2]));ft[l>>2]=k.getSeconds(),ft[l+4>>2]=k.getMinutes(),ft[l+8>>2]=k.getHours(),ft[l+12>>2]=k.getDate(),ft[l+16>>2]=k.getMonth(),ft[l+20>>2]=k.getFullYear()-1900,ft[l+24>>2]=k.getDay();var _=new Date(k.getFullYear(),0,1),$=(k.getTime()-_.getTime())/864e5|0;ft[l+28>>2]=$,ft[l+36>>2]=-60*k.getTimezoneOffset();var hA=new Date(k.getFullYear(),6,1).getTimezoneOffset(),DA=_.getTimezoneOffset(),KA=0|(hA!=DA&&k.getTimezoneOffset()==Math.min(DA,hA));ft[l+32>>2]=KA},J:function a(l,p,k){a.called||(a.called=!0,function(_,$,hA){var DA=new Date().getFullYear(),KA=new Date(DA,0,1),bA=new Date(DA,6,1),Gg=KA.getTimezoneOffset(),Ng=bA.getTimezoneOffset(),Cg=Math.max(Gg,Ng);function xg(hg){var ut=hg.toTimeString().match(/\(([A-Za-z ]+)\)$/);return ut?ut[1]:"GMT"}ft[_>>2]=60*Cg,ft[$>>2]=+(Gg!=Ng);var jg=xg(KA),EI=xg(bA),iI=RQ(jg),hI=RQ(EI);Ng<Gg?(cI[hA>>2]=iI,cI[hA+4>>2]=hI):(cI[hA>>2]=hI,cI[hA+4>>2]=iI)}(l,p,k))},a:function(){yi("")},i:function(a,l,p){var k=function(_,$){var hA;for(eC.length=0,$>>=2;hA=ae[_++];)$+=hA!=105&$,eC.push(hA==105?ft[$]:GE[$++>>1]),++$;return eC}(l,p);return ds[a].apply(null,k)},B:function(a){var l=ae.length,p=2147483648;if((a>>>=0)>p)return!1;for(var k,_=1;_<=4;_*=2){var $=l*(1+.2/_);if($=Math.min($,a+100663296),CB(Math.min(p,(k=Math.max(a,$))+(65536-k%65536)%65536)))return!0}return!1},C:function(a,l){var p=0;return QB().forEach(function(k,_){var $=l+p;cI[a+4*_>>2]=$,function(hA,DA,KA){for(var bA=0;bA<hA.length;++bA)oe[DA++>>0]=hA.charCodeAt(bA);oe[DA>>0]=0}(k,$),p+=k.length+1}),0},D:function(a,l){var p=QB();cI[a>>2]=p.length;var k=0;return p.forEach(function(_){k+=_.length+1}),cI[l>>2]=k,0},b:function(a,l){var p;p=a,Wn()||(m.onExit&&m.onExit(p),ni=!0),Kg(p,new FE(p))},m:function(a){try{var l=ie.getStreamFromFD(a);return K.close(l),0}catch(p){if(K===void 0||!(p instanceof K.ErrnoError))throw p;return p.errno}},F:function(a,l,p,k){try{var _=function($,hA,DA,KA){for(var bA=0,Gg=0;Gg<DA;Gg++){var Ng=cI[hA>>2],Cg=cI[hA+4>>2];hA+=8;var xg=K.read($,oe,Ng,Cg,void 0);if(xg<0)return-1;if(bA+=xg,xg<Cg)break}return bA}(ie.getStreamFromFD(a),l,p);return cI[k>>2]=_,0}catch($){if(K===void 0||!($ instanceof K.ErrnoError))throw $;return $.errno}},x:function(a,l,p,k,_){try{var $=(KA=p)+2097152>>>0<4194305-!!(DA=l)?(DA>>>0)+4294967296*KA:NaN;if(isNaN($))return 61;var hA=ie.getStreamFromFD(a);return K.llseek(hA,$,k),_I=[hA.position>>>0,(QI=hA.position,+Math.abs(QI)>=1?QI>0?(0|Math.min(+Math.floor(QI/4294967296),4294967295))>>>0:~~+Math.ceil((QI-+(~~QI>>>0))/4294967296)>>>0:0)],ft[_>>2]=_I[0],ft[_+4>>2]=_I[1],hA.getdents&&$===0&&k===0&&(hA.getdents=null),0}catch(bA){if(K===void 0||!(bA instanceof K.ErrnoError))throw bA;return bA.errno}var DA,KA},n:function(a,l,p,k){try{var _=function($,hA,DA,KA){for(var bA=0,Gg=0;Gg<DA;Gg++){var Ng=cI[hA>>2],Cg=cI[hA+4>>2];hA+=8;var xg=K.write($,oe,Ng,Cg,void 0);if(xg<0)return-1;bA+=xg}return bA}(ie.getStreamFromFD(a),l,p);return cI[k>>2]=_,0}catch($){if(K===void 0||!($ instanceof K.ErrnoError))throw $;return $.errno}},t:function(a,l){var p=EB();try{return si(a)(l)}catch(k){if(Ti(p),k!==k+0)throw k;ri(1,0)}},v:function(a,l,p){var k=EB();try{return si(a)(l,p)}catch(_){if(Ti(k),_!==_+0)throw _;ri(1,0)}},u:function(a,l,p,k){var _=EB();try{return si(a)(l,p,k)}catch($){if(Ti(_),$!==$+0)throw $;ri(1,0)}},j:function(a,l){var p=EB();try{si(a)(l)}catch(k){if(Ti(p),k!==k+0)throw k;ri(1,0)}},w:function(a,l,p){var k=EB();try{si(a)(l,p)}catch(_){if(Ti(k),_!==_+0)throw _;ri(1,0)}},E:function(a,l,p,k){var _=EB();try{si(a)(l,p,k)}catch($){if(Ti(_),$!==$+0)throw $;ri(1,0)}},k:function(a,l,p,k,_){var $=EB();try{si(a)(l,p,k,_)}catch(hA){if(Ti($),hA!==hA+0)throw hA;ri(1,0)}},V:UB,z:function(a,l,p,k){return UB(a,l,p,k)}},De=(function(){var a={a:GQ};function l(_,$){var hA,DA=_.exports;m.asm=DA,vn((ne=m.asm.W).buffer),Hn=m.asm.$,hA=m.asm.X,Tn.unshift(hA),jB()}function p(_){l(_.instance)}function k(_){return function(){if(!zt&&(Lg||Sg)){if(typeof fetch=="function"&&!zI(te))return fetch(te,{credentials:"same-origin"}).then(function($){if(!$.ok)throw"failed to load wasm binary file at '"+te+"'";return $.arrayBuffer()}).catch(function(){return dQ(te)});if(mA)return new Promise(function($,hA){mA(te,function(DA){$(new Uint8Array(DA))},hA)})}return Promise.resolve().then(function(){return dQ(te)})}().then(function($){return WebAssembly.instantiate($,a)}).then(function($){return $}).then(_,function($){yI("failed to asynchronously prepare wasm: "+$),yi($)})}if(SE(),m.instantiateWasm)try{return m.instantiateWasm(a,l)}catch(_){return yI("Module.instantiateWasm callback failed with error: "+_),!1}(zt||typeof WebAssembly.instantiateStreaming!="function"||Le(te)||zI(te)||Vg||typeof fetch!="function"?k(p):fetch(te,{credentials:"same-origin"}).then(function(_){return WebAssembly.instantiateStreaming(_,a).then(p,function($){return yI("wasm streaming compile failed: "+$),yI("falling back to ArrayBuffer instantiation"),k(p)})})).catch(sA)}(),m.___wasm_call_ctors=function(){return(m.___wasm_call_ctors=m.asm.X).apply(null,arguments)},m._malloc=function(){return(De=m._malloc=m.asm.Y).apply(null,arguments)}),Ri=m._free=function(){return(Ri=m._free=m.asm.Z).apply(null,arguments)},xE=m.___errno_location=function(){return(xE=m.___errno_location=m.asm._).apply(null,arguments)},kB=m.___getTypeName=function(){return(kB=m.___getTypeName=m.asm.aa).apply(null,arguments)},ri=(m.__embind_initialize_bindings=function(){return(m.__embind_initialize_bindings=m.asm.ba).apply(null,arguments)},m._setThrew=function(){return(ri=m._setThrew=m.asm.ca).apply(null,arguments)}),EB=m.stackSave=function(){return(EB=m.stackSave=m.asm.da).apply(null,arguments)},Ti=m.stackRestore=function(){return(Ti=m.stackRestore=m.asm.ea).apply(null,arguments)},LB=m.___cxa_is_pointer_type=function(){return(LB=m.___cxa_is_pointer_type=m.asm.fa).apply(null,arguments)};function Gi(a){function l(){ai||(ai=!0,m.calledRun=!0,ni||(m.noFSInit||K.init.initialized||K.init(),K.ignorePermissions=!1,mB(Tn),V(m),m.onRuntimeInitialized&&m.onRuntimeInitialized(),function(){if(m.postRun)for(typeof m.postRun=="function"&&(m.postRun=[m.postRun]);m.postRun.length;)p=m.postRun.shift(),_n.unshift(p);var p;mB(_n)}()))}MB>0||(function(){if(m.preRun)for(typeof m.preRun=="function"&&(m.preRun=[m.preRun]);m.preRun.length;)p=m.preRun.shift(),qn.unshift(p);var p;mB(qn)}(),MB>0||(m.setStatus?(m.setStatus("Running..."),setTimeout(function(){setTimeout(function(){m.setStatus("")},1),l()},1)):l()))}if(m.dynCall_jiji=function(){return(m.dynCall_jiji=m.asm.ga).apply(null,arguments)},m.dynCall_viijii=function(){return(m.dynCall_viijii=m.asm.ha).apply(null,arguments)},m.dynCall_iiiiij=function(){return(m.dynCall_iiiiij=m.asm.ia).apply(null,arguments)},m.dynCall_iiiiijj=function(){return(m.dynCall_iiiiijj=m.asm.ja).apply(null,arguments)},m.dynCall_iiiiiijj=function(){return(m.dynCall_iiiiiijj=m.asm.ka).apply(null,arguments)},m.FS=K,mC=function a(){ai||Gi(),ai||(mC=a)},m.preInit)for(typeof m.preInit=="function"&&(m.preInit=[m.preInit]);m.preInit.length>0;)m.preInit.pop()();return Gi(),m.ready});const WA=wA;function eg(m,V){return function(){return m.apply(V,arguments)}}const{toString:bg}=Object.prototype,{getPrototypeOf:kA}=Object,JA=(gg=Object.create(null),m=>{const V=bg.call(m);return gg[V]||(gg[V]=V.slice(8,-1).toLowerCase())});var gg;const yg=m=>(m=m.toLowerCase(),V=>JA(V)===m),mg=m=>V=>typeof V===m,{isArray:Bg}=Array,O=mg("undefined"),j=yg("ArrayBuffer"),gA=mg("string"),QA=mg("function"),yA=mg("number"),YA=m=>m!==null&&typeof m=="object",tg=m=>{if(JA(m)!=="object")return!1;const V=kA(m);return!(V!==null&&V!==Object.prototype&&Object.getPrototypeOf(V)!==null||Symbol.toStringTag in m||Symbol.iterator in m)},LA=yg("Date"),gt=yg("File"),kg=yg("Blob"),tt=yg("FileList"),Og=yg("URLSearchParams");function at(m,V,{allOwnKeys:sA=!1}={}){if(m==null)return;let fA,mA;if(typeof m!="object"&&(m=[m]),Bg(m))for(fA=0,mA=m.length;fA<mA;fA++)V.call(null,m[fA],fA,m);else{const xA=sA?Object.getOwnPropertyNames(m):Object.keys(m),FA=xA.length;let uA;for(fA=0;fA<FA;fA++)uA=xA[fA],V.call(null,m[uA],uA,m)}}function Ag(m,V){V=V.toLowerCase();const sA=Object.keys(m);let fA,mA=sA.length;for(;mA-- >0;)if(fA=sA[mA],V===fA.toLowerCase())return fA;return null}const VA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:G.g,wg=m=>!O(m)&&m!==VA,et=(Wg=typeof Uint8Array<"u"&&kA(Uint8Array),m=>Wg&&m instanceof Wg);var Wg;const Gt=yg("HTMLFormElement"),ct=(({hasOwnProperty:m})=>(V,sA)=>m.call(V,sA))(Object.prototype),Bt=yg("RegExp"),jt=(m,V)=>{const sA=Object.getOwnPropertyDescriptors(m),fA={};at(sA,(mA,xA)=>{V(mA,xA,m)!==!1&&(fA[xA]=mA)}),Object.defineProperties(m,fA)},$A={isArray:Bg,isArrayBuffer:j,isBuffer:function(m){return m!==null&&!O(m)&&m.constructor!==null&&!O(m.constructor)&&QA(m.constructor.isBuffer)&&m.constructor.isBuffer(m)},isFormData:m=>{const V="[object FormData]";return m&&(typeof FormData=="function"&&m instanceof FormData||bg.call(m)===V||QA(m.toString)&&m.toString()===V)},isArrayBufferView:function(m){let V;return V=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(m):m&&m.buffer&&j(m.buffer),V},isString:gA,isNumber:yA,isBoolean:m=>m===!0||m===!1,isObject:YA,isPlainObject:tg,isUndefined:O,isDate:LA,isFile:gt,isBlob:kg,isRegExp:Bt,isFunction:QA,isStream:m=>YA(m)&&QA(m.pipe),isURLSearchParams:Og,isTypedArray:et,isFileList:tt,forEach:at,merge:function m(){const{caseless:V}=wg(this)&&this||{},sA={},fA=(mA,xA)=>{const FA=V&&Ag(sA,xA)||xA;tg(sA[FA])&&tg(mA)?sA[FA]=m(sA[FA],mA):tg(mA)?sA[FA]=m({},mA):Bg(mA)?sA[FA]=mA.slice():sA[FA]=mA};for(let mA=0,xA=arguments.length;mA<xA;mA++)arguments[mA]&&at(arguments[mA],fA);return sA},extend:(m,V,sA,{allOwnKeys:fA}={})=>(at(V,(mA,xA)=>{sA&&QA(mA)?m[xA]=eg(mA,sA):m[xA]=mA},{allOwnKeys:fA}),m),trim:m=>m.trim?m.trim():m.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:m=>(m.charCodeAt(0)===65279&&(m=m.slice(1)),m),inherits:(m,V,sA,fA)=>{m.prototype=Object.create(V.prototype,fA),m.prototype.constructor=m,Object.defineProperty(m,"super",{value:V.prototype}),sA&&Object.assign(m.prototype,sA)},toFlatObject:(m,V,sA,fA)=>{let mA,xA,FA;const uA={};if(V=V||{},m==null)return V;do{for(mA=Object.getOwnPropertyNames(m),xA=mA.length;xA-- >0;)FA=mA[xA],fA&&!fA(FA,m,V)||uA[FA]||(V[FA]=m[FA],uA[FA]=!0);m=sA!==!1&&kA(m)}while(m&&(!sA||sA(m,V))&&m!==Object.prototype);return V},kindOf:JA,kindOfTest:yg,endsWith:(m,V,sA)=>{m=String(m),(sA===void 0||sA>m.length)&&(sA=m.length),sA-=V.length;const fA=m.indexOf(V,sA);return fA!==-1&&fA===sA},toArray:m=>{if(!m)return null;if(Bg(m))return m;let V=m.length;if(!yA(V))return null;const sA=new Array(V);for(;V-- >0;)sA[V]=m[V];return sA},forEachEntry:(m,V)=>{const sA=(m&&m[Symbol.iterator]).call(m);let fA;for(;(fA=sA.next())&&!fA.done;){const mA=fA.value;V.call(m,mA[0],mA[1])}},matchAll:(m,V)=>{let sA;const fA=[];for(;(sA=m.exec(V))!==null;)fA.push(sA);return fA},isHTMLForm:Gt,hasOwnProperty:ct,hasOwnProp:ct,reduceDescriptors:jt,freezeMethods:m=>{jt(m,(V,sA)=>{if(QA(m)&&["arguments","caller","callee"].indexOf(sA)!==-1)return!1;const fA=m[sA];QA(fA)&&(V.enumerable=!1,"writable"in V?V.writable=!1:V.set||(V.set=()=>{throw Error("Can not rewrite read-only method '"+sA+"'")}))})},toObjectSet:(m,V)=>{const sA={},fA=mA=>{mA.forEach(xA=>{sA[xA]=!0})};return Bg(m)?fA(m):fA(String(m).split(V)),sA},toCamelCase:m=>m.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(V,sA,fA){return sA.toUpperCase()+fA}),noop:()=>{},toFiniteNumber:(m,V)=>(m=+m,Number.isFinite(m)?m:V),findKey:Ag,global:VA,isContextDefined:wg,toJSONObject:m=>{const V=new Array(10),sA=(fA,mA)=>{if(YA(fA)){if(V.indexOf(fA)>=0)return;if(!("toJSON"in fA)){V[mA]=fA;const xA=Bg(fA)?[]:{};return at(fA,(FA,uA)=>{const aA=sA(FA,mA+1);!O(aA)&&(xA[uA]=aA)}),V[mA]=void 0,xA}}return fA};return sA(m,0)}};function iA(m,V,sA,fA,mA){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=m,this.name="AxiosError",V&&(this.code=V),sA&&(this.config=sA),fA&&(this.request=fA),mA&&(this.response=mA)}$A.inherits(iA,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const z=iA.prototype,jA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(m=>{jA[m]={value:m}}),Object.defineProperties(iA,jA),Object.defineProperty(z,"isAxiosError",{value:!0}),iA.from=(m,V,sA,fA,mA,xA)=>{const FA=Object.create(z);return $A.toFlatObject(m,FA,function(uA){return uA!==Error.prototype},uA=>uA!=="isAxiosError"),iA.call(FA,m.message,V,sA,fA,mA),FA.cause=m,FA.name=m.name,xA&&Object.assign(FA,xA),FA};const Eg=iA,Rg=H(230);function Xg(m){return $A.isPlainObject(m)||$A.isArray(m)}function yt(m){return $A.endsWith(m,"[]")?m.slice(0,-2):m}function dA(m,V,sA){return m?m.concat(V).map(function(fA,mA){return fA=yt(fA),!sA&&mA?"["+fA+"]":fA}).join(sA?".":""):V}const vA=$A.toFlatObject($A,{},null,function(m){return/^is[A-Z]/.test(m)}),Jg=function(m,V,sA){if(!$A.isObject(m))throw new TypeError("target must be an object");V=V||new(Rg||FormData);const fA=(sA=$A.toFlatObject(sA,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Sg,Vg){return!$A.isUndefined(Vg[Sg])})).metaTokens,mA=sA.visitor||NA,xA=sA.dots,FA=sA.indexes,uA=(sA.Blob||typeof Blob<"u"&&Blob)&&(aA=V)&&$A.isFunction(aA.append)&&aA[Symbol.toStringTag]==="FormData"&&aA[Symbol.iterator];var aA;if(!$A.isFunction(mA))throw new TypeError("visitor must be a function");function GA(Sg){if(Sg===null)return"";if($A.isDate(Sg))return Sg.toISOString();if(!uA&&$A.isBlob(Sg))throw new Eg("Blob is not supported. Use a Buffer instead.");return $A.isArrayBuffer(Sg)||$A.isTypedArray(Sg)?uA&&typeof Blob=="function"?new Blob([Sg]):Buffer.from(Sg):Sg}function NA(Sg,Vg,dt){let zt=Sg;if(Sg&&!dt&&typeof Sg=="object"){if($A.endsWith(Vg,"{}"))Vg=fA?Vg:Vg.slice(0,-2),Sg=JSON.stringify(Sg);else if($A.isArray(Sg)&&function(fI){return $A.isArray(fI)&&!fI.some(Xg)}(Sg)||$A.isFileList(Sg)||$A.endsWith(Vg,"[]")&&(zt=$A.toArray(Sg)))return Vg=yt(Vg),zt.forEach(function(fI,yI){!$A.isUndefined(fI)&&fI!==null&&V.append(FA===!0?dA([Vg],yI,xA):FA===null?Vg:Vg+"[]",GA(fI))}),!1}return!!Xg(Sg)||(V.append(dA(dt,Vg,xA),GA(Sg)),!1)}const Kg=[],Lg=Object.assign(vA,{defaultVisitor:NA,convertValue:GA,isVisitable:Xg});if(!$A.isObject(m))throw new TypeError("data must be an object");return function Sg(Vg,dt){if(!$A.isUndefined(Vg)){if(Kg.indexOf(Vg)!==-1)throw Error("Circular reference detected in "+dt.join("."));Kg.push(Vg),$A.forEach(Vg,function(zt,fI){(!($A.isUndefined(zt)||zt===null)&&mA.call(V,zt,$A.isString(fI)?fI.trim():fI,dt,Lg))===!0&&Sg(zt,dt?dt.concat(fI):[fI])}),Kg.pop()}}(m),V};function Qt(m){const V={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(m).replace(/[!'()~]|%20|%00/g,function(sA){return V[sA]})}function it(m,V){this._pairs=[],m&&Jg(m,this,V)}const rt=it.prototype;rt.append=function(m,V){this._pairs.push([m,V])},rt.toString=function(m){const V=m?function(sA){return m.call(this,sA,Qt)}:Qt;return this._pairs.map(function(sA){return V(sA[0])+"="+V(sA[1])},"").join("&")};const Dt=it;function vt(m){return encodeURIComponent(m).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function II(m,V,sA){if(!V)return m;const fA=sA&&sA.encode||vt,mA=sA&&sA.serialize;let xA;if(xA=mA?mA(V,sA):$A.isURLSearchParams(V)?V.toString():new Dt(V,sA).toString(fA),xA){const FA=m.indexOf("#");FA!==-1&&(m=m.slice(0,FA)),m+=(m.indexOf("?")===-1?"?":"&")+xA}return m}const wI=class{constructor(){this.handlers=[]}use(m,V,sA){return this.handlers.push({fulfilled:m,rejected:V,synchronous:!!sA&&sA.synchronous,runWhen:sA?sA.runWhen:null}),this.handlers.length-1}eject(m){this.handlers[m]&&(this.handlers[m]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(m){$A.forEach(this.handlers,function(V){V!==null&&m(V)})}},SA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ng=typeof URLSearchParams<"u"?URLSearchParams:Dt,Ug=FormData,$g=(()=>{let m;return(typeof navigator>"u"||(m=navigator.product)!=="ReactNative"&&m!=="NativeScript"&&m!=="NS")&&typeof window<"u"&&typeof document<"u"})(),lt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_t={isBrowser:!0,classes:{URLSearchParams:ng,FormData:Ug,Blob},isStandardBrowserEnv:$g,isStandardBrowserWebWorkerEnv:lt,protocols:["http","https","file","blob","url","data"]},ZI=function(m){function V(sA,fA,mA,xA){let FA=sA[xA++];const uA=Number.isFinite(+FA),aA=xA>=sA.length;return FA=!FA&&$A.isArray(mA)?mA.length:FA,aA?($A.hasOwnProp(mA,FA)?mA[FA]=[mA[FA],fA]:mA[FA]=fA,!uA):(mA[FA]&&$A.isObject(mA[FA])||(mA[FA]=[]),V(sA,fA,mA[FA],xA)&&$A.isArray(mA[FA])&&(mA[FA]=function(GA){const NA={},Kg=Object.keys(GA);let Lg;const Sg=Kg.length;let Vg;for(Lg=0;Lg<Sg;Lg++)Vg=Kg[Lg],NA[Vg]=GA[Vg];return NA}(mA[FA])),!uA)}if($A.isFormData(m)&&$A.isFunction(m.entries)){const sA={};return $A.forEachEntry(m,(fA,mA)=>{V(function(xA){return $A.matchAll(/\w+|\[(\w*)]/g,xA).map(FA=>FA[0]==="[]"?"":FA[1]||FA[0])}(fA),mA,sA,0)}),sA}return null},qI={"Content-Type":void 0},qe={transitional:SA,adapter:["xhr","http"],transformRequest:[function(m,V){const sA=V.getContentType()||"",fA=sA.indexOf("application/json")>-1,mA=$A.isObject(m);if(mA&&$A.isHTMLForm(m)&&(m=new FormData(m)),$A.isFormData(m))return fA&&fA?JSON.stringify(ZI(m)):m;if($A.isArrayBuffer(m)||$A.isBuffer(m)||$A.isStream(m)||$A.isFile(m)||$A.isBlob(m))return m;if($A.isArrayBufferView(m))return m.buffer;if($A.isURLSearchParams(m))return V.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),m.toString();let xA;if(mA){if(sA.indexOf("application/x-www-form-urlencoded")>-1)return function(FA,uA){return Jg(FA,new _t.classes.URLSearchParams,Object.assign({visitor:function(aA,GA,NA,Kg){return _t.isNode&&$A.isBuffer(aA)?(this.append(GA,aA.toString("base64")),!1):Kg.defaultVisitor.apply(this,arguments)}},uA))}(m,this.formSerializer).toString();if((xA=$A.isFileList(m))||sA.indexOf("multipart/form-data")>-1){const FA=this.env&&this.env.FormData;return Jg(xA?{"files[]":m}:m,FA&&new FA,this.formSerializer)}}return mA||fA?(V.setContentType("application/json",!1),function(FA,uA,aA){if($A.isString(FA))try{return(0,JSON.parse)(FA),$A.trim(FA)}catch(GA){if(GA.name!=="SyntaxError")throw GA}return(0,JSON.stringify)(FA)}(m)):m}],transformResponse:[function(m){const V=this.transitional||qe.transitional,sA=V&&V.forcedJSONParsing,fA=this.responseType==="json";if(m&&$A.isString(m)&&(sA&&!this.responseType||fA)){const mA=!(V&&V.silentJSONParsing)&&fA;try{return JSON.parse(m)}catch(xA){if(mA)throw xA.name==="SyntaxError"?Eg.from(xA,Eg.ERR_BAD_RESPONSE,this,null,this.response):xA}}return m}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(m){return m>=200&&m<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$A.forEach(["delete","get","head"],function(m){qe.headers[m]={}}),$A.forEach(["post","put","patch"],function(m){qe.headers[m]=$A.merge(qI)});const FI=qe,PI=$A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Re=Symbol("internals");function bi(m){return m&&String(m).trim().toLowerCase()}function Te(m){return m===!1||m==null?m:$A.isArray(m)?m.map(Te):String(m)}function wi(m,V,sA,fA){return $A.isFunction(fA)?fA.call(this,V,sA):$A.isString(V)?$A.isString(fA)?V.indexOf(fA)!==-1:$A.isRegExp(fA)?fA.test(V):void 0:void 0}class DB{constructor(V){V&&this.set(V)}set(V,sA,fA){const mA=this;function xA(uA,aA,GA){const NA=bi(aA);if(!NA)throw new Error("header name must be a non-empty string");const Kg=$A.findKey(mA,NA);(!Kg||mA[Kg]===void 0||GA===!0||GA===void 0&&mA[Kg]!==!1)&&(mA[Kg||aA]=Te(uA))}const FA=(uA,aA)=>$A.forEach(uA,(GA,NA)=>xA(GA,NA,aA));return $A.isPlainObject(V)||V instanceof this.constructor?FA(V,sA):$A.isString(V)&&(V=V.trim())&&!/^[-_a-zA-Z]+$/.test(V.trim())?FA((uA=>{const aA={};let GA,NA,Kg;return uA&&uA.split(`
`).forEach(function(Lg){Kg=Lg.indexOf(":"),GA=Lg.substring(0,Kg).trim().toLowerCase(),NA=Lg.substring(Kg+1).trim(),!GA||aA[GA]&&PI[GA]||(GA==="set-cookie"?aA[GA]?aA[GA].push(NA):aA[GA]=[NA]:aA[GA]=aA[GA]?aA[GA]+", "+NA:NA)}),aA})(V),sA):V!=null&&xA(sA,V,fA),this}get(V,sA){if(V=bi(V)){const fA=$A.findKey(this,V);if(fA){const mA=this[fA];if(!sA)return mA;if(sA===!0)return function(xA){const FA=Object.create(null),uA=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let aA;for(;aA=uA.exec(xA);)FA[aA[1]]=aA[2];return FA}(mA);if($A.isFunction(sA))return sA.call(this,mA,fA);if($A.isRegExp(sA))return sA.exec(mA);throw new TypeError("parser must be boolean|regexp|function")}}}has(V,sA){if(V=bi(V)){const fA=$A.findKey(this,V);return!(!fA||sA&&!wi(0,this[fA],fA,sA))}return!1}delete(V,sA){const fA=this;let mA=!1;function xA(FA){if(FA=bi(FA)){const uA=$A.findKey(fA,FA);!uA||sA&&!wi(0,fA[uA],uA,sA)||(delete fA[uA],mA=!0)}}return $A.isArray(V)?V.forEach(xA):xA(V),mA}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(V){const sA=this,fA={};return $A.forEach(this,(mA,xA)=>{const FA=$A.findKey(fA,xA);if(FA)return sA[FA]=Te(mA),void delete sA[xA];const uA=V?function(aA){return aA.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(GA,NA,Kg)=>NA.toUpperCase()+Kg)}(xA):String(xA).trim();uA!==xA&&delete sA[xA],sA[uA]=Te(mA),fA[uA]=!0}),this}concat(...V){return this.constructor.concat(this,...V)}toJSON(V){const sA=Object.create(null);return $A.forEach(this,(fA,mA)=>{fA!=null&&fA!==!1&&(sA[mA]=V&&$A.isArray(fA)?fA.join(", "):fA)}),sA}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([V,sA])=>V+": "+sA).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(V){return V instanceof this?V:new this(V)}static concat(V,...sA){const fA=new this(V);return sA.forEach(mA=>fA.set(mA)),fA}static accessor(V){const sA=(this[Re]=this[Re]={accessors:{}}).accessors,fA=this.prototype;function mA(xA){const FA=bi(xA);sA[FA]||(function(uA,aA){const GA=$A.toCamelCase(" "+aA);["get","set","has"].forEach(NA=>{Object.defineProperty(uA,NA+GA,{value:function(Kg,Lg,Sg){return this[NA].call(this,aA,Kg,Lg,Sg)},configurable:!0})})}(fA,xA),sA[FA]=!0)}return $A.isArray(V)?V.forEach(mA):mA(V),this}}DB.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),$A.freezeMethods(DB.prototype),$A.freezeMethods(DB);const IA=DB;function ZA(m,V){const sA=this||FI,fA=V||sA,mA=IA.from(fA.headers);let xA=fA.data;return $A.forEach(m,function(FA){xA=FA.call(sA,xA,mA.normalize(),V?V.status:void 0)}),mA.normalize(),xA}function og(m){return!(!m||!m.__CANCEL__)}function TA(m,V,sA){Eg.call(this,m??"canceled",Eg.ERR_CANCELED,V,sA),this.name="CanceledError"}$A.inherits(TA,Eg,{__CANCEL__:!0});const ag=TA,mt=_t.isStandardBrowserEnv?{write:function(m,V,sA,fA,mA,xA){const FA=[];FA.push(m+"="+encodeURIComponent(V)),$A.isNumber(sA)&&FA.push("expires="+new Date(sA).toGMTString()),$A.isString(fA)&&FA.push("path="+fA),$A.isString(mA)&&FA.push("domain="+mA),xA===!0&&FA.push("secure"),document.cookie=FA.join("; ")},read:function(m){const V=document.cookie.match(new RegExp("(^|;\\s*)("+m+")=([^;]*)"));return V?decodeURIComponent(V[3]):null},remove:function(m){this.write(m,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ut(m,V){return m&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(V)?function(sA,fA){return fA?sA.replace(/\/+$/,"")+"/"+fA.replace(/^\/+/,""):sA}(m,V):V}const Ht=_t.isStandardBrowserEnv?function(){const m=/(msie|trident)/i.test(navigator.userAgent),V=document.createElement("a");let sA;function fA(mA){let xA=mA;return m&&(V.setAttribute("href",xA),xA=V.href),V.setAttribute("href",xA),{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:V.pathname.charAt(0)==="/"?V.pathname:"/"+V.pathname}}return sA=fA(window.location.href),function(mA){const xA=$A.isString(mA)?fA(mA):mA;return xA.protocol===sA.protocol&&xA.host===sA.host}}():function(){return!0};function Wt(m,V){let sA=0;const fA=function(mA,xA){mA=mA||10;const FA=new Array(mA),uA=new Array(mA);let aA,GA=0,NA=0;return xA=xA!==void 0?xA:1e3,function(Kg){const Lg=Date.now(),Sg=uA[NA];aA||(aA=Lg),FA[GA]=Kg,uA[GA]=Lg;let Vg=NA,dt=0;for(;Vg!==GA;)dt+=FA[Vg++],Vg%=mA;if(GA=(GA+1)%mA,GA===NA&&(NA=(NA+1)%mA),Lg-aA<xA)return;const zt=Sg&&Lg-Sg;return zt?Math.round(1e3*dt/zt):void 0}}(50,250);return mA=>{const xA=mA.loaded,FA=mA.lengthComputable?mA.total:void 0,uA=xA-sA,aA=fA(uA);sA=xA;const GA={loaded:xA,total:FA,progress:FA?xA/FA:void 0,bytes:uA,rate:aA||void 0,estimated:aA&&FA&&xA<=FA?(FA-xA)/aA:void 0,event:mA};GA[V?"download":"upload"]=!0,m(GA)}}const eI={http:null,xhr:typeof XMLHttpRequest<"u"&&function(m){return new Promise(function(V,sA){let fA=m.data;const mA=IA.from(m.headers).normalize(),xA=m.responseType;let FA;function uA(){m.cancelToken&&m.cancelToken.unsubscribe(FA),m.signal&&m.signal.removeEventListener("abort",FA)}$A.isFormData(fA)&&(_t.isStandardBrowserEnv||_t.isStandardBrowserWebWorkerEnv)&&mA.setContentType(!1);let aA=new XMLHttpRequest;if(m.auth){const Lg=m.auth.username||"",Sg=m.auth.password?unescape(encodeURIComponent(m.auth.password)):"";mA.set("Authorization","Basic "+btoa(Lg+":"+Sg))}const GA=Ut(m.baseURL,m.url);function NA(){if(!aA)return;const Lg=IA.from("getAllResponseHeaders"in aA&&aA.getAllResponseHeaders());(function(Sg,Vg,dt){const zt=dt.config.validateStatus;dt.status&&zt&&!zt(dt.status)?Vg(new Eg("Request failed with status code "+dt.status,[Eg.ERR_BAD_REQUEST,Eg.ERR_BAD_RESPONSE][Math.floor(dt.status/100)-4],dt.config,dt.request,dt)):Sg(dt)})(function(Sg){V(Sg),uA()},function(Sg){sA(Sg),uA()},{data:xA&&xA!=="text"&&xA!=="json"?aA.response:aA.responseText,status:aA.status,statusText:aA.statusText,headers:Lg,config:m,request:aA}),aA=null}if(aA.open(m.method.toUpperCase(),II(GA,m.params,m.paramsSerializer),!0),aA.timeout=m.timeout,"onloadend"in aA?aA.onloadend=NA:aA.onreadystatechange=function(){aA&&aA.readyState===4&&(aA.status!==0||aA.responseURL&&aA.responseURL.indexOf("file:")===0)&&setTimeout(NA)},aA.onabort=function(){aA&&(sA(new Eg("Request aborted",Eg.ECONNABORTED,m,aA)),aA=null)},aA.onerror=function(){sA(new Eg("Network Error",Eg.ERR_NETWORK,m,aA)),aA=null},aA.ontimeout=function(){let Lg=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded";const Sg=m.transitional||SA;m.timeoutErrorMessage&&(Lg=m.timeoutErrorMessage),sA(new Eg(Lg,Sg.clarifyTimeoutError?Eg.ETIMEDOUT:Eg.ECONNABORTED,m,aA)),aA=null},_t.isStandardBrowserEnv){const Lg=(m.withCredentials||Ht(GA))&&m.xsrfCookieName&&mt.read(m.xsrfCookieName);Lg&&mA.set(m.xsrfHeaderName,Lg)}fA===void 0&&mA.setContentType(null),"setRequestHeader"in aA&&$A.forEach(mA.toJSON(),function(Lg,Sg){aA.setRequestHeader(Sg,Lg)}),$A.isUndefined(m.withCredentials)||(aA.withCredentials=!!m.withCredentials),xA&&xA!=="json"&&(aA.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&aA.addEventListener("progress",Wt(m.onDownloadProgress,!0)),typeof m.onUploadProgress=="function"&&aA.upload&&aA.upload.addEventListener("progress",Wt(m.onUploadProgress)),(m.cancelToken||m.signal)&&(FA=Lg=>{aA&&(sA(!Lg||Lg.type?new ag(null,m,aA):Lg),aA.abort(),aA=null)},m.cancelToken&&m.cancelToken.subscribe(FA),m.signal&&(m.signal.aborted?FA():m.signal.addEventListener("abort",FA)));const Kg=function(Lg){const Sg=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Lg);return Sg&&Sg[1]||""}(GA);Kg&&_t.protocols.indexOf(Kg)===-1?sA(new Eg("Unsupported protocol "+Kg+":",Eg.ERR_BAD_REQUEST,m)):aA.send(fA||null)})}};function Xt(m){if(m.cancelToken&&m.cancelToken.throwIfRequested(),m.signal&&m.signal.aborted)throw new ag(null,m)}function $t(m){return Xt(m),m.headers=IA.from(m.headers),m.data=ZA.call(m,m.transformRequest),["post","put","patch"].indexOf(m.method)!==-1&&m.headers.setContentType("application/x-www-form-urlencoded",!1),(V=>{V=$A.isArray(V)?V:[V];const{length:sA}=V;let fA,mA;for(let xA=0;xA<sA&&(fA=V[xA],!(mA=$A.isString(fA)?eI[fA.toLowerCase()]:fA));xA++);if(!mA)throw mA===!1?new Eg(`Adapter ${fA} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error($A.hasOwnProp(eI,fA)?`Adapter '${fA}' is not available in the build`:`Unknown adapter '${fA}'`);if(!$A.isFunction(mA))throw new TypeError("adapter is not a function");return mA})(m.adapter||FI.adapter)(m).then(function(V){return Xt(m),V.data=ZA.call(m,m.transformResponse,V),V.headers=IA.from(V.headers),V},function(V){return og(V)||(Xt(m),V&&V.response&&(V.response.data=ZA.call(m,m.transformResponse,V.response),V.response.headers=IA.from(V.response.headers))),Promise.reject(V)})}$A.forEach(eI,(m,V)=>{if(m){try{Object.defineProperty(m,"name",{value:V})}catch{}Object.defineProperty(m,"adapterName",{value:V})}});const TI=m=>m instanceof IA?m.toJSON():m;function XI(m,V){V=V||{};const sA={};function fA(GA,NA,Kg){return $A.isPlainObject(GA)&&$A.isPlainObject(NA)?$A.merge.call({caseless:Kg},GA,NA):$A.isPlainObject(NA)?$A.merge({},NA):$A.isArray(NA)?NA.slice():NA}function mA(GA,NA,Kg){return $A.isUndefined(NA)?$A.isUndefined(GA)?void 0:fA(void 0,GA,Kg):fA(GA,NA,Kg)}function xA(GA,NA){if(!$A.isUndefined(NA))return fA(void 0,NA)}function FA(GA,NA){return $A.isUndefined(NA)?$A.isUndefined(GA)?void 0:fA(void 0,GA):fA(void 0,NA)}function uA(GA,NA,Kg){return Kg in V?fA(GA,NA):Kg in m?fA(void 0,GA):void 0}const aA={url:xA,method:xA,data:xA,baseURL:FA,transformRequest:FA,transformResponse:FA,paramsSerializer:FA,timeout:FA,timeoutMessage:FA,withCredentials:FA,adapter:FA,responseType:FA,xsrfCookieName:FA,xsrfHeaderName:FA,onUploadProgress:FA,onDownloadProgress:FA,decompress:FA,maxContentLength:FA,maxBodyLength:FA,beforeRedirect:FA,transport:FA,httpAgent:FA,httpsAgent:FA,cancelToken:FA,socketPath:FA,responseEncoding:FA,validateStatus:uA,headers:(GA,NA)=>mA(TI(GA),TI(NA),!0)};return $A.forEach(Object.keys(m).concat(Object.keys(V)),function(GA){const NA=aA[GA]||mA,Kg=NA(m[GA],V[GA],GA);$A.isUndefined(Kg)&&NA!==uA||(sA[GA]=Kg)}),sA}const ke={};["object","boolean","number","function","string","symbol"].forEach((m,V)=>{ke[m]=function(sA){return typeof sA===m||"a"+(V<1?"n ":" ")+m}});const gi={};ke.transitional=function(m,V,sA){function fA(mA,xA){return"[Axios v1.2.4] Transitional option '"+mA+"'"+xA+(sA?". "+sA:"")}return(mA,xA,FA)=>{if(m===!1)throw new Eg(fA(xA," has been removed"+(V?" in "+V:"")),Eg.ERR_DEPRECATED);return V&&!gi[xA]&&(gi[xA]=!0,console.warn(fA(xA," has been deprecated since v"+V+" and will be removed in the near future"))),!m||m(mA,xA,FA)}};const bI={assertOptions:function(m,V,sA){if(typeof m!="object")throw new Eg("options must be an object",Eg.ERR_BAD_OPTION_VALUE);const fA=Object.keys(m);let mA=fA.length;for(;mA-- >0;){const xA=fA[mA],FA=V[xA];if(FA){const uA=m[xA],aA=uA===void 0||FA(uA,xA,m);if(aA!==!0)throw new Eg("option "+xA+" must be "+aA,Eg.ERR_BAD_OPTION_VALUE)}else if(sA!==!0)throw new Eg("Unknown option "+xA,Eg.ERR_BAD_OPTION)}},validators:ke},bt=bI.validators;class pi{constructor(V){this.defaults=V,this.interceptors={request:new wI,response:new wI}}request(V,sA){typeof V=="string"?(sA=sA||{}).url=V:sA=V||{},sA=XI(this.defaults,sA);const{transitional:fA,paramsSerializer:mA,headers:xA}=sA;let FA;fA!==void 0&&bI.assertOptions(fA,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),mA!==void 0&&bI.assertOptions(mA,{encode:bt.function,serialize:bt.function},!0),sA.method=(sA.method||this.defaults.method||"get").toLowerCase(),FA=xA&&$A.merge(xA.common,xA[sA.method]),FA&&$A.forEach(["delete","get","head","post","put","patch","common"],Vg=>{delete xA[Vg]}),sA.headers=IA.concat(FA,xA);const uA=[];let aA=!0;this.interceptors.request.forEach(function(Vg){typeof Vg.runWhen=="function"&&Vg.runWhen(sA)===!1||(aA=aA&&Vg.synchronous,uA.unshift(Vg.fulfilled,Vg.rejected))});const GA=[];let NA;this.interceptors.response.forEach(function(Vg){GA.push(Vg.fulfilled,Vg.rejected)});let Kg,Lg=0;if(!aA){const Vg=[$t.bind(this),void 0];for(Vg.unshift.apply(Vg,uA),Vg.push.apply(Vg,GA),Kg=Vg.length,NA=Promise.resolve(sA);Lg<Kg;)NA=NA.then(Vg[Lg++],Vg[Lg++]);return NA}Kg=uA.length;let Sg=sA;for(Lg=0;Lg<Kg;){const Vg=uA[Lg++],dt=uA[Lg++];try{Sg=Vg(Sg)}catch(zt){dt.call(this,zt);break}}try{NA=$t.call(this,Sg)}catch(Vg){return Promise.reject(Vg)}for(Lg=0,Kg=GA.length;Lg<Kg;)NA=NA.then(GA[Lg++],GA[Lg++]);return NA}getUri(V){return II(Ut((V=XI(this.defaults,V)).baseURL,V.url),V.params,V.paramsSerializer)}}$A.forEach(["delete","get","head","options"],function(m){pi.prototype[m]=function(V,sA){return this.request(XI(sA||{},{method:m,url:V,data:(sA||{}).data}))}}),$A.forEach(["post","put","patch"],function(m){function V(sA){return function(fA,mA,xA){return this.request(XI(xA||{},{method:m,headers:sA?{"Content-Type":"multipart/form-data"}:{},url:fA,data:mA}))}}pi.prototype[m]=V(),pi.prototype[m+"Form"]=V(!0)});const YI=pi;class _e{constructor(V){if(typeof V!="function")throw new TypeError("executor must be a function.");let sA;this.promise=new Promise(function(mA){sA=mA});const fA=this;this.promise.then(mA=>{if(!fA._listeners)return;let xA=fA._listeners.length;for(;xA-- >0;)fA._listeners[xA](mA);fA._listeners=null}),this.promise.then=mA=>{let xA;const FA=new Promise(uA=>{fA.subscribe(uA),xA=uA}).then(mA);return FA.cancel=function(){fA.unsubscribe(xA)},FA},V(function(mA,xA,FA){fA.reason||(fA.reason=new ag(mA,xA,FA),sA(fA.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(V){this.reason?V(this.reason):this._listeners?this._listeners.push(V):this._listeners=[V]}unsubscribe(V){if(!this._listeners)return;const sA=this._listeners.indexOf(V);sA!==-1&&this._listeners.splice(sA,1)}static source(){let V;return{token:new _e(function(sA){V=sA}),cancel:V}}}const VB=_e,Qi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qi).forEach(([m,V])=>{Qi[V]=m});const fB=Qi,CI=function m(V){const sA=new YI(V),fA=eg(YI.prototype.request,sA);return $A.extend(fA,YI.prototype,sA,{allOwnKeys:!0}),$A.extend(fA,sA,null,{allOwnKeys:!0}),fA.create=function(mA){return m(XI(V,mA))},fA}(FI);CI.Axios=YI,CI.CanceledError=ag,CI.CancelToken=VB,CI.isCancel=og,CI.VERSION="1.2.4",CI.toFormData=Jg,CI.AxiosError=Eg,CI.Cancel=CI.CanceledError,CI.all=function(m){return Promise.all(m)},CI.spread=function(m){return function(V){return m.apply(null,V)}},CI.isAxiosError=function(m){return $A.isObject(m)&&m.isAxiosError===!0},CI.mergeConfig=XI,CI.AxiosHeaders=IA,CI.formToJSON=m=>ZI($A.isHTMLForm(m)?new FormData(m):m),CI.HttpStatusCode=fB,CI.default=CI;const Ei=CI;var We=function(){function m(){X(this,m)}var V;return eA(m,null,[{key:"fetchRemoteData",value:(V=U(P().mark(function sA(fA){var mA;return P().wrap(function(xA){for(;;)switch(xA.prev=xA.next){case 0:return xA.prev=0,xA.next=3,Ei.get(fA,{responseType:"arraybuffer"});case 3:return mA=xA.sent,xA.abrupt("return",new Uint8Array(mA.data));case 7:throw xA.prev=7,xA.t0=xA.catch(0),xA.t0;case 10:case"end":return xA.stop()}},sA,null,[[0,7]])})),function(sA){return V.apply(this,arguments)})},{key:"string2Uint8Data",value:function(sA){for(var fA=new Uint8Array(sA.length),mA=0;mA<fA.length;mA++)fA[mA]=255&sA.charCodeAt(mA);return fA}},{key:"uint8Data2String",value:function(sA){return String.fromCharCode.apply(String,sA)}},{key:"parseMultiFile",value:function(sA){var fA=m.uint8Data2String(sA).split(`
`),mA=[],xA=0;return fA.forEach(function(FA){if((FA=FA.trim())&&!FA.startsWith("#"))switch(xA){case 0:return void(xA=1);case 1:FA.match(/^\d+$/)||mA.push(FA);case 2:case 3:case 4:return void xA++;case 5:return void(xA=1)}}),mA}}]),m}(),OI=function(){function m(){X(this,m),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var V,sA,fA,mA,xA;return eA(m,[{key:"init",value:(xA=U(P().mark(function FA(){var uA;return P().wrap(function(aA){for(;;)switch(aA.prev=aA.next){case 0:return aA.next=2,new Promise(function(GA){WA({onRuntimeInitialized:function(){GA({instance:this})}})});case 2:return uA=aA.sent,this.instance=uA.instance,this._decorate(),(typeof window<"u"?window:H.g).artoolkit=this,aA.abrupt("return",this);case 8:case"end":return aA.stop()}},FA,this)})),function(){return xA.apply(this,arguments)})},{key:"_decorate",value:function(){var FA=this;for(var uA in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(aA){FA[aA]=FA.instance[aA]}),this.instance)uA.match(/^AR/)&&(this[uA]=this.instance[uA])}},{key:"loadCamera",value:(mA=U(P().mark(function FA(uA){var aA,GA;return P().wrap(function(NA){for(;;)switch(NA.prev=NA.next){case 0:if(aA="/camera_param_"+this.cameraCount++,!(uA instanceof Uint8Array)){NA.next=5;break}GA=uA,NA.next=14;break;case 5:return NA.prev=5,NA.next=8,We.fetchRemoteData(uA);case 8:GA=NA.sent,NA.next=14;break;case 11:throw NA.prev=11,NA.t0=NA.catch(5),NA.t0;case 14:return this._storeDataFile(GA,aA),NA.abrupt("return",this.instance._loadCamera(aA));case 16:case"end":return NA.stop()}},FA,this,[[5,11]])})),function(FA){return mA.apply(this,arguments)})},{key:"addMarker",value:(fA=U(P().mark(function FA(uA,aA){var GA,NA;return P().wrap(function(Kg){for(;;)switch(Kg.prev=Kg.next){case 0:if(GA="/marker_"+this.markerCount++,aA.indexOf(`
Name: `+YA.name+`
Message: `+YA.message,LA.setAttribute("id","error-popup"),document.body.appendChild(LA)}},1e3)};var QA=document.createElement("video");if(QA.setAttribute("autoplay",""),QA.setAttribute("muted",""),QA.setAttribute("playsinline",""),QA.style.width=this.parameters.displayWidth+"px",QA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var yA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?yA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?yA="navigator.mediaDevices.getUserMedia":console.assert(!1);return j({name:"",message:"WebRTC issue-! "+yA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(YA){var tg={audio:!1,video:{facingMode:"environment",width:{ideal:gA.parameters.sourceWidth},height:{ideal:gA.parameters.sourceHeight}}};gA.parameters.deviceId!==null&&(tg.video.deviceId={exact:gA.parameters.deviceId}),navigator.mediaDevices.getUserMedia(tg).then(function(LA){QA.srcObject=LA;var gt=new CustomEvent("camera-init",{stream:LA});window.dispatchEvent(gt),document.body.addEventListener("click",gA.onInitialClick,{once:!0}),O()}).catch(function(LA){j({name:LA.name,message:LA.message})})}).catch(function(YA){j({message:YA.message})}),QA},eg.prototype.dispose=function(){switch(this.ready=!1,this.parameters.sourceType){case"image":this._disposeSourceImage();break;case"video":this._disposeSourceVideo();break;case"webcam":this._disposeSourceWebcam()}this.domElement=null,document.body.removeEventListener("click",this.onInitialClick,{once:!0})},eg.prototype._disposeSourceImage=function(){var O=document.querySelector("#arjs-video");O&&O.remove()},eg.prototype._disposeSourceVideo=function(){var O=document.querySelector("#arjs-video");O&&(O.pause(),O.removeAttribute("src"),O.load(),O.remove())},eg.prototype._disposeSourceWebcam=function(){var O=document.querySelector("#arjs-video");O&&(O.srcObject&&O.srcObject.getTracks&&O.srcObject.getTracks().map(j=>j.stop()),O.remove())},eg.prototype.hasMobileTorch=function(){var O=arToolkitSource.domElement.srcObject;if(O instanceof MediaStream==0)return!1;this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var j=O.getVideoTracks()[0];return j.getCapabilities!==void 0&&!!j.getCapabilities().torch},eg.prototype.toggleMobileTorch=function(){console.assert(this.hasMobileTorch()===!0);var O=arToolkitSource.domElement.srcObject;if(O instanceof MediaStream!=0){this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var j=O.getVideoTracks()[0];j.getCapabilities().torch?(this._currentTorchStatus=this._currentTorchStatus===!1,j.applyConstraints({advanced:[{torch:this._currentTorchStatus}]}).catch(function(QA){console.log(QA)})):document.getElementById("error-popup")||((gA=document.createElement("div")).innerHTML="no mobile torch is available on your camera",gA.setAttribute("id","error-popup"),document.body.appendChild(gA))}else{var gA;document.getElementById("error-popup")||((gA=document.createElement("div")).innerHTML="enabling mobile torch is available only on webcam",gA.setAttribute("id","error-popup"),document.body.appendChild(gA))}},eg.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},eg.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},eg.prototype.onResizeElement=function(){var O=window.innerWidth,j=window.innerHeight;if(console.assert(arguments.length===0),this.domElement.nodeName==="IMG")var gA=this.domElement.naturalWidth,QA=this.domElement.naturalHeight;else this.domElement.nodeName==="VIDEO"?(gA=this.domElement.videoWidth,QA=this.domElement.videoHeight):console.assert(!1);var yA=gA/QA,YA=O/j;if(YA<yA){var tg=yA*j;this.domElement.style.width=tg+"px",this.domElement.style.marginLeft=-(tg-O)/2+"px",this.domElement.style.height=j+"px",this.domElement.style.marginTop="0px"}else{var LA=1/(yA/O);this.domElement.style.height=LA+"px",this.domElement.style.marginTop=-(LA-j)/2+"px",this.domElement.style.width=O+"px",this.domElement.style.marginLeft="0px"}},eg.prototype.copyElementSizeTo=function(O){window.innerWidth>window.innerHeight?(O.style.width=this.domElement.style.width,O.style.height=this.domElement.style.height,O.style.marginLeft=this.domElement.style.marginLeft,O.style.marginTop=this.domElement.style.marginTop):(O.style.height=this.domElement.style.height,O.style.width=4*parseInt(O.style.height)/3+"px",O.style.marginLeft=(window.innerWidth-parseInt(O.style.width))/2+"px",O.style.marginTop=0)},eg.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},eg.prototype.onResize=function(O,j,gA){if(arguments.length!==3)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var QA=O.parameters.trackingBackend;if(QA==="artoolkit"){this.onResizeElement();var yA=!!j.domElement.dataset.aframeCanvas;yA===!1&&this.copyElementSizeTo(j.domElement),O.arController!==null&&this.copyElementSizeTo(O.arController.canvas)}else console.assert(!1,"unhandled trackingBackend "+QA);QA==="artoolkit"?O.arController!==null&&gA.projectionMatrix.copy(O.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+QA)};const bg=eg,kA=function(O,j,gA){var QA=this;G.call(this,j),arguments.length>3&&console.assert("wrong api for",kA),this.parameters={subMarkersControls:gA.subMarkersControls,subMarkerPoses:gA.subMarkerPoses,changeMatrixMode:gA.changeMatrixMode!==void 0?gA.changeMatrixMode:"modelViewMatrix"},this.object3d.visible=!1,this.subMarkersControls=this.parameters.subMarkersControls,this.subMarkerPoses=this.parameters.subMarkerPoses,O.addEventListener("sourceProcessed",function(){QA._onSourceProcessed()})};kA.prototype=Object.create(G.prototype),kA.prototype.constructor=kA,kA.prototype._onSourceProcessed=function(){var O=this,j={count:0,position:{sum:new d.Vector3(0,0,0),average:new d.Vector3(0,0,0)},quaternion:{sum:new d.Quaternion(0,0,0,0),average:new d.Quaternion(0,0,0,0)},scale:{sum:new d.Vector3(0,0,0),average:new d.Vector3(0,0,0)}},gA=O.parameters.subMarkersControls[0].object3d.quaternion;if(this.parameters.subMarkersControls.forEach(function(yA,YA){var tg=yA.object3d;if(tg.visible!==!1){var LA=tg.matrix.clone(),gt=O.parameters.subMarkerPoses[YA];LA.multiply(new d.Matrix4().getInverse(gt));var kg=new d.Vector3,tt=new d.Quaternion,Og=new d.Vector3;LA.decompose(kg,tt,Og),j.count++,kA.averageVector3(j.position.sum,kg,j.count,j.position.average),kA.averageQuaternion(j.quaternion.sum,tt,gA,j.count,j.quaternion.average),kA.averageVector3(j.scale.sum,Og,j.count,j.scale.average)}}),j.count>0?O.object3d.visible=!0:O.object3d.visible=!1,j.count>0){var QA=new d.Matrix4;QA.compose(j.position.average,j.quaternion.average,j.scale.average),this.parameters.changeMatrixMode==="modelViewMatrix"?O.object3d.matrix.copy(QA):this.parameters.changeMatrixMode==="cameraTransformMatrix"?O.object3d.matrix.getInverse(QA):console.assert(!1),O.object3d.matrix.decompose(O.object3d.position,O.object3d.quaternion,O.object3d.scale)}},kA.averageQuaternion=function(O,j,gA,QA,yA){return yA=yA||new d.Quaternion,console.assert(gA instanceof d.Quaternion==1),j.dot(gA)>0&&(j=new d.Quaternion(-j.x,-j.y,-j.z,-j.w)),O.x+=j.x,O.y+=j.y,O.z+=j.z,O.w+=j.w,yA.x=O.x/QA,yA.y=O.y/QA,yA.z=O.z/QA,yA.w=O.w/QA,yA.normalize(),yA},kA.averageVector3=function(O,j,gA,QA){return QA=QA||new d.Vector3,O.x+=j.x,O.y+=j.y,O.z+=j.z,QA.x=O.x/gA,QA.y=O.y/gA,QA.z=O.z/gA,QA},kA.computeCenter=function(O){var j=JSON.parse(O),gA={count:0,position:{sum:new d.Vector3(0,0,0),average:new d.Vector3(0,0,0)},quaternion:{sum:new d.Quaternion(0,0,0,0),average:new d.Quaternion(0,0,0,0)},scale:{sum:new d.Vector3(0,0,0),average:new d.Vector3(0,0,0)}},QA=new d.Quaternion;j.subMarkersControls.forEach(function(YA){var tg=new d.Matrix4().fromArray(YA.poseMatrix),LA=new d.Vector3,gt=new d.Quaternion,kg=new d.Vector3;tg.decompose(LA,gt,kg),gA.count++,kA.averageVector3(gA.position.sum,LA,gA.count,gA.position.average),kA.averageQuaternion(gA.quaternion.sum,gt,QA,gA.count,gA.quaternion.average),kA.averageVector3(gA.scale.sum,kg,gA.count,gA.scale.average)});var yA=new d.Matrix4;return yA.compose(gA.position.average,gA.quaternion.average,gA.scale.average),yA},kA.computeBoundingBox=function(O){var j=JSON.parse(O),gA=new d.Box3;return j.subMarkersControls.forEach(function(QA){var yA=new d.Matrix4().fromArray(QA.poseMatrix),YA=new d.Vector3,tg=new d.Quaternion,LA=new d.Vector3;yA.decompose(YA,tg,LA),gA.expandByPoint(YA)}),gA},kA.prototype.updateSmoothedControls=function(O,j){j===void 0&&(j=[[.4,.1,.3],[.5,.1,.4],[.5,.2,.5],[.6,.2,.7],[.6,.2,.7]]);var gA=0;if(this.parameters.subMarkersControls.forEach(function(yA,YA){yA.object3d.visible===!0&&gA++}),j[gA-1]!==void 0)var QA=j[gA-1];else QA=j[j.length-1];O.parameters.lerpPosition=QA[0],O.parameters.lerpQuaternion=QA[1],O.parameters.lerpScale=QA[2]},kA.fromJSON=function(O,j,gA,QA,yA){var YA=JSON.parse(QA),tg=[],LA=[];return yA=yA||{},YA.subMarkersControls.forEach(function(gt){var kg=new d.Object3D;j.add(kg);var tt=new X(O,kg,gt.parameters);tg.push(tt),LA.push(new d.Matrix4().fromArray(gt.poseMatrix))}),yA.subMarkersControls=tg,yA.subMarkerPoses=LA,new JA(O,gA,yA)};const JA=kA,gg=function(O,j){var gA=this;this._arToolkitContext=O,this.subMarkersControls=j,this.enabled=!0,O.addEventListener("sourceProcessed",function(){gA._onSourceProcessed()})};gg.prototype._onSourceProcessed=function(){var O=this.subMarkersControls[0].object3d.quaternion;if(this.enabled!==!1)for(var j=this.subMarkersControls.filter(function(Ag){return Ag.object3d.visible===!0}),gA=Object.keys(j).length,QA=new THREE.Vector3,yA=new THREE.Quaternion,YA=new THREE.Vector3,tg=new THREE.Matrix4,LA=0;LA<gA;LA++)for(var gt=j[LA],kg=0;kg<gA;kg++){var tt=j[kg];if(LA!==kg){gt.object3d.userData.seenCouples===void 0&&(gt.object3d.userData.seenCouples={});var Og=gt.object3d.userData.seenCouples;Og[tt.id]===void 0&&(Og[tt.id]={count:0,position:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)},quaternion:{sum:new THREE.Quaternion(0,0,0,0),average:new THREE.Quaternion(0,0,0,0)},scale:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)}}),tg.getInverse(gt.object3d.matrix),tg.multiply(tt.object3d.matrix),tg.decompose(QA,yA,YA);var at=Og[tt.id];at.count++,JA.averageVector3(at.position.sum,QA,at.count,at.position.average),JA.averageQuaternion(at.quaternion.sum,yA,O,at.count,at.quaternion.average),JA.averageVector3(at.scale.sum,YA,at.count,at.scale.average)}}},gg.prototype.computeResult=function(){var O=this,j=this.subMarkersControls[0];this.deleteResult(),j.object3d.userData.result={averageMatrix:new THREE.Matrix4,confidenceFactor:1};do{var gA=!1;this.subMarkersControls.forEach(function(QA){var yA=QA.object3d.userData.result;if(!(yA!==void 0&&yA.confidenceFactor>=1)){var YA=O._getLearnedCoupleStats(QA);if(YA!==null){var tg=O._getSubMarkerControlsByID(YA),LA=QA.object3d.userData.seenCouples[YA],gt=new THREE.Matrix4;gt.compose(LA.position.average,LA.quaternion.average,LA.scale.average);var kg=tg.object3d.userData.result.averageMatrix,tt=new THREE.Matrix4().getInverse(kg).multiply(gt);tt=new THREE.Matrix4().getInverse(tt),console.assert(QA.object3d.userData.result===void 0),QA.object3d.userData.result={averageMatrix:tt,confidenceFactor:1},gA=!0}}})}while(gA===!0)},gg.prototype._getLearnedCoupleStats=function(O){if(O.object3d.userData.seenCouples===void 0)return null;for(var j=O.object3d.userData.seenCouples,gA=Object.keys(j).map(Number),QA=0;QA<gA.length;QA++){var yA=gA[QA],YA=this._getSubMarkerControlsByID(yA).object3d.userData.result;if(YA!==void 0&&YA.confidenceFactor>=1)return yA}return null},gg.prototype._getSubMarkerControlsByID=function(O){for(var j=0;j<this.subMarkersControls.length;j++){var gA=this.subMarkersControls[j];if(gA.id===O)return gA}return null},gg.prototype.toJSON=function(){this.computeResult();var O={meta:{createdBy:"Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION,createdAt:new Date().toJSON()},trackingBackend:this._arToolkitContext.parameters.trackingBackend,subMarkersControls:[]},j=this.subMarkersControls[0];return new THREE.Matrix4().getInverse(j.object3d.matrix),this.subMarkersControls.forEach(function(gA,QA){if(gA.object3d.userData.result!==void 0){var yA=gA.object3d.userData.result.averageMatrix;console.assert(yA instanceof THREE.Matrix4);var YA={parameters:{},poseMatrix:yA.toArray()};gA.parameters.type==="pattern"?(YA.parameters.type=gA.parameters.type,YA.parameters.patternUrl=gA.parameters.patternUrl):gA.parameters.type==="barcode"?(YA.parameters.type=gA.parameters.type,YA.parameters.barcodeValue=gA.parameters.barcodeValue):console.assert(!1),O.subMarkersControls.push(YA)}}),JSON.stringify(O,null,"	")},gg.prototype.resetStats=function(){this.deleteResult(),this.subMarkersControls.forEach(function(O){delete O.object3d.userData.seenCouples})},gg.prototype.deleteResult=function(){this.subMarkersControls.forEach(function(O){delete O.object3d.userData.result})};const yg=gg,mg={navigateToLearnerPage:function(O,j){var gA={backURL:location.href,trackingBackend:j,markersControlsParameters:mg.createDefaultMarkersControlsParameters(j)};location.href=O+"?"+encodeURIComponent(JSON.stringify(gA))},storeDefaultMultiMarkerFile:function(O){var j=mg.createDefaultMultiMarkerFile(O);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(j))},createDefaultMultiMarkerFile:function(O){console.assert(O);var j=document.createElement("a");j.href=qA.baseURL;var gA=j.href,QA={meta:{createdBy:"AR.js "+qA.REVISION+" - Default Marker",createdAt:new Date().toJSON()},trackingBackend:O,subMarkersControls:[]};return QA.subMarkersControls[0]={parameters:{},poseMatrix:new d.Matrix4().makeTranslation(0,0,0).toArray()},O==="artoolkit"?(QA.subMarkersControls[0].parameters.type="pattern",QA.subMarkersControls[0].parameters.patternUrl=gA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"):console.assert(!1),QA},createDefaultMarkersControlsParameters:function(O){var j=document.createElement("a");j.href=qA.baseURL;var gA=j.href;if(O==="artoolkit")var QA=[{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-kanji.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt"}];else console.assert(!1);return QA},storeMarkersAreaFileFromResolution:function(O,j,gA){var QA=this.buildMarkersAreaFileFromResolution(O,j,gA);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(QA))},buildMarkersAreaFileFromResolution:function(O,j,gA){var QA={meta:{createdBy:"AR.js - Augmented Website",createdAt:new Date().toJSON()},trackingBackend:O,subMarkersControls:[]};if(j>gA)var yA=.4*gA;else j<gA?yA=.4*j:j===gA?yA=.33*j:console.assert(!1);var YA=.8*yA,tg=(j-yA)/2/YA,LA=(gA-yA)/2/YA,gt=kg("center",0,0);return QA.subMarkersControls.push(gt),gt=kg("topleft",-tg,-LA),QA.subMarkersControls.push(gt),gt=kg("topright",+tg,-LA),QA.subMarkersControls.push(gt),gt=kg("bottomleft",-tg,+LA),QA.subMarkersControls.push(gt),gt=kg("bottomright",+tg,+LA),QA.subMarkersControls.push(gt),QA;function kg(tt,Og,at){console.log("buildSubMarkerControls",tt,Og,at);var Ag={parameters:{},poseMatrix:new d.Matrix4().makeTranslation(Og,0,at).toArray()};return O==="artoolkit"?function(VA,wg){var et=document.createElement("a");et.href=qA.baseURL;var Wg=et.href,Gt={center:ct(Wg+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"),topleft:ct(Wg+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"),topright:ct(Wg+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"),bottomleft:ct(Wg+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"),bottomright:ct(Wg+"examples/marker-training/examples/pattern-files/pattern-letterF.patt")};return console.assert(Gt[wg]!==void 0),VA.type="pattern",void(VA.patternUrl=Gt[wg]);function ct(Bt){var jt=document.createElement("a");return jt.href=Bt,jt.href}}(Ag.parameters,tt):console.assert(!1),Ag}}},Bg=mg})(),w})())})(RF);function SF(c,t){const i=new MF;return i.tick=(Q,o)=>i.updateImageTrackingWebXR(Q,o,c,t,t.children[0]),i}function FF(){const c=new lF("white","darkslategrey",5),t=new DF("white",4);return t.position.set(10,10,10),{ambientLight:c,mainLight:t}}function NF(){const c=new md({antialias:!0,alpha:!0});return c.setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),c.outputEncoding=WI,c.xr.enabled=!0,c}function UF(c,t,i,Q){c.xr.addEventListener("sessionstart",o=>{t.position.set(0,0,0),Q.visible=!1;const h=c.xr.getController(0);h.addEventListener("select",()=>{const w=new yC(.06,.06,.06),d=new sF({color:16777215*Math.random()}),F=new fi(w,d);F.position.set(0,0,-.3).applyMatrix4(h.matrixWorld),F.setRotationFromMatrix(h.matrixWorld),F.renderOrder=3,Q.children[0].attach(F)}),i.add(h)})}function kF(){return new nF}const LF="/ARIndoorNavigation-House/CasualFlatMap.png";function xF(){const c=new oF({color:65280});c.colorWrite=!1;const t=new uE;t.add(Es(new OA(-4.95,1,0),new OA(0,0,0),new OA(0,3.5,6.5),c)),t.add(Es(new OA(4.95,1,0),new OA(0,0,0),new OA(0,3.5,6.5),c)),t.add(Es(new OA(0,1,3.3),new OA(0,0,0),new OA(9.95,3.5,0),c)),t.add(Es(new OA(0,1,-3.3),new OA(0,0,0),new OA(9.95,3.5,0),c));const i=new cs(9.95,6.5),Q=new cF().load(LF),o=new ur({map:Q}),h=new fi(i,o);h.rotateX(EM.degToRad(270)),h.renderOrder=3,t.add(h);const w=new uE;return w.add(t),w}function Es(c,t,i,Q){const o=new yC(i.x,i.y,i.z),h=new fi(o,Q);return h.position.set(c.x,c.y,c.z),h.renderOrder=2,h}const Id=(c,t,i)=>{t.aspect=c.clientWidth/c.clientHeight,t.updateProjectionMatrix(),i.setSize(c.clientWidth,c.clientHeight),i.setPixelRatio(window.devicePixelRatio)};class JF{constructor(t,i,Q){Id(t,i,Q),window.addEventListener("resize",()=>{Id(t,i,Q),this.onResize()})}onResize(){}}class bF{constructor(t,i,Q){this.camera=t,this.scene=i,this.renderer=Q,this.updatables=[]}start(){this.renderer.setAnimationLoop((t,i)=>{this.tick(t,i),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(t,i){for(const Q of this.updatables)Q.tick(t,i)}}let cE,fC,gQ,pn;class KF{constructor(t){cE=fF(),fC=NF(),gQ=kF(),pn=new bF(cE,gQ,fC),t.append(fC.domElement);const i=pF(cE,fC.domElement),{ambientLight:Q,mainLight:o}=FF();pn.updatables.push(i),gQ.add(Q,o),new JF(t,cE,fC)}async initIndoorNav(){const t=xF();gQ.add(t);const i=SF(fC,t);await i.setup(gQ),UF(fC,cE,gQ,t),pn.updatables.push(i)}render(){fC.render(gQ,cE)}start(){pn.start()}stop(){pn.stop()}}async function YF(){const c=document.querySelector("#scene-container"),t=new KF(c);await t.initIndoorNav(),t.start()}YF().catch(c=>{console.error(c)});