export const malCodes = {
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
