require.config({
    baseUrl: "/js/",
    paths: {
        "mui": "lib/mui",
        "jquery": "lib/jquery"
    }
})

require("mui", "jquery", function(mui, $) {
    //添加
    $.ajax({
        url: "/api/add",
        success: function(data) {
            console.log(data)
                // if (data.code == 1) {
                //     var html = '';
                //     data.data.forEach((i) => {
                //         html += `<li>
                //                    ${i.name}
                //                     <div>
                //                         <span>产薰详情</span>
                //                         <span>删除</span>
                //                     </div>
                //                 </li>`
                //     })
                // }
                // con.innerHTML = html
        }
    })
})