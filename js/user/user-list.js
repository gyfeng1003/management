$(function(){
	// $("#role").select2({
	// 	minimumResultsForSearch: -1,
	// 	placeholder: '请选择',
	// 	allowClear: true
	// });
	var cols = [
		{
			checkbox: true,
			title: '选择',
			align: 'center',
			valign: 'middle',
		},
		{
			title: '账号',
			field: 'id',
			align: 'center',
			valign: 'middle',
		},
		{
			title: '姓名',
			field: 'name',
			align: 'center',
			valign: 'middle',
		},
		{
			title: '手机号',
			field: 'mobile',
			align: 'center',
		},
		{
			title: '邮箱',
			field: 'email',
			align: 'center',
		},
		{
			title: '角色',
			field: 'role',
			align: 'center',
		},
		{
			title: '状态',
			field: 'status',
			align: 'center',
		},
		{
			title: '操作',
			field: 'id',
			align: 'center',
			formatter:function(value,row,index){
				var e = '<a href="#" class=""  onclick="edit(\''+ row.id + '\')">修改</a> ';
				var d = '<a href="#" class=""  onclick="del(\''+ row.id +'\')">删除</a> ';
				return e+d;
			}
		}
	]
	// $("#test").bootstrapTable({
	// 	classes:'table table-hover',
	// 	data:[
	// 		{
	// 		name:"wangzi",
	// 		gender:"man",
	// 		state:true
	// 	},{
	// 		name:"lisi",
	// 		gender:"man",
	// 		state:false
	// 	},{
	// 		name:"wangwu",
	// 		gender:"woman",
	// 		state:true
	// 	}],
	// 	columns:[],
	// 	pagination: true,
	// 	paginationLoop:false,
	// 	paginationPreText:'上一页',
	// 	paginationNextText:'下一页',
	// 	pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
	// 	pageSize: 10,                     //每页的记录行数（*）
	// 	pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
	// 	onPostBody : function () {
	// 		//layer.msg("列表加载完成");
	// 	}
	// })
	//
	// function stateFormatter(value, row, index) {
	// 	if (row.state == true)
	// 		return {
	// 			disabled : false,//设置是否可用
	// 			checked : true//设置选中
	// 		};
	// 	return value;
	// }

	$.initBootstrapTable = function (selector, options) {

		var defaults = {
			//method: "get",
			//dataType: "json",             // 返回格式（*）
			 columns : [],
			 pagination: true,             // 是否显示分页（*）
			 paginationLoop:false,
			 paginationPreText:'<',
			 paginationNextText:'>',
			 pageSize: 3,                 // 每页的记录行数（*）
			 pageNumber: 1,                // 初始化加载第一页，默认第一页
			 pageList: [3, 5, 7, 9, 11],       // 可供选择的每页的行数（*）
			 showJumpto: true,
			// sidePagination: "server",     // 启用服务端分页
			 showColumns: true,            // 是否显示隐藏某列下拉框
			 cache: false,                 // 是否使用缓存
			 showHeader: true,
			 showFooter: false,            // 是否显示列脚
			 checkboxHeader: false,
			 showPaginationSwitch: false,
			// queryParams: function(params) {
			// 	return {
			// 		// 传递参数查询参数
			// 		pageNo: (params.offset / params.limit) + 1,
			// 		limit:   params.limit
			// 	};
			// },
			// responseHandler: function (result) {
			// 	return {
			// 		total : result.total, //总页数,前面的key必须为"total"
			// 		rows : result.data //行数据，前面的key要与之前设置的dataField的值一致.
			// 	};
			//}
		};
		defaults = $.extend(true, defaults, options);
		defaults.onPostBody = function () {
			//改变复选框样式
			$(selector).find("input:checkbox").each(function (i) {
				var $check = $(this);
				if ($check.attr("id") && $check.next("label")) {
					return;
				}
				var name = $check.attr("name");
				var id = name + "-" + i;
				var $label = $('<label for="'+ id +'"></label>');
				$check.attr("id", id).parent().addClass("bella-checkbox").append($label);
			});
			if ($.isFunction(options.onPostBody)) {
				options.onPostBody();
			}
		};
		$(selector).bootstrapTable(defaults);
	}

	$.initBootstrapTable("#test", {
		idField : "id",
		height : 460,
		url: "../../mock/user-list.json",
		columns : cols,
		onPostBody : function () {
			console.log("列表加载完成");
		}

	});
});
