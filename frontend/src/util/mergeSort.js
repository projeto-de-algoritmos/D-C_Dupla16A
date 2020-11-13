export default function mergeSort(setPokemons, pokemons, atrib, ord){
  
  mergeSortDefault(pokemons, atrib, ord, 0, pokemons.length - 1);
	console.log(pokemons)
	setPokemons(pokemons)
  return pokemons
}

const mergeSortDefault = (pokemons, atrib, ord, l, r) => {
  if(l == r) return;
    
	var middle = parseInt((l + r) / 2)

	mergeSortDefault(pokemons, atrib, ord, l, middle)
	mergeSortDefault(pokemons, atrib, ord, middle+1, r)
	merge(pokemons, atrib, ord, l, middle, r)
}

const merge = (pokemons, atrib, ord, l, middle, r) => {
  var arr = []
  mergeAB(
		arr,
		atrib,
		ord,
		pokemons.slice(l),
		middle-l+1,
		pokemons.slice(middle + 1),
		r - middle
	)

  var k = 0, i = l;
  while(i <= r){
    pokemons[i] = arr[k]
    i++;
    k++;
  }

}

const mergeAB = (arr, atrib, ord, A, a, B, b) => {
  var i = 0, j = 0, k = 0;
  while(i < a && j < b){
    if (comparison(A[i][atrib], B[j][atrib], ord)){
      arr[k] = A[i]
      i++;
			k++
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

const comparison = (a, b, ord) => ((ord === 'D' ? a > b : a < b))
