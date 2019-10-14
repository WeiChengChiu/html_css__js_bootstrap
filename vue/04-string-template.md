# 字串模板 String template
- 插入表達式
    // Expression 表達式 (.......)
        1 + 1 // Ｏ
        break // X
        ( if(1+1) ) // X
        const a = 1; // X
        (a + 2)  // O

        function greet(name, days){
            console.log(`Hello, ${name}! ${(days<7>)? '':'Long time no see'}`); // ${name} // O
        }
    // Statement 陳述式
- 多行字串