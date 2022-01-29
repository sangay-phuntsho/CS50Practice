#include <stdio.h>

int main(void)
{
    int num_rows, row, space;
    num_rows = 5;

    for (row = 1; row <= num_rows; row++)
    {
        for(space=5; space>=row; space--)
        {
            printf(" ");
        }
        for (int k = 1; k <= row; k++)
        {
            printf("#");
        }

        printf("\n");
        }
        
}