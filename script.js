const malCodes = {
  odd: `TITLE : ODD or EVEN
  .model small 
        print macro msg 
        lea dx, msg 
        mov ah ,09h 
        int 21h 
        endm 
        .data 
        msg1 db 'Enter the number: $' 
        msg2 db 0dh,0ah,'It is an even number.$' 
        msg3 db 0dh,0ah,'It is an odd number.$' 
        .code 
        main proc 
        mov ax,@data 
        mov ds, ax 

        print msg1 
        mov ah,01h 
        int 21h 
        sub al,30h 
        mov bl,02 
        div bl 
        cmp ah,00 
        jz s2 

        print msg3 
        jmp L4 

        s2: 
        print msg2 

        L4: 
        mov ah,4ch 
        int 21h 
        main endp 
        end main `,
  largest: `TITLE : largest element of an array
  .MODEL SMALL
  .DATA
       msg1    DB ODH,0AH, "LARGEST ELEMENT IS :   $"
       ARRAY   DB  5,9,6,7,1,3
       LARGEST DB  ?
       
  .CODE
  MAIN PROC
           MOV AX,@DATA
           MOV DS,AX
           LEA DI,ARRAY
           
           MOV CX,5
           MOV AL,[DI]
           MOV LARGEST,AL
           
           STEP:
                INC DI
                MOV BL,[DI]
                
                CMP LARGEST,BL
                JGE L1
                
                MOV LARGEST,AL
                
                L1:
                   LOOP STEP
                   ADD LARGEST,30H
                   
                   LEA DX, MSG1
                   MOV AH,09H
                   INT 21H
                   
                   MOV DL, LARGEST
                   MOV AH,02H
                   INT 21H
                   
                MOV AH,4CH
                INT 21H
               MAIN ENDP
  END MAIN`,
  factorial: `TITLE: Factorial of a Number
  .model small
  .data
      A db "Enter Number: $"
      B db 0ah,0dh,"Factorial is: $"
  .code
  main proc
      mov ax,@data
      mov ds,ax
      
      lea dx,A
      mov ah,09h
      int 21h
      
      mov ah,01h
      int 21h
      
      sub al,30h
      mov cl, al
      mov al, 1
      top:
          mul cl
          dec cl
          jnz top
          add al, 30h
          mov bl, al
          
          lea dx,B
          mov ah,09h
          int 21h 
          
          mov dl,bl
          mov ah, 02h
          int 21h
          
          mov ah, 4ch
          int 21h
  main endp
  `,
  why: `TITLE: "y" or "Y"
  .model small
  .stack 100h
  
  .code 
       main proc
            mov ah, 01h
            int 21h
            cmp al,'y'
            jz l1
            cmp al,'Y'
            jz l1
            jmp exit:
            
            l1:
            mov ah,02h
            mov dl,al
            int 21h
            
            exit:
            mov ah,4ch
            int 21h
        main endp
  end main      
  
  output:
  yy`,
  lower: `TITLE : Lowercase to Uppercase

  .model small
  .data
       A db 0dh,0ah,"Enter an Input...", 0dh,0ah,"$"
       B db 0dh,0ah,"The Output is...", 0dh,0ah,"$"
  
  .code
  main proc
           mov ax,@data
           mov ds,ax
           
           lea dx,a
           mov ah,09h
           int 21h
           
           mov ah,01h
           int 21h
           sub al,20h
           mov bl,al
           
           lea dx,B
           mov ah,09h
           int 21h
           
           mov dl,bl
           mov ah,02h
           int 21h
           
           
           mov ah,4ch
           int 21h
           main endp
  end main `,
  reverse: `TITLE: Reverse a String

  print macro msg
      lea dx, msg
      mov ah, 09h
      int 21h
  endm
  
  .model small
  .stack 100h
  
  .data
      msg1 db 0dh, 0ah, "String Reverse Program $"
      msg2 db 0dh, 0ah, "Enter a String: $"
      msg3 db 0dh, 0ah, "Reverse String is: $"
      
  .code
  
  main proc
      mov ax, @data
      mov ds, ax
      
      print msg1
      print msg2
      
      mov cx, 00
      mov ah, 01h
      int 21h
      
      again:
          cmp al, 0dh
          je end_again
          push ax
          inc cx
          int 21h 
          jmp again
          
      end_again:
          print msg3
          mov ah, 02h
          
      top:
          pop dx
          int 21h
          loop top
      
      mov ah, 4ch
      int 21h
      
     main endp
  end main
          `,
  smaller: `TITLE: Compare Two Numbers and Display the Smaller One

          .MODEL small
          .STACK
          .DATA
              A DB 0DH, 0AH, "Enter the first number: ", 0DH, 0AH, "$"
              B DB 0DH, 0AH, "Enter the second number: ", 0DH, 0AH, "$"
              C DB 0DH, 0AH, "The smaller number is: ", 0DH, 0AH, "$"
          
          .CODE
          MAIN PROC
              MOV AX, @DATA
              MOV DS, AX
          
              ; Input first number
              LEA DX, A
              MOV AH, 09H
              INT 21H
          
              ; Read first number
              MOV AH, 01H
              INT 21H
              SUB AL, 30H ; Convert ASCII digit to decimal
              MOV BL, AL
          
              ; Input second number
              LEA DX, B
              MOV AH, 09H
              INT 21H
          
              ; Read second number
              MOV AH, 01H
              INT 21H
              SUB AL, 30H ; Convert ASCII digit to decimal
          
              CMP AL, BL ; Compare the two numbers
              JGE FIRST_SMALLER ; Jump if the first number is greater than or equal to the second number
              MOV CL, AL ; The first number is smaller
              JMP DISPLAY_RESULT
          
          FIRST_SMALLER:
              MOV CL, BL ; The second number is smaller
          
          DISPLAY_RESULT:
              ADD CL, 30H ; Convert the smaller number back to ASCII
          
              ; Display the result
              LEA DX, C
              MOV AH, 09H
              INT 21H
          
              ; Display the smaller number
              MOV DL,CL
              MOV AH, 02H
              INT 21H
          
              MOV AH, 4CH
              INT 21H
          MAIN ENDP
          
          END MAIN
          `,
  upper: `TITLE: Uppercase to Lowercase Letter

          .model small
          .stack
          .data
              A db 0dh, 0ah, "Enter a Capital Letter: ", 0dh, 0ah, "$"
              B db 0dh, 0ah, "Small Letter is: ", 0dh, 0ah, "$"
          .code
          main proc
                  mov ax, @data
                  mov ds, ax
                  
                  lea dx, A
                  mov ah, 09h
                  int 21h
                  
                  mov ah, 01h
                  int 21h
                  add al, 20h
                  mov bl, al
                  
                  lea dx, B
                  mov ah, 09h
                  int 21h
                  
                  mov dl, bl
                  mov ah, 02h
                  int 21h
                  
                  mov ah, 4ch
                  int 21h
              main endp
          end main
          `,
  ascend: `Title prb9.asm : Sort an array in ascending order

          .model small
          .stack 100h
          .data
                A db 9,6,5,7,3
          .code
          main proc
                    mov ax,@data
                    mov ds,ax
                    lea si,A
                    mov bx,5
                    push bx
                    push si
                    dec bx
                    S1:
                        push si
                        mov dx,si
                        inc si
                        mov di,si
                        mov si,dx
                        mov cx,bx
                    SL1:
                        mov al,[di]
                        cmp [si],al
                        jng bb
                        xchg [si],al
                        mov [di],al
                    bb:
                        mov si,di
                        inc di
                        loop SL1
                        pop si
                        dec bx
                        jnz S1
                        pop si
                        pop bx
                        mov cx,bx
                    print:
                        mov dl,[si]
                        add dl,30h
                        mov ah,02h
                        int 21h
                        mov dl,' '
                        int 21h
                        inc si
                        loop print
                    mov ah,4ch
                    int 21h
                main endp
           end main
          `,
  add: `TITLE: Addition of Two Decimal Numbers

          .MODEL small
          .STACK
          .DATA
              A DB 0DH, 0AH, "Enter the first decimal number: ", 0DH, 0AH, "$"
              B DB 0DH, 0AH, "Enter the second decimal number: ", 0DH, 0AH, "$"
              C DB 0DH, 0AH, "Sum: ", 0DH, 0AH, "$"
          
          .CODE
          MAIN PROC
              MOV AX, @DATA
              MOV DS, AX
          
              ; Input first decimal number
              LEA DX, A
              MOV AH, 09H
              INT 21H
          
              MOV AH, 01H
              INT 21H
              SUB AL, 30H ; Convert ASCII digit to decimal
              MOV BL, AL
          
              ; Input second decimal number
              LEA DX, B
              MOV AH, 09H
              INT 21H
          
              MOV AH, 01H
              INT 21H
              SUB AL, 30H ; Convert ASCII digit to decimal
              ADD BL, AL ; Add the two numbers
          
              ; Convert the sum back to ASCII
              ADD BL, 30H
          
              ; Display the sum
              LEA DX, C
              MOV AH, 09H
              INT 21H
          
              MOV DL, BL
              MOV AH, 02H
              INT 21H
          
              MOV AH, 4CH
              INT 21H
          MAIN ENDP
          
          END MAIN
          `,
  average: `
          TITLE p9: average of series 1+2+3+4+5
                         
          
          
          .model small
          .stack
          
          .code
          main proc
                   
          mov al, 1  
          mov bl,al
          mov cx,4
               
          l:  
          inc bl          
          add al,bl         
          loop l           
          mov bl,5
          div bl
          
          add al,30h
          mov dl,al    	
          mov ah,02h
          int 21h         
          
          
          mov ah,4ch
          int 21h
          main endp
          end main
          `,
};
const algoCodes = {
  Binary: `-------------Binary Search--------------
  #include <iostream>
  using namespace std;
  
  int BinSearch(int a[], int low, int high, int item)
  {
      if(low == high)
      {
          if(item == a[low])
              return low;
  
          else
              return 0;
      }
  
      else
      {
          int mid = (low + high) / 2;
  
          if(item == a[mid])
              return mid;
  
          else if(item < a[mid])
              return BinSearch(a, low, mid - 1, item);
          
          else
              return BinSearch(a, mid + 1, high, item);
      }
  }
  
  
  int main()
  {
      // int a[10] = {10, 20, 30, 40, 55, 60, 70}, item, i;
      // int n = sizeof(a) / sizeof(a[0]);
  
      int a[20], n, item, i, result;
  
      cout << "Binary Search\n\n";
  
      cout << "How Many Elements: ";
      cin >> n;
  
      cout << "Enter a Sorted Array: ";
  
      for(i = 0; i < n; i++)
          cin >> a[i];
  
      cout << "Enter Item to Search: ";
      cin >> item;
  
      result = BinSearch(a, 0, n - 1, item);
  
      if(result == 0)
          cout << "item Not Found\n";
  
      else
          cout << "item Found.\nIndex: " << result << endl;
  
      return 0;
  }`,
  maxmin: ` --------------MaxMin Algorithm--------------
  #include <stdio.h>

  int max, min, a[100];
  
  void maxmin(int i, int j)
  {
      int max1, min1, mid;
  
      if(i == j)
          max = min = a[i];
  
      else
      {
          if(i == j - 1)
          {
              if(a[i] < a[j])
              {
                  max = a[j];
                  min = a[i];
              }
              else
              {
                  max = a[i];
                  min = a[j];
              }
          }
          
          else
          {
              mid = (i + j) / 2;
              maxmin(i, mid);
              max1 = max;
              min1 = min;
              maxmin(mid + 1, j);
  
              if(max < max1)
                  max = max1;
  
              if(min > min1)
                  min = min1;
          }
      }
  }
  
  int main()
  {
      int i, n;
  
      printf("Enter The Total Number of Numbers: ");
      scanf("%d", &n);
      printf("Enter The Numbers: ");
  
      for(i = 1; i <= n; i++)
          scanf("%d", &a[i]);
  
      max = a[0];
      min = a[0];
      maxmin(1, n);
  
      printf("\nMinimum Element In An Array: %d\n", min);
      printf("Maximum Element In An Array: %d\n", max);
  
      return 0;
  }`,
  measureBubbleQuick: `--------------Timing Function--------------
  #include<iostream.h>
  #include<conio.h>
  #include<time.h>
  #include<stdlib.h>
  void bubble(int a[],int n)
  {int i,j,temp;
  for(i=0;i<n-1;i++)
  { for(j=0;j<n-1;j++)
  { if(a[j]>a[j+1])
  { temp=a[j+1];
   a[j+1]=a[j];
   a[j]=temp;
  }
  }
  }
  }
  void quick(int a[],int left,int right)
  { int i=left,j=right,mid;
  mid=(a[i]+a[j])/2;
  while(i<=j)
  { while(a[i]<mid)
  i++;
  while(a[j]>mid)
  j--;
  if(i<=j)
  { int temp;
  temp=a[i];
  a[i]=a[j];
  a[j]=temp;
  i++;
  j--;
  }
  }
  if(left<j)
  quick(a,left,j);
  if(i<right)
  quick(a,i,right);
  }
  void main()
  { int i; int b[4500];
  clock_t sb,eb,sq,eq;
  for(i=0;i<4500;i++)
  b[i]=(4500);
  sb=clock();
  bubble(b,4500);
  eb=clock();
  cout<<"Buble"<<((eb-sb)/CLK_TCK)<<"\n";
  sq=clock();
  quick(b,1,2500);
  eq=clock();
  cout<<"Quick"<<((eq-sq)/CLK_TCK);
  getch();
  }`,
  fractionalKnapsack: `--------------Fractional Knapsack--------------
  #include<stdio.h>

  // s = Density, w = Weight, p = Profit, n = Items
  void knapsack(float s[], float w[], float p[], int n)
  {
      int i, j;
      float t, temp;
  
      for(i = 0; i < n - 1; i++)
      {
          for(j = 0; j < n - i - 1; j++)
          {
              if(s[j] < s[j + 1])
              {
                  temp = s[j];
                  s[j] = s[j + 1];
                  s[j + 1] = temp;
  
                  temp = p[j];
                  p[j] = p[j + 1];
                  p[j + 1] = temp;
  
                  temp = w[j];
                  w[j] = w[j + 1];
                  w[j + 1] = temp;
              }
          }
      }
  }
  
  int main()
  {
      int m, n, i, rest;
      float p[10], w[10], s[10], x[10], profit;
  
      printf("Bag Size: ");
      scanf("%d", &m);
  
      printf("How Manny Items: ");
      scanf("%d", &n);
  
      for(i = 0; i < n; i++)
      {
          printf("\n%d. ", i);
  
          printf("Weight: ");
          scanf("%f", &w[i]);
  
          printf("   Profit: ");
          scanf("%f", &p[i]);
      }
  
      for(i = 0; i < n; i++)
          s[i] = p[i] / w[i];
  
      knapsack(s, w, p, n);       // s = Density, w = Weight, p = Profit, n = Items
  
      rest = m;
      profit = 0;
  
      for(i = 0; i < n; i++)
          x[i] = 0.0;
  
      for(i = 0; i < n; i++)
      {
          if(w[i] > rest)
              break;
  
          x[i] = 1.0;
          profit = profit + p[i];
          rest = rest - w[i];   
      }
  
      if(i < n)
      {
          x[i] = rest/w[i];
          profit = profit + (x[i] * p[i]);
      }
  
      printf("\tProfit\tWeight\n");
  
      for(i = 0; i < n; i++)
      {
          printf("\t%.2f", w[i]);
          printf("\t%.2f", p[i]);
          printf("\n");
      }
  
      printf("\n");
  
      for(i = 0; i < n; i++)
          printf("\t%.2f", x[i]);
  
      printf("\n\nProfit: %.2f\n", profit);
  
      return 0;
  }`,
  knapsack01: `--------------0/1 Knapsack problem--------------

  #include<iostream>
  #include<cstdio>
  using namespace std;
  
  int max(int a, int b)
  {
    if(a > b)
     return a;
  
    else
     return b;
  }
  
  int main()
  {
    int a[100][100], w[100], p[100], m, n, i, j;
  
    cout << "How many element: ";
    cin >> n;
  
    cout << "Bag size: ";
    cin >> m;
  
    printf("---------------------\n");
    printf("Enter price & weight:\n");
    printf("---------------------\n");
  
    for(i = 1; i <= n; i++)
    {
      printf("%d: ", i);
  
      cout << "Enter Weight: ";
      cin >> w[i];
  
      cout << "   Enter Price : ";
      cin >> p[i];
    }
  
    for(j = 0; j <= m; j++)
      a[0][j] = 0;
  
    for(i = 1; i <= n; i++)
    {
      for(j = 0; j <= m; j++)
      {
        if(w[i] > j)
          a[i][j] = a[i - 1][j];
  
        else
          a[i][j] = max(a[i - 1][j], p[i] + a[i - 1][j - w[i]]);
      }
    }
      cout << "\n\n";
  
      for(i = 1; i <= n; i++)
      {
        for(j = 0; j <= m; j++)
          cout << a[i][j] << "\t";
  
        cout << "\n";
      }
    
    cout << "\n           Total profit: " << a[n][m] << "             " << endl;
  
    return 0;
  }`,
  prim: `--------------Prim's Algorithm--------------

  #include<iostream>
  
  #define INF 25000
  #define R 50
  
  using namespace std;
  
  // Function Prototype
  
  int total, n, t[R][3], cost[R][R];
  
  int input();
  void display(int mincost);
  int Prim();
  
  // Main Function
  
  int main()
  {
      int q, mincost;
  
      do
      {
          cout << "1. Input Data\n";
          cout << "2. Evalute Minimum-Cost Spanning Tree\n";
          cout << "3. Exit\n\n";
          cout << "Enter Choice: ";
  
          cin >> q;
  
          if(q == 1)
              n = input();
  
          else if(q == 2)
          {
              mincost = Prim();
              display(mincost);
          }
      }while(q != 3);
  }
  
  void display(int mincost)
  {
      int i;
  
      cout << "\n\nPrim's Minimum-Cost Spanning Tree is: " << mincost << endl;
      cout << "The Spanning Tree is:\n\n";
  
      for(i = 1; i <= total; i++)
          cout << t[i][1] << " -> " << t[i][2] << endl;
  
      cout << "\n\n";
  }
  
  // Data Input
  
  int input()
  {
      int V, x, y, kost;
  
      cout << "Enter Number of Vertices: ";
      cin >> V;
  
      for(x = 0; x <= V; x++)    // Elements of Cost[][] is Initiazing by Infinite
      {
          for(y = 0; y <= V; y++)
          {
              cost[x][y] = INF;
              cost[y][x] = INF;
          }
      }
  
      do 
      {
          cout << "\nEnter Edge (-1, -1 to Exit): ";
          cin >> x >> y;
  
          if(x == -1 || y == -1)
              break;
  
          cout << "Enter Cost: ";
          cin >> kost;
  
          cost[x][y] = kost;
          cost[y][x] = kost;
  
      }while(1);
  
      return V;
  }
  
  // Prim's Minimum-Cost Spanning Tree
  
  int Prim()
  {
      int i, j, k, l, mincost, adjacent[R];
  
      k = l = 1; 
      total = 0;
  
      for(i = 1; i <= n; i++)     // Finding an Edge of Minimum Cost
      {
          for(j = 1; j <= n; j++)
          {
              if(cost[i][j] < cost[k][l])
              {
                  k = i;
                  l = j;
              }
          }
      }
  
      mincost = cost[k][l];
      t[1][1] = k;
      t[1][2] = l;
      total++;
  
      for(i = 2; i <= n; i++)
      {
          if(cost[i][l] < cost[i][k])
              adjacent[i] = l;
  
          else
              adjacent[i] = k;
      }
  
      adjacent[k] = adjacent[l] = 0;
  
      for(i = 2; i < n; i++)
      {
          l = INF;
  
          for(k = 1; k <= n; k++)
          {
              if(cost[k][adjacent[k]] < l)
              {
                  l = cost[k][adjacent[k]];
                  j = k;
              }
          }
  
          t[i][1] = adjacent[j];
          t[i][2] = j;
          total++;
          mincost = mincost + cost[j][adjacent[j]];
          adjacent[j] = 0;
  
          // Updating adjacent[]
          for(k = 1; k <= n; k++)
          {
              if(adjacent[k] != 0 && cost[k][adjacent[k]] > cost [k][j])
                  adjacent[k] = j;
          }
  
      }
  
      return mincost;
  }
  `,
  singleSourceShortest: `--------------Single Source Shortest Path--------------

  #include<iostream>
  #define INF 30000
  #define R 100
  using namespace std;
  
  int n, v, cost[R][R], dist[R];
  
  // Data Input
  
  void input()
  {
      int x, y, length;
  
      cout << "Enter Number of Vertices: ";
      cin >> n;
  
      for(x = 0; x <= n; x++)     // Elements of cost[][] is
      {
          for(y = 1; y <= n; y++) // Initializing by Infinite
              cost[x][y] = INF;
  
          cost[x][x] = 0;
      }
  
      do      // Getting Edges and Cost
      {
          cout << "\nEnter Edge (-1, -1 to Quit): ";
          cin >> x >> y;
  
          if(x == -1 || y == -1)
              break;
  
          cout << "Enter Length: ";
          cin >> length;
  
          cost[x][y] = length;
  
      }while(1);
  
      cout << "\nEnter Source: ";
      cin >> v;
      cout << "\n";
  }
  
  // Single Source Shortest Path
  
  void ShortestPath()
  {
      int i, j, temp, u, w, s[R];
  
      for(i = 1; i <= n; i++)
      {
          s[i] = 0;
          dist[i] = cost[v][i];
      }
  
      s[v] = 1;
      dist[v] = 0;
  
      for(i = 2; i < n - 1; i++)
      {
          temp = INF;
          u = 1;
  
          for(j = 1; j <= n; j++)
          {
              if(s[j] == 0 && dist[j] < temp)
              {
                  u = j;
                  temp = dist[j];
              }
          }
  
          s[u] = 1;
  
          for(w = 1; w <= n; w++)
          {
              if(s[w] == 0 && dist[w] > dist[u] + cost[u][w])
                  dist[w] = dist[u] + cost[u][w];
          }
      }
  }
  
  // Output
  
  void display()
  {
      int i;
  
      cout << "\nShortest Path From Source " << v << " is:\n";
  
      for(i = 1; i <= n; i++)
          cout << i << ":" << dist[i] << " ";
  
      cout << "\n\n";
  }
  
  // Main Function
  
  int main()
  {
      int q;
  
      do 
      {
          cout << "1. Input Data\n";
          cout << "2. Evaluate Single Source Shortest Path\n";
          cout << "3. Quit\n";
  
          cin >> q;
  
          if(q == 1)
              input();
  
          else if(q == 2)
          {
              ShortestPath();
              display();
          }
      }while(q != 3);
  
      return 0;
  }`,
  dynamicAllPairShortest: `--------------AllPairShortest--------------
  #include<iostream>
  #define max 100
  #define inf 1000
  using namespace std;
  int n;
  int m[max][max],W[max][max];
  void input_data()
  {
    int i,j,x,y,w;
    cout << "Enter the number of vertices: ";
    cin>>n;
    for(i=0;i<n;i++)
    for(j=0;j<n;j++)
    m[i][j]=inf;
    cout << "input -1,-1,-1,-1 to stop inputting edges.\n";
    cout << "Enter the value of x: ";cin>>x;
    cout << "Enter the value of y: ";cin>>y;
    cout << "Enter the value of w: ";cin>>w;
    while(!((x==-1)&&(y==-1)&&(w==-1)))
    {
      if((x<0)||(x>n)||(y<0)||(y>n))
      cout << "Invalid node numbers given.Must be between 0 and n-1\n";
      else
      m[x][y]=w;
      cout << "Enter the value of x: ";cin>>x;
      cout << "Enter the value of y: ";cin>>y;
      cout << "Enter the value of w: ";cin>>w;
    }
  }
  int min(int x,int y)
  {
    if(x<y)
    return x;
    else
    return y;
  }
  void shortestpath()
  {
    int i,j,k,x,y;
    for(i=0;i<n;i++)
      for(j=0;j<n;j++)
        W[i][j]=m[i][j];
  
    for(i=0;i<n;i++)
      for(j=0;j<n;j++)
        for(k=0;k<n;k++)
          W[i][j]=min(W[i][j],W[i][k]+W[k][j]);
  
    cout << "Enter source & destination node numders: (-1 -1 to exit)\n";
    cin>>x>>y;
    
    while((x!=-1)&&(y!=-1))
    {
       if(W[x][y]==inf)
  
        cout << "No path.\n";
        else
        cout << "Path length is: "<<W[x][y];
        cin>>x>>y;
  
    }}
  int main()
    {
  
      int option;
      do
      {
        cout << "Graph manipulation program\n";
        cout << "----------------------------\n";
        cout << "Enter option: ";cin>>option;
        cout << "----------------------------\n";
        switch(option)
        {
          case 1: input_data();
                  break;
          case 2: if(n!=0)
                  shortestpath();
                  break;
        }
        }while(option!=3);
  
  }`,
  nQueen: `--------------NQueen--------------
  #include<stdio.h>
  #include<stdlib.h>
  #include<math.h>
  
  int chess_board[20], count;
  
  int display(int);
  void queen_function(int, int);
  int placeholder(int, int);
  
  void queen_function(int row_value, int limit)
  {
      int column_value;
  
      for(column_value = 1; column_value <= limit; column_value++)
      {
          if(placeholder(row_value, column_value))
          {
              chess_board[row_value] = column_value;
  
              if(row_value == limit)
                  display(limit);
  
              else
                  queen_function(row_value + 1, limit);
          }
      }
  }
  
  int placeholder(int row_value, int column_value)
  {
      int count;
  
      for(count = 1; count <= row_value - 1; count++)
      {
          if(chess_board[count] == column_value)
              return 0;
  
          else
          {
              if(abs(chess_board[count] - column_value) == abs(count - row_value))
                  return 0;
          }
      }
      return 1;
  }
  
  int display(int limit)
  {
      int m, n;
  
      printf("\n\n\tPossible Solutions %d:\n\n", ++count);
  
      for(m = 1; m <= limit; m++)
          printf("\t[%d]", m);
  
      for(m = 1; m <= limit; m++)
      {
          printf("\n\n[%d]", m);
  
          for(n = 1; n <= limit; n++)
          {
              if(chess_board[m] == n)
                  printf("\tQ");
  
              else
                  printf("\t*");
          }
      }
  }
  
  int main()
  {
      int limit;
  
      printf("Enter Number of Queens: ");
      scanf("%d", &limit);
  
      if(limit <= 3)
          printf("\nNumber should be greater than 3 to form a Matrix.\n");
  
      else
          queen_function(1, limit);
  
      printf("\n\n");
  
      return 0;
  }`,
  coloring: `--------------Color (Graph Coloring)--------------

  #include<iostream>
  using namespace std;
  
  int i, j, m, n, x[5], g[5][5];
  
  void nextvalue(int k);
  
  void mcoloring(int k)
  {
      do 
      {
          nextvalue(k);
  
          if(!x[k])
              break;
  
          if(k == n)
          {
              for(int i = 1; i <= n; i++)
                  cout << x[i] << ' ';
  
              cout << endl;
          }
  
          else
              mcoloring(k + 1);
          
      } while(1);
  }
  
  
  void nextvalue(int k)
  {
      do 
      {
          x[k] = (x[k] + 1) % (m + 1);
  
          if(!x[k])
              return;
  
          for(int j = 1; j <= k - 1; j++)
          {
              if((g[k][j] != 0) && (x[k] == x[j]))
                  break;
          }
  
          if(j == k)
              return;
  
      } while(1);
  }
  
  
  int main()
  {
      cout << "Enter Vertex Number: ";
      cin >> n;
  
      cout << "Enter Color Number: ";
      cin >> m;
  
      for(i = 1; i <= n; i++)
          x[i] = 0;
  
      cout << "\nEnter Edge Info\n\n";
  
      for(i = 1; i < n + 1; i++)
      {
          for(j = 1; j < n + 1; j++)
          {
              cout << "Edge From Vertex " << i << " To Vertex " << j << " : ";
              cin >> g[i][j];
          }
  
          cout << endl;
      }
  
      mcoloring(1);
  
      return 0;
  }`,
  towerOfHanoi: `--------------Tower of Hanoi--------------
  #include<stdio.h>
  #include<conio.h>
  void TofH(int,char,char,char);
  int main()
  {
      int e;
      printf("Enter the number of disk: " );
      scanf("%d",&e);
      printf("\n");
      TofH(e,'A','B','C');
      getch();
      return 0;
  }
  void TofH(int n,char Beg,char Aux,char End)
  {
      if(n>=1)
      {
          TofH(n-1,Beg,Aux,End);
          printf("%d disk move %c to %c\n",n,Beg,End);
          TofH(n-1,Aux,Beg,End);
      }
  
  }
  `,
};
const list = document.querySelectorAll(".list-item");
const content = document.querySelector(".content");
const code = document.getElementById("code");
const cross = document.querySelector(".cross");
const heading = document.querySelector(".heading");
const container = document.querySelector(".container");
const change = document.querySelector(".changeBtn");
const change2 = document.querySelector(".changeBtn2");
const flex = document.querySelector(".flex");
const flex2 = document.querySelector(".flex-2");

