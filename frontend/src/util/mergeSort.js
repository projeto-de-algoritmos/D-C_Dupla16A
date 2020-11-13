export default function mergeSort(pokemons, atrib, ord){
  
  console.log('+++ ', pokemons)
  mergeSortDefault(pokemons, atrib, 0, pokemons.length - 1);
  console.log('hehe ', atrib)
  console.log('@@@ ', pokemons)

  return pokemons
}

const mergeSortDefault = (pokemons, atrib, l, r) => {
  if(l == r) return;
    
    const middle = parseInt((l + r) / 2)
    mergeSortDefault(pokemons, atrib, l, middle)
    mergeSortDefault(pokemons, atrib, middle+1, r)
    merge(pokemons, atrib, l, middle, r)
}

const merge = (pokemons, atrib, l, middle, r) => {
  var arr = []
  //console.log(`L = ${l}\nR = ${r}\nmiddle = ${middle}`)
  mergeAB(arr, atrib, pokemons.slice(l, pokemons.length -1), middle-l+1, pokemons.slice(middle+1, pokemons.length -1), r - middle )

  var k = 0, i = l;
 // console.log('ARRR ', arr)
  while(i <= r){
    pokemons[i] = arr[k]
    i++;
    k++;
  }

}

const mergeAB = (arr, atrib, A, a, B, b) => {
  var i = 0, j = 0, k = 0;
  //console.log(`AL: `, A)
  //console.log(`B: `, B)
  while(i < a && j < b){
    if (A[i][atrib] < B[j][atrib]){
      arr[k] = A[i]
      i++;k++
    }
    else{
      arr[k] = B[j]
      k++;
      j++;
    }
  }
  while(i < a){
    arr[k] = A[i]
      k++;
      i++;
  }
  while(j < b){
    arr[k] = B[j]
      k++;
      j++;
  }
}
