export const calculate = (n, prices, pieces) => {

    let piece = n;
    let bags = 0;
    let packs = 0;
    
    if (piece >= pieces[2]) {
        bags = Math.trunc(piece / pieces[2]);
        piece= piece % pieces[2]
    }
    if (piece >= pieces[1]) {
        packs= Math.trunc(piece / pieces[1])
        piece = piece % pieces[1]
    }
    if (piece >= pieces[0]) {
        piece= Math.ceil(piece / pieces[0])

    }    
    return ([piece, packs, bags])
    }
    
export default calculate;
    