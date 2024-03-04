# akamai-sensordata-decrypt

[![npm version](https://img.shields.io/npm/v/akamai-sensordata-decrypt.svg)](https://www.npmjs.com/package/akamai-sensordata-decrypt)

`akamai-sensordata-decrypt` is a CLI tool designed for decrypting Akamai v2 sensor data, facilitating the recreation of the original data from the encrypted `sensor_data` string. This tool is particularly useful for developers and researchers working with Akamai's sensor data, providing a straightforward method to decrypt and analyze this data.


## Table of Contents
- [akamai-sensordata-decrypt](#akamai-sensordata-decrypt)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Optional Flags](#optional-flags)
    - [Examples](#examples)
    - [Example Output](#example-output)
  - [Understanding the Encryption and Decryption Process](#understanding-the-encryption-and-decryption-process)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Installation

To use `akamai-sensordata-decrypt`, you'll need Node.js installed on your machine. With Node.js set up, you can install the module globally via npm with the following command:

```bash
npm install -g akamai-sensordata-decrypt
```

This will install `akamai-sensordata-decrypt` globally on your system, allowing you to run it from any terminal.

## Usage

After installation, you can use `akamai-sensordata-decrypt` by providing it with an input file containing the sensor data you wish to decrypt. The input file should contain the sensor data in a JSON format, for example:

```json
{"sensor_data":"2;0;3..."}
```

To decrypt sensor data, run the following command in your terminal, replacing `<inputfile>` with the path to your JSON file containing the encrypted sensor data:

```bash
sensor-decrypt <inputfile>
```

### Optional Flags

`akamai-sensordata-decrypt` supports the following optional flags:

- `--debug`: Enable debug logging to provide more detailed information during the decryption process.
- `--outputfile <path>`: Specify a file path to output the decrypted data. If not provided, the decrypted data will be printed to the standard output.

### Examples

Decrypting sensor data from an input file and printing the result to the standard output:

```bash
sensor-decrypt path/to/inputfile.json
```

Decrypting sensor data with debug logging enabled: (this will append to the output json the input sensor, decrypted and key)

```bash
sensor-decrypt path/to/inputfile.json --debug
```

Decrypting sensor data and writing the output to a specific file:

```bash
sensor-decrypt path/to/inputfile.json --outputfile path/to/outputfile.json
```

### Example Output

**w/o debug**
```json
{
    "7a74G7m23Vrp0o5c94909976oMIAOITcBpnbNvgBxdGw==": "235718",
    "-100": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36,uaend,12147,20030107,it-IT,Gecko,5,0,0,0,420638,0,1920,1055,1920,1080,498,934,1920,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8750,0.437152764218,854791923611.5,0,0,loc:",
    "-105": "0,2,0,1,1960,874,0;",
    "-108": "",
    "-101": "do_en,dm_en,t_en",
    "-110": "0,1,3726,496,386;1,1,3727,496,386;2,1,3729,495,387;3,1,3738,493,387;4,1,3746,492,387;5,1,3756,491,387;6,1,3763,490,387;7,1,3773,489,387;8,1,3779,489,387;9,1,3788,488,387;10,1,3795,488,387;11,1,3803,488,387;12,1,3811,487,387;13,1,3845,487,387;14,1,3846,487,387;15,1,3846,486,387;16,1,3852,486,386;17,1,3861,486,386;18,1,3873,485,386;19,1,3877,485,386;20,1,3885,485,386;21,1,3895,485,386;22,1,3901,484,385;23,1,3917,484,385;24,1,3951,484,385;25,3,3983,484,385,963;",
    "-117": "",
    "-109": "",
    "-102": "0,2,0,1,1960,874,0;",
    "-111": "",
    "-114": "",
    "-103": "",
    "-106": "1,4",
    "-115": "1,122587,32,0,0,0,122555,3983,0,1709583847223,-999999,18288,0,26,3048,0,1,3984,99466,0,2B1821965D4F04270329561674C85DC6~-1~YAAQ5L0vF8HUEuWNAQAAA1cjCwv3D8FSemCYcafq2R9eQVfeXiIG0Kj0iAsPzdn9QgkRKOPN7RBZTWeQzdl8DfPZJLsoiVfPEJSD781yFRF34jeFPW2FEM21WmPXNFn/PHPhK2KQUedK1+sCn7Zzo3bycXKPirom+Fwz+RLtoBHhY0QUPd+KoqtDp2fYFmnNmVx5lHO9LuxI8VevTbeqhK3tQeoZkPJ9ntbx57mx5AJ+IL+uQVhypH8u5GwTfV3pvmX4Tv6LKzwX/gzJZYMuKGHVe8d6im/izkJ4wi/tCOPki8RS+4mCxTxepevJUJ3oHNjkKAIO+McYlzRX5dPczZiseJ4Q/ubqRXTJOOAj59Gmo1jHTdouCM+AQWG5zR0HJ2KHT/OynB16~-1~||-1||~1709054787,37200,-1,-1,30261693,PiZtE,107915,32,0,0,0,,,7ba16ebac4ea29695c113a7c1022516c78ab68fb525e14c51470c89f7d817c8a,225",
    "-112": "https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US",
    "-119": "-1",
    "-122": "0,0,0,0,1,0,0",
    "-123": "",
    "-124": "",
    "-126": "",
    "-127": "11321144241322243122",
    "-128": ",0,070f409b82df3bdd2f51a6415c7895353c153c47fe6dd8a0f87f3d14c46ccb2b,4,,,8,5,1,1,8,8,5,1,1,8,0,NA;wve,NA;wre,NA;wve,NA,1,cb00e4e5df58c5e4a779e70c739776f10e0e5b557367e410cff1f9287aecd4fd",
    "-131": "2298478592,237431858,205868054,100,176,1,1,1,0,1",
    "-132": "-1",
    "-133": "",
    "-70": "-1",
    "-80": "94",
    "-90": "62|28718",
    "-116": "0",
    "-129": "87c941e05bfb14bd2fbd3dcf032f83db8ef3325ef4c3ba753ed4d88e0f0df14c,1,d8b9c2173386b9131afe331ece6fa0674b210dd16555417e2987e04aa1c432a6,e;wl1,e;wl2,,0,e;wl3,e;wl4,,Cannot read properties of null (reading YVERTEX_SHADER@)"
}
```

**w/ debug**
```json
{
    "key": "7a74G7m23Vrp0o5c94909976oMIAOITcBpnbNvgBxdGw==",
    "value": "235718",
    "original": "2;0;3491382;3360304;5,21,0,1,3,91;GiOIj;=3KjB`EvMd8MjzJ6g[W%1t`4Os|QMG!JOFy$n(A*zI6@583s;EDM7E*9}z0RDE*d0g6S77(_(Q?)bX;I KQv03}V|+C<4<}[ek=9E5#Z~/tg@{SrJN#-9|A*N.Au#*GCbgDgu?-~sVryHV W8NI@L+X7fFtG*Q>1E]+*[>?-M$i{[h;7):H|3@cH|`/hs]kaTIxOK=@:@}~RDRmc%t _3zXW(q4w_K92XfX62z1&2 ,YK>6/ ?q=LVC?!tBu>mY1vC4n~nz}?~_c`[WP?f2uL@| _U@yKimyD6G?JA[Vljwl`/Ss_~V03w]aAG}m9kkqIQzcbc%-QO^VSpK`lAWI_n+, #nZ3[V+X/hUV&-9R0:-(q@L[/hZLMAQN$E.gDMZFwnu/EeuBH`cmC$CN)fYTX_ijzbb3 /7~gsw,Aqbdc,*@zor/%W7FZ]qu.|/dJkqgVOh2Bq.`tzU^?+Wk46^5T^l~>88qd,P;&AGw7[.a{M](Z+h<)i(u9Her;6J1zxk`Mo$SxHSN(FY]I>6S?CXSQ*Nb,3A%*,/}s1%#G,`tmFV!vvLkX`L!J`3<w!A-1XK7&XZL{`dpH1EjjtExtn/pz&[wGexuaN~8+T{63~UH!f [Se9r}t5X}F)@,/OV[6r%1a}gBm|lE;d+6AxkyzzP-QQnDb&,@|Yi}Y+{OD*_hRsbt$gKLb&R4_P~IyPWsN4MYx{_=Df7o[W!6S)&,H(D2XOnc7ap$ye{7|[Vj.4az|OEtL?.Lp>[8!-T<jMTwu]tJ:jcaX_[L[L!0XNMdy}'t>J mH1DVOEnK'IZN0am_eP8l*4{O}Liw2e$||X6ECOe9_u|77lPBz!pYa*Yb#qIL0=wOkYyWYhGTsdnW66,[`.[S| $Y,IWcD[RLfv]|$1_?P9#FfyB?UEJ7^k F^C3E]?89UJzO_zGJE!GOp{W6+}l0{~l?lkLghvz~qiA~iO/n!sC@xm_j*&=w_}:!TGR]_!~$5 cLW%:KUQ Ey/`{?CS64F[O087?hqu7{8@j!/6,5na}_|Zs<,7#=W}i^ig)9OYs! xn/WH?Ld1S.S:R9GRK<xF2w*,Vh8Lad}ff2d_NryW#`R|:x)RDLt?4&KNw0_tTN[`S%_`awMn8)[AyYM,Q7f@04S`*L0Hp%@><wRGOo=U_Dmnu)>bsoZ#)0Qc@WD[:Tw`zZ6v73@zdF0*dJi6GR>s)#O`9eOxLe%<I.Yx1c_j]Q26gUEbi-dQZ`%OAc<pLrC*8X6D]sj^8H8+MV#z!G5o7Hq)%[CFMz^iZWTr.f9@(,q!`MtRHOA4Tl@lT+|YLuEi~qq L9ko_fzjP^/ H[TMb1z9dexG*p:`1u!FTL@3b6*A6Cup+Z[Vw9,^H)4!v %I+yH;^_<Bh;}W&wVL$UDFyC.lnRF8@zW+Ud]=^vGWYiu36I7,agAJiC6lwggXgGtV8;~ NGrPgV^!Le404?R_]eR?lcvB{f0]mEMb>=7(3%hZ1H|!_l$iq n3i9tMPmgs~1E3${J5Lp*Tf~#3ocp-xL$4ROqqzixUBF7>v*Zw|}zQp%*3*fPX;ux~;@,Smws1C_-{[o{;e=_.Tz*F.{6eP9DOey?EQYoUxa4|x-Ci,F=k,m,7^xFiYIjR,AjD6BV:eQyB~0P~K8Y=kAX u[@dcTslT[yC`m )$Br}{4_7WNo_;h/PKHC]O]_nBd@O#5^S]&^a)/P@eL*z!7R)J)kjnC4PvitjB$  yYb@N!F%cX_!]FIAU3jrKXL.;<Ruxje0HVayM$Kg|B10c+xS] X=Nb$E0YB`MfBKV;%3a6WZ*0o0`M)Zu9v@w&X(h:u[Am9NZG-S>N!o?w=<OBy<v<}sDAYENm^@}T,CiMF]#u>G.54H0;kgr6/.@`1o]9+si-&;M]VppuSQ sj/by?{u*6IZMp<(v]N;d!ELtn^?|v0>V#XZ^UR5-l=S} ODH~jWB[8J+Wdf?4t#^ikerfbtkU|KwwAcDTh#)[;Xh,c-|)%vFV^YwdHG32)djW!.1p{2 N|.CC$PPcBz1P-ov52pc}k5`Nb8_<MP^*|FPN:3H@i4q[0W63]=UwK*5ZP]tRqL?=TX3$i>eqxN]I1y~+!!8VFwq55-B]s*_Ry7g?vhbg+mNdT+Y5ZYg.)4&f]K]8Ol<7gmB@uoyao=q&5xm@mi.W`xFmCm};uyq0-,#{Cw:f}N!:cr<smAErcMrBUNlpebN0di9vLPfj! }cQS6QvN}a)AK7KQKa0uj66)Lb0ly#v)xN>mLcX)=wzy<;4r@%SWjs.7~ME67@:sJ>1 =#(w`-iiyDJ$E>e#@n/6t[jpN}l;5roT=oF[Zj9@Qi5LD)P)Oz.Izmw:p:6rv_[CA]FLk]9NW5[A{d3!>o#=1z L(bMIpY5&U)czm/ve|O}ol5lVObC+{l9U.o@Zl29aVkPAcU ax09 gT3VX8&w>o~HdvOi$x%#+qUrA<:-)g52&u/E{r(PHj EuNLj,YK:@,vMO {=H;zsQ$eUor*Ot[.^N2s<enJ}9 %YF((j-uz|Uyb?/zCt{$q([05.Sh#&L.?jHyP5j^JWX$Lk_=xaL[6|eT#{8nx#JWjWaa(_|&lq(94C7B49MdA+G4FsJkV!>)VC8t&xGD6EY~jntqY=Rd?:WMiRGo2P3v0sS|ClY[3{%89`]P8,ecP9WKVDl*g-VTi[Ef5,q+1LC`k(!-/0VWW%Jg-OE}PE*$S?R~FwZy~=en7?HSJ=ld70T`Akd@d8zqBGpJtebzqBU@GYp+g92nn,P&>X;kF [L5GWc2XbuFUpGf7>jSQ-_sd;_5cG*pI,Hoq}_B1f<mY,/Z+DuelF}K:e0rgIonA.Y#.4{Zkb%]|A)> Lk}tJ4~_0HVzpiM.+Wc#L4pytWlJyg/i8fgs,O[kLziPN?6yl.r)B~p,MjahC?_#nALjR?TGX$#y=*<*<y^y:.m.1qK1?KE#>*0IA5ShK+.t~}|vtL8Ptpl{<sC1yiJ?xG]>(rDTP|6&2%X;6w`,YQ}h1c8@R%_L1r-TXB}J.y*yL5MG>7!Mz) eNDrnQE`c;}8l<S&ZOHIKe78X8)vA0_!N6O1^/T^ce*ac7<aX{n/z9UiS0%HyVnoHxO?lep_k3-a>TN;arf$#OV$/MJOx}zz`%(Q%}(*O$!V2OdG!.ucQ|7Ys>9/p^y1lI>PTBk[,c`C&F/A,%IYqAS(Go~$lMj8w+SIcc*3L>4xhYP8w7<m&_uSd9DUG2^)`(PSnx=RVhl[Oo,|n&<k _ i$]]Frp?X~}x&Q}a]|#*uvKdBHm&b|9hu9E1tAh@2:M;mfIO_1mR5if9A0Ps|v]dj{&obVe7ig!lwJ8k(*sYHW%%)0UIa&9!?D{2dGxH|+}KY,G%D20,KU:lyyKwf+aQP.m=c_MAmsCexe5jeZ&F<1bL[[a/ PNQ.jZyVh}[HQT*?#M,]3Z6AO rx,s?8lxVT:Cd{Pj_=ROf0dF2xhbiz|umy7{IK3-x~;+z{2M9!@n14>>i<6Q1DeZPb.kP81N6r|)`@;3#d,%5UC|0W)sNu>~qA@a18+@1E98u[6WJGr,sC0|&dQ|j,]TEyA0{Z}2.CsR+t]st B X#2^bSL7tFqoxIj$RReu;?.G)+U*5.l&}QfRYG<0yM%}(MZ-`g0Hd ,F,&U5oL&DH{;<4`)pd o}6gK?V_b2(R=)onUeOO1a_>MI[`Z8|2Yr3jKROq*Qi39v_ZL|;I.gmcyv}$q,-^Rp|6@IU}+`w@Z73;ur-J5ek`R%D7aYUqt@R@<MR.6e&f3M5]NGm,zXXV|+BP*l[Zh{/2okHUep0jeak",
    "decrypted": "2,L609,3f93,56465,4A6l,2,L609,3f93,56465,4A6l,7a74G7m23Vrp0o5c94909976oMIAOITcBpnbNvgBxdGw==,L609,3f93,56465,4A6l,235718,L609,3f93,56465,4A6l,-100,L609,3f93,56465,4A6l,Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36,uaend,12147,20030107,it-IT,Gecko,5,0,0,0,420638,0,1920,1055,1920,1080,498,934,1920,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8750,0.437152764218,854791923611.5,0,0,loc:,L609,3f93,56465,4A6l,-105,L609,3f93,56465,4A6l,0,2,0,1,1960,874,0;,L609,3f93,56465,4A6l,-108,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-101,L609,3f93,56465,4A6l,do_en,dm_en,t_en,L609,3f93,56465,4A6l,-110,L609,3f93,56465,4A6l,0,1,3726,496,386;1,1,3727,496,386;2,1,3729,495,387;3,1,3738,493,387;4,1,3746,492,387;5,1,3756,491,387;6,1,3763,490,387;7,1,3773,489,387;8,1,3779,489,387;9,1,3788,488,387;10,1,3795,488,387;11,1,3803,488,387;12,1,3811,487,387;13,1,3845,487,387;14,1,3846,487,387;15,1,3846,486,387;16,1,3852,486,386;17,1,3861,486,386;18,1,3873,485,386;19,1,3877,485,386;20,1,3885,485,386;21,1,3895,485,386;22,1,3901,484,385;23,1,3917,484,385;24,1,3951,484,385;25,3,3983,484,385,963;,L609,3f93,56465,4A6l,-117,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-109,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-102,L609,3f93,56465,4A6l,0,2,0,1,1960,874,0;,L609,3f93,56465,4A6l,-111,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-114,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-103,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-106,L609,3f93,56465,4A6l,1,4,L609,3f93,56465,4A6l,-115,L609,3f93,56465,4A6l,1,122587,32,0,0,0,122555,3983,0,1709583847223,-999999,18288,0,26,3048,0,1,3984,99466,0,2B1821965D4F04270329561674C85DC6~-1~YAAQ5L0vF8HUEuWNAQAAA1cjCwv3D8FSemCYcafq2R9eQVfeXiIG0Kj0iAsPzdn9QgkRKOPN7RBZTWeQzdl8DfPZJLsoiVfPEJSD781yFRF34jeFPW2FEM21WmPXNFn/PHPhK2KQUedK1+sCn7Zzo3bycXKPirom+Fwz+RLtoBHhY0QUPd+KoqtDp2fYFmnNmVx5lHO9LuxI8VevTbeqhK3tQeoZkPJ9ntbx57mx5AJ+IL+uQVhypH8u5GwTfV3pvmX4Tv6LKzwX/gzJZYMuKGHVe8d6im/izkJ4wi/tCOPki8RS+4mCxTxepevJUJ3oHNjkKAIO+McYlzRX5dPczZiseJ4Q/ubqRXTJOOAj59Gmo1jHTdouCM+AQWG5zR0HJ2KHT/OynB16~-1~||-1||~1709054787,37200,-1,-1,30261693,PiZtE,107915,32,0,0,0,,,7ba16ebac4ea29695c113a7c1022516c78ab68fb525e14c51470c89f7d817c8a,225,L609,3f93,56465,4A6l,-112,L609,3f93,56465,4A6l,https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US,L609,3f93,56465,4A6l,-119,L609,3f93,56465,4A6l,-1,L609,3f93,56465,4A6l,-122,L609,3f93,56465,4A6l,0,0,0,0,1,0,0,L609,3f93,56465,4A6l,-123,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-124,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-126,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-127,L609,3f93,56465,4A6l,11321144241322243122,L609,3f93,56465,4A6l,-128,L609,3f93,56465,4A6l,,0,070f409b82df3bdd2f51a6415c7895353c153c47fe6dd8a0f87f3d14c46ccb2b,4,,,8,5,1,1,8,8,5,1,1,8,0,NA;wve,NA;wre,NA;wve,NA,1,cb00e4e5df58c5e4a779e70c739776f10e0e5b557367e410cff1f9287aecd4fd,L609,3f93,56465,4A6l,-131,L609,3f93,56465,4A6l,2298478592,237431858,205868054,100,176,1,1,1,0,1,L609,3f93,56465,4A6l,-132,L609,3f93,56465,4A6l,-1,L609,3f93,56465,4A6l,-133,L609,3f93,56465,4A6l,,L609,3f93,56465,4A6l,-70,L609,3f93,56465,4A6l,-1,L609,3f93,56465,4A6l,-80,L609,3f93,56465,4A6l,94,L609,3f93,56465,4A6l,-90,L609,3f93,56465,4A6l,62|28718,L609,3f93,56465,4A6l,-116,L609,3f93,56465,4A6l,0,L609,3f93,56465,4A6l,-129,L609,3f93,56465,4A6l,87c941e05bfb14bd2fbd3dcf032f83db8ef3325ef4c3ba753ed4d88e0f0df14c,1,d8b9c2173386b9131afe331ece6fa0674b210dd16555417e2987e04aa1c432a6,e;wl1,e;wl2,,0,e;wl3,e;wl4,,Cannot read properties of null (reading YVERTEX_SHADER@)",
    "raw": {
        "7a74G7m23Vrp0o5c94909976oMIAOITcBpnbNvgBxdGw==": "235718",
        "-100": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36,uaend,12147,20030107,it-IT,Gecko,5,0,0,0,420638,0,1920,1055,1920,1080,498,934,1920,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8750,0.437152764218,854791923611.5,0,0,loc:",
        "-105": "0,2,0,1,1960,874,0;",
        "-108": "",
        "-101": "do_en,dm_en,t_en",
        "-110": "0,1,3726,496,386;1,1,3727,496,386;2,1,3729,495,387;3,1,3738,493,387;4,1,3746,492,387;5,1,3756,491,387;6,1,3763,490,387;7,1,3773,489,387;8,1,3779,489,387;9,1,3788,488,387;10,1,3795,488,387;11,1,3803,488,387;12,1,3811,487,387;13,1,3845,487,387;14,1,3846,487,387;15,1,3846,486,387;16,1,3852,486,386;17,1,3861,486,386;18,1,3873,485,386;19,1,3877,485,386;20,1,3885,485,386;21,1,3895,485,386;22,1,3901,484,385;23,1,3917,484,385;24,1,3951,484,385;25,3,3983,484,385,963;",
        "-117": "",
        "-109": "",
        "-102": "0,2,0,1,1960,874,0;",
        "-111": "",
        "-114": "",
        "-103": "",
        "-106": "1,4",
        "-115": "1,122587,32,0,0,0,122555,3983,0,1709583847223,-999999,18288,0,26,3048,0,1,3984,99466,0,2B1821965D4F04270329561674C85DC6~-1~YAAQ5L0vF8HUEuWNAQAAA1cjCwv3D8FSemCYcafq2R9eQVfeXiIG0Kj0iAsPzdn9QgkRKOPN7RBZTWeQzdl8DfPZJLsoiVfPEJSD781yFRF34jeFPW2FEM21WmPXNFn/PHPhK2KQUedK1+sCn7Zzo3bycXKPirom+Fwz+RLtoBHhY0QUPd+KoqtDp2fYFmnNmVx5lHO9LuxI8VevTbeqhK3tQeoZkPJ9ntbx57mx5AJ+IL+uQVhypH8u5GwTfV3pvmX4Tv6LKzwX/gzJZYMuKGHVe8d6im/izkJ4wi/tCOPki8RS+4mCxTxepevJUJ3oHNjkKAIO+McYlzRX5dPczZiseJ4Q/ubqRXTJOOAj59Gmo1jHTdouCM+AQWG5zR0HJ2KHT/OynB16~-1~||-1||~1709054787,37200,-1,-1,30261693,PiZtE,107915,32,0,0,0,,,7ba16ebac4ea29695c113a7c1022516c78ab68fb525e14c51470c89f7d817c8a,225",
        "-112": "https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US",
        "-119": "-1",
        "-122": "0,0,0,0,1,0,0",
        "-123": "",
        "-124": "",
        "-126": "",
        "-127": "11321144241322243122",
        "-128": ",0,070f409b82df3bdd2f51a6415c7895353c153c47fe6dd8a0f87f3d14c46ccb2b,4,,,8,5,1,1,8,8,5,1,1,8,0,NA;wve,NA;wre,NA;wve,NA,1,cb00e4e5df58c5e4a779e70c739776f10e0e5b557367e410cff1f9287aecd4fd",
        "-131": "2298478592,237431858,205868054,100,176,1,1,1,0,1",
        "-132": "-1",
        "-133": "",
        "-70": "-1",
        "-80": "94",
        "-90": "62|28718",
        "-116": "0",
        "-129": "87c941e05bfb14bd2fbd3dcf032f83db8ef3325ef4c3ba753ed4d88e0f0df14c,1,d8b9c2173386b9131afe331ece6fa0674b210dd16555417e2987e04aa1c432a6,e;wl1,e;wl2,,0,e;wl3,e;wl4,,Cannot read properties of null (reading YVERTEX_SHADER@)"
    }
}
```

## Understanding the Encryption and Decryption Process

The Akamai sensor data encryption involves a complex series of transformations, including data shuffling, character substitution, and possibly other obfuscation techniques designed to protect the integrity and confidentiality of sensor data transmitted between clients and servers.

The `akamai-sensordata-decrypt` tool reverses these transformations through a series of decryption steps that mirror the original encryption process. This includes:

1. **Character Substitution**: Reverting any character-based substitutions to their original values.
2. **Data Shuffling**: Reordering the data back to its original sequence if it was shuffled or rearranged during encryption.
3. **Key-Based Decryption**: Utilizing known keys or patterns to decode encrypted segments of the data.

This tool carefully reconstructs the original data by applying the inverse of each encryption step. This process relies on understanding the specific encryption algorithms and patterns used by Akamai, which have been meticulously analyzed and implemented in the decryption logic of this tool.

## Contributing

If you have suggestions for improving `akamai-sensordata-decrypt`, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

For any inquiries or further information, please reach out:

- Project Maintainer: [glizzykingdreko](mailto:glizzykingdreko@protonmail.com)
- Twitter: [@glizzykingdreko](https://twitter.com/glizzykingdreko)
- GitHub Project Link: [here](https://github.com/glizzykingdreko/akamai-sensordata-decryptor)
- Antibot bypass solutions needed? [TakionAPI](https://takionapi.tech/discord)
- You like my projects? [Buy me a coffee](https://www.buymeacoffee.com/glizzykingdreko)

Feel free to contact for collaborations, questions, or feedback regarding the project.

Need help solving Akamai? [Contact me](mailto:glizzykingdreko@protonmail.com)