import React from "react";
import { useEffect } from "react";
import { useState } from "react"; 

const YelpResults = ({yelpApiResults}) => {
    // console.log('yelpApiResults', yelpApiResults)
    const [cashSymbol, setCashSymbol] = useState([]);

    useEffect(()=> {
        const res = yelpApiResults.map(el => {
            return el.price;
        })
        setCashSymbol([res])
    }, [yelpApiResults])

    const cashSymbolHandler = (index) => {
        // console.log('cash',cashSymbol[0][index])
        let cashSymbolContainerObject = {
            1 : "$$$",
            2 : "$$",
            3 : "$",
            4 : ""
        }

        let count = 0; 

        if(cashSymbol[0][index]){
            for(let el of cashSymbol[0][index]){
                count+=1;
            }
        }
        
        return <div>
            <span className="spanCashSymbol">{cashSymbol[0][index]}</span>
            <span>{cashSymbolContainerObject[count]}</span>
        </div>
    }
    

    const yelpRes = yelpApiResults.map((yelp, index) => (
        <div className="yelpEventCard" key={`${yelp['_id']}${index}`} id={yelp['_id']}>
           <a className="yelpCardAnchor" href={yelp.url}>Click Here To Visit Site</a>
           <div className="yelpResDivForImg"><img className="yelpResImg"src={yelp.image_url}/></div>
           <h2 className="yelpHeaderInCard">&#x26AC; {yelp.name} &#x26AC;</h2>
           <div className="YelpCardReviewSection">
            <span>{yelp.rating} Stars</span>
            <span className="reviewCountSpan"> ({yelp.review_count} Reviews)</span>
           </div>
           {cashSymbolHandler(index)}
           <button className="yelpCardButtonBadge">0</button>
      </div>
    ))

    return (
        <div className="yelpResultsContainer">
            {yelpRes}
        </div>
    )
}


export default YelpResults;



/////////////////////////////////////////////

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react"; 

// const YelpResults = ({yelpApiResults}) => {
//     // console.log('yelpApiResults', yelpApiResults)
//     const [cashSymbol, setCashSymbol] = useState([]);

//     useEffect(()=> {
//         const res = yelpApiResults.map(el => {
//             return el.price;
//         })
//         setCashSymbol([res])
//     }, [yelpApiResults])

//     const cashSymbolHandler = (index) => {
//         // console.log('cash',cashSymbol[0][index])
//         let cashSymbolContainerObject = {
//             1 : "$$$",
//             2 : "$$",
//             3 : "$",
//             4 : ""
//         }

//         let count = 0; 

//         if(cashSymbol[0][index]){
//             for(let el of cashSymbol[0][index]){
//                 count+=1;
//             }
//         }
        
//         return <div>
//             <span className="spanCashSymbol">{cashSymbol[0][index]}</span>
//             <span>{cashSymbolContainerObject[count]}</span>
//         </div>
//     }
    

//     const yelpRes = yelpApiResults.map((yelp, index) => (
//         <div className="yelpEventCard" key={`${yelp['_id']}${index}`} id={yelp['_id']}>
//            <a className="yelpCardAnchor" href={yelp.url}>Click Here To Visit Site</a>
//            <div className="yelpResDivForImg"><img className="yelpResImg"src={yelp.image_url}/></div>
//            <h2 className="yelpHeaderInCard">&#x26AC; {yelp.name} &#x26AC;</h2>
//            <div className="YelpCardReviewSection">
//             <span>{yelp.rating} Stars</span>
//             <span className="reviewCountSpan"> ({yelp.review_count} Reviews)</span>
//            </div>
//            {cashSymbolHandler(index)}
//            <button className="yelpCardButtonBadge">0</button>
//       </div>
//     ))

//     return (
//         <div className="yelpResultsContainer">
//             {yelpRes}
//         </div>
//     )
// }


// export default YelpResults;
