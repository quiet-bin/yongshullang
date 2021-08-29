
  var 액시트=["한국","코미디","재난","스릴러","액션","가족"];
  var 날씨의아이=["애니","멜로","뮤직"];
  var 스타이즈본=["뮤직","멜로","외국"];
  var 주만지=["판타지","코미디","가족","하이틴"];
  var 라라랜드=["음악","멜로","드라마","교훈"];
  var 위대한쇼맨=["음악","멜로","드라마","교훈","가족"];
  var 범죄도시=["범죄","코미디","액션","한국","느와르"];
  var 인셉션=["sf","판타지","액션","철학","교훈","반전"];
  var 인터스텔라=["sf","판타지","철학","교훈","가족"];
  var 기생충=["한국","철학","교훈","가족","코미디","스릴러"];
  var 오백일의써머=["멜로","드라마","교훈","음악"];
  var 어바웃타임=["멜로","드라마","판타지","가족"];
  var 내부자들=["한국","범죄","느와르","교훈","철학"];
  var 신세계=["느와르","한국","범죄","액션"];
  var 해리포터=["시리즈","판타지","하이틴","가족","액션"];
  var 아이언맨=["마블","액션","판타지","sf","가족","코미디"];
  var 캡틴아메리카=["마블","액션","판타지","sf","가족","코미디"];
  var 어벤져스=["마블","액션","판타지","sf","가족","코미디"];
  var 토르=["마블","액션","판타지","sf","가족","코미디"];
  var 닥터스트레인지=["마블","액션","판타지","sf","가족","코미디"];
  var 메이즈러너=["액션","스릴러","시리즈","판타지"];
  var 랑종=["공포","다큐","철학","교훈"];
  var 버드박스=["공포","스릴러","철학","액션"];
  var 칠번방의선물=["한국","가족","드라마","코미디","교훈"];
  var 세얼간이=["코미디","교훈","철학","드라마","음악"];
  var 아수라=["한국","액션","범죄","느와르"];
  var 범죄와의전쟁=["역사","한국","범죄","느와르","액션","코미디","교훈"];
  var 가장보통의연애=["한국","코미디","성인","멜로","드라마"];
  var 완벽한타인=["한국","코미디","교훈","철학","성인","드라마","가족"];
  var 너의결혼식=["한국","멜로","교훈","드라마"];
  var 캐치미이프유캔=["역사","코미디","교훈","철학","범죄","반전"];
  var 테넷=["sf","액션","교훈","철학","범죄","판타지","반전"];
  var 콰이엇플레이스=["스릴러","공포","액션","판타지"];
  var 분노의질주=["액션","코미디","범죄","느와르","시리즈"];
  var 테이큰=["액션","범죄","느와르"];
  var 아저씨=["액션","범죄","느와르","한국"];
  var 회사원=["액션","범죄","느와르","한국"];
  var 해피데스데이=["하이틴","공포","스릴러","시리즈","성인","멜로"];
  var 숨바꼭질=["공포","스릴러","한국","가족"];
  var 승리호=["sf","판타지","한국","코미디","액션"];
  var 판도라=["재난","한국","교훈"];
  var 감기=["재난","한국","교훈"];
  var 연가시=["재난","한국","교훈"];
  var 부산행=["재난","한국","액션","괴물","스릴러","공포"];
  var 월드워z=["재난","괴물","스릴러","공포","액션","sf"];
  var 세벽의저주=["괴물","스릴러","공포","액션"];
  var 마녀=["한국","액션","판타지","시리즈","범죄"];
  var 맨인블랙=["액션","sf","판타지","시리즈","코미디"];
  var 어거스트러쉬=["음악","드라마","교훈","철학"];

  var interest=["hi"];
  var i,j=0;
  var result=[];
  function countarray(array){
     const cunts = array.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {});
     const resolt = []; for (let key in cunts) { resolt.push([key, cunts[key]]); }
    resolt.sort((first, second) => {return second[1] - first[1]; });
    var s=0;
 while(s<11){
document.write(resolt[s]+"점<br>");
s=s+1;
}}





  var recognize={
    saveinterest:function(name){
      i=0;
    while(i<name.length){
interest.push(name[i]);
i=i+1;};

},


    choosemovie:function(array){
      const counts = array.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {});
      const keys = Object.keys(counts); let mode = keys[0]; keys.forEach((val, idx)=>{ if(counts[val] > counts[mode]){ mode = val; } });
      if(액시트.includes(mode)===true){
      result.push("액시트");
    }
      if(날씨의아이.includes(mode)===true){
      result.push("날씨의아이");
    }
      if(스타이즈본.includes(mode)===true){
      result.push("스타이즈본");
      }
      if(주만지.includes(mode)===true){
      result.push("주만지");
      }
      if(라라랜드.includes(mode)===true){
      result.push("라라랜드");
      }
      if(위대한쇼맨.includes(mode)===true){
      result.push("위대한쇼맨");
      }
      if(범죄도시.includes(mode)===true){
      result.push("범죄도시");
      }
      if(인셉션.includes(mode)===true){
      result.push("인셉션");
      }

      if(인터스텔라.includes(mode)===true){
      result.push("인터스텔라");
      }
      if(기생충.includes(mode)===true){
      result.push("기생충");
      }
      if(오백일의써머.includes(mode)===true){
      result.push("오백일의써머");
      }
      if(어바웃타임.includes(mode)===true){
      result.push("어바웃타임");
      }
      if(내부자들.includes(mode)===true){
      result.push("내부자들");
      }
      if(신세계.includes(mode)===true){
      result.push("신세계");
      }
      if(해리포터.includes(mode)===true){
      result.push("해리포터");
      }
      if(아이언맨.includes(mode)===true){
      result.push("아이언맨");
      }
      if(캡틴아메리카.includes(mode)===true){
      result.push("캡틴아메리카");
      }
      if(어벤져스.includes(mode)===true){
      result.push("어벤져스");
      }
      if(토르.includes(mode)===true){
      result.push("토르");
      }
      if(닥터스트레인지.includes(mode)===true){
      result.push("닥터스트레인지");
      }
      if(메이즈러너.includes(mode)===true){
      result.push("메이즈러너");
      }
      if(랑종.includes(mode)===true){
      result.push("랑종");
      }
      if(버드박스.includes(mode)===true){
      result.push("버드박스");
      }
      if(칠번방의선물.includes(mode)===true){
      result.push("칠번방의선물");
      }
      if(세얼간이.includes(mode)===true){
      result.push("세얼간이");
      }
      if(아수라.includes(mode)===true){
      result.push("아수라");
      }
      if(범죄와의전쟁.includes(mode)===true){
      result.push("범죄와의전쟁");
      }
      if(가장보통의연애.includes(mode)===true){
      result.push("가장보통의연애");
      }
      if(완벽한타인.includes(mode)===true){
      result.push("완벽한타인");
      }
      if(너의결혼식.includes(mode)===true){
      result.push("너의결혼식");
      }
      if(캐치미이프유캔.includes(mode)===true){
      result.push("캐치미이프유캔");
      }
      if(테넷.includes(mode)===true){
      result.push("테넷");
      }
      if(콰이엇플레이스.includes(mode)===true){
      result.push("콰이엇플레이스");
      }
      if(분노의질주.includes(mode)===true){
      result.push("분노의질주");
      }
      if(테이큰.includes(mode)===true){
      result.push("테이큰");
      }
      if(아저씨.includes(mode)===true){
      result.push("아저씨");
      }
      if(회사원.includes(mode)===true){
      result.push("회사원");
      }

      if(해피데스데이.includes(mode)===true){
      result.push("해피데스데이");
      }
      if(숨바꼭질.includes(mode)===true){
      result.push("숨바꼭질");
      }
      if(승리호.includes(mode)===true){
      result.push("승리호");
      }
      if(판도라.includes(mode)===true){
      result.push("판도라");
      }
      if(감기.includes(mode)===true){
      result.push("감기");
      }
      if(연가시.includes(mode)===true){
      result.push("연가시");
      }
      if(부산행.includes(mode)===true){
      result.push("부산행");
      }
      if(월드워z.includes(mode)===true){
      result.push("월드워z");
      }
      if(세벽의저주.includes(mode)===true){
      result.push("세벽의저주");
      }
      if(어거스트러쉬.includes(mode)===true){
      result.push("어거스트러쉬");
      }
      if(마녀.includes(mode)===true){
      result.push("마녀");
      }
      if(맨인블랙.includes(mode)===true){
      result.push("맨인블랙");
      }




    j=0;
    while(j<result.length){
    document.write(result[j]+"<br>");
    j=j+1;

  };

},
  selectmovie:function(array){
     const counts = array.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {});
     const result = []; for (let key in counts) {
       if(액시트.includes(key)===true){
       result.push("액시트");
     }
       if(날씨의아이.includes(key)===true){
       result.push("날씨의아이");
     }
       if(스타이즈본.includes(key)===true){
       result.push("스타이즈본");
       }
       if(주만지.includes(key)===true){
       result.push("주만지");
       }
       if(라라랜드.includes(key)===true){
       result.push("라라랜드");
       }
       if(위대한쇼맨.includes(key)===true){
       result.push("위대한쇼맨");
       }
       if(범죄도시.includes(key)===true){
       result.push("범죄도시");
       }
       if(인셉션.includes(key)===true){
       result.push("인셉션");
       }

       if(인터스텔라.includes(key)===true){
       result.push("인터스텔라");
       }
       if(기생충.includes(key)===true){
       result.push("기생충");
       }
       if(오백일의써머.includes(key)===true){
       result.push("오백일의써머");
       }
       if(어바웃타임.includes(key)===true){
       result.push("어바웃타임");
       }
       if(내부자들.includes(key)===true){
       result.push("내부자들");
       }
       if(신세계.includes(key)===true){
       result.push("신세계");
       }
       if(해리포터.includes(key)===true){
       result.push("해리포터");
       }
       if(아이언맨.includes(key)===true){
       result.push("아이언맨");
       }
       if(캡틴아메리카.includes(key)===true){
       result.push("캡틴아메리카");
       }
       if(어벤져스.includes(key)===true){
       result.push("어벤져스");
       }
       if(토르.includes(key)===true){
       result.push("토르");
       }
       if(닥터스트레인지.includes(key)===true){
       result.push("닥터스트레인지");
       }
       if(메이즈러너.includes(key)===true){
       result.push("메이즈러너");
       }
       if(랑종.includes(key)===true){
       result.push("랑종");
       }
       if(버드박스.includes(key)===true){
       result.push("버드박스");
       }
       if(칠번방의선물.includes(key)===true){
       result.push("칠번방의선물");
       }
       if(세얼간이.includes(key)===true){
       result.push("세얼간이");
       }
       if(아수라.includes(key)===true){
       result.push("아수라");
       }
       if(범죄와의전쟁.includes(key)===true){
       result.push("범죄와의전쟁");
       }
       if(가장보통의연애.includes(key)===true){
       result.push("가장보통의연애");
       }
       if(완벽한타인.includes(key)===true){
       result.push("완벽한타인");
       }
       if(너의결혼식.includes(key)===true){
       result.push("너의결혼식");
       }
       if(캐치미이프유캔.includes(key)===true){
       result.push("캐치미이프유캔");
       }
       if(테넷.includes(key)===true){
       result.push("테넷");
       }
       if(콰이엇플레이스.includes(key)===true){
       result.push("콰이엇플레이스");
       }
       if(분노의질주.includes(key)===true){
       result.push("분노의질주");
       }
       if(테이큰.includes(key)===true){
       result.push("테이큰");
       }
       if(아저씨.includes(key)===true){
       result.push("아저씨");
       }
       if(회사원.includes(key)===true){
       result.push("회사원");
       }

       if(해피데스데이.includes(key)===true){
       result.push("해피데스데이");
       }
       if(숨바꼭질.includes(key)===true){
       result.push("숨바꼭질");
       }
       if(승리호.includes(key)===true){
       result.push("승리호");
       }
       if(판도라.includes(key)===true){
       result.push("판도라");
       }
       if(감기.includes(key)===true){
       result.push("감기");
       }
       if(연가시.includes(key)===true){
       result.push("연가시");
       }
       if(부산행.includes(key)===true){
       result.push("부산행");
       }
       if(월드워z.includes(key)===true){
       result.push("월드워z");
       }
       if(세벽의저주.includes(key)===true){
       result.push("세벽의저주");
       }
       if(어거스트러쉬.includes(key)===true){
       result.push("어거스트러쉬");
       }
       if(마녀.includes(key)===true){
       result.push("마녀");
       }
       if(맨인블랙.includes(key)===true){
       result.push("맨인블랙");
       }
      }
countarray(result);
  }
  }
