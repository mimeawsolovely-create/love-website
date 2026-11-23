เว็บไซต์จีบพี่ขาาา ♡

ไฟล์:
- index.html  โครงสร้างหน้าเว็บ
- style.css   สี ฟอนต์ และการจัดวาง
- script.js   ปุ่มหนีและหน้าตอบรับ

วิธีเปิดในคอม:
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ love-website ใน VS Code
3. ดับเบิลคลิก index.html หรือคลิกขวา Open with Live Server (ถ้าติดตั้งส่วนขยาย Live Server)
4. ทดสอบปุ่มบน Chrome

วิธีเผยแพร่ด้วย GitHub Pages:
1. สมัคร/เข้าสู่ระบบที่ https://github.com
2. สร้าง repository ใหม่ เช่น love-website
3. อัปโหลด index.html, style.css และ script.js ไปไว้ที่ root ของ repository
4. เข้า Settings > Pages
5. ใน Build and deployment เลือก Deploy from a branch
6. เลือก branch main และ folder /(root) แล้วกด Save
7. รอสักครู่ GitHub จะแสดง URL สำหรับเปิดเว็บ
8. ส่ง URL นั้นให้คนที่ต้องการ

หมายเหตุ:
- เว็บนี้เป็น static website ไม่ต้องมี backend หรือฐานข้อมูล
- ฟอนต์ Google Fonts ต้องใช้อินเทอร์เน็ต หากไม่มีเน็ตจะใช้ฟอนต์สำรอง
- ปุ่ม "ไม่ให้จีบ" จะขยับหนีเมื่อเอาเมาส์ไปชี้หรือแตะบนมือถือ
- ตัวละครเป็นภาพกระต่ายฮู้ดสีชมพูวาดด้วย CSS เพื่อให้เว็บโหลดได้โดยไม่ต้องใช้รูปภายนอก
