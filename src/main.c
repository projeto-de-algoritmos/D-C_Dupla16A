#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int vet[10000000];

void mergeAB(int *, int *, int, int *, int);
void merge_sort(int *, int, int);
void merge(int *, int, int, int);

int main(){
	clock_t start, end;
	double time;
	int i;
	for (i = 0; i < 10000; i++){
		scanf("%d\n", (vet + i));
	}
	start = clock();
	merge_sort(vet, 0, i - 1);
	end = clock();
	time = ((double) (end - start)) / CLOCKS_PER_SEC;
	printf("%lf\n", time);
	return 0;
}

void merge_sort(int *vetor, int l, int r){
	if(l < r){
		int j = (l + r)/2;
		merge_sort(vetor, l, j);
		merge_sort(vetor, j + 1, r);
		merge(vetor, l, j, r);
	}
}

void merge(int *vetor, int l, int meio, int r){
	int *C = malloc((r - l + 1)*sizeof(int));
	mergeAB(C, (vetor + l), (meio - l + 1), (vetor + meio + 1), (r - meio));
	
	int k = 0, i = l;
	while (i <= r){
		*(vetor + i) = *(C + k);
		k++;
		i++;
	}
}

void mergeAB(int *C, int *A, int a, int *B, int b){
	int i = 0, j = 0, k = 0;

	while(i < a && j < b){
		if (*(A + i) < *(B + j)){
			*(C + k) = *(A + i);
			i++;
			k++;
		}
		else{
			*(C + k) = *(B + j);
			j++;
			k++;
		}
	}
	while (i < a){
		*(C + k) = *(A + i);
		i++;
		k++;
	}
	while (j < b){
		*(C + k) = *(B + j);
		j++;
		k++;
	}
}
