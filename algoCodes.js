export const algoCodes = {
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
