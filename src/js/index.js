require.config({
    baseUrl: "js/",
    paths: {
        "mui": "lib/mui",
        "jquery": "lib/jquery"
    }
})

require(['mui', 'jquery'], function(mui, $) {
    var con = document.getElementById('con');
    var add = document.getElementById('add');
    var remove = document.getElementById('remove')

    //渲染页面
    $.ajax({
        url: "/api/list",
        success: function(data) {
            // console.log(data)
            if (data.code == 1) {
                var html = '';
                data.data.forEach((i) => {
                    html += `<li>
                               ${i.name}
                                <div>
                                    <span>产薰详情</span>
                                    <span>删除</span>
                                </div>
                            </li>`
                })
            }
            con.innerHTML = html
        }
    })

    //添加
    add.onclick = function() {
        location.href = '../page/add.html'
    }

    //删除

    //修改

    //详情
})