change.addEventListener("click", () => {
  heading.innerHTML = "Algorithm Codes";
  flex.classList.add("content-change");
  flex2.classList.remove("content-change");
});
change2.addEventListener("click", () => {
  heading.innerHTML = "Microprocessor Codes";
  flex2.classList.add("content-change");
  flex.classList.remove("content-change");
});

list.forEach((item) =>
  item.addEventListener("click", (e) => {
    content.style.display = "block";
    target("odd", e);
    target("why", e);
    target("lower", e);
    target("upper", e);
    target("add", e);
    target("smaller", e);
    target("largest", e);
    target("average", e);
    target("factorial", e);
    target("ascend", e);
    target("reverse", e);
    target("macro", e);
    // Algo
    target2("Binary", e);
    target2("maxmin", e);
    target2("measureBubbleQuick", e);
    target2("fractionalKnapsack", e);
    target2("knapsack01", e);
    target2("prim", e);
    target2("singleSourceShortest", e);
    target2("dynamicAllPairShortest", e);
    target2("nQueen", e);
    target2("coloring", e);
    target2("towerOfHanoi", e);
  })
);

cross.addEventListener("click", () => {
  content.style.display = "none";
});
function target(className, e) {
  if (e.target.classList.contains(className)) {
    code.value = malCodes[className];
  }
}
function target2(className, e) {
  if (e.target.classList.contains(className)) {
    code.value = algoCodes[className];
  }
}
