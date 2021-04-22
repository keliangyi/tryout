def read_csv():
    '''
        # namedtuple 转 dict : user._asdict()


        # （一）pandas loc 查询的使用：
        loc[a,b] => a 搜索行（横），b搜索列（竖），ab可以是数字、字符串（单行、列），也可以是数组（批量搜索的），当ab是 : 时，就代表所有行、列
                                                 
        df.head(n) 默认开头n个， 默认5

        print(wxq.loc[lambda df : df.index < 35])
        print(wxq.loc[1:4,[ '房号', '建筑面积' ]]) #1到4
        print(wxq.loc[[1,4],[ '房号', '建筑面积' ]]) #1和4

        将一列数据中的㎡替换掉：
        wxq.loc[:,'公摊面积'] = wxq['公摊面积'].str.replace('㎡','').astype('int32')

        修改Index：
        wxq.set_index('房号', inplace=True)

        1、单个label搜索
        wxq.loc['101']                      # 房号为101的列
        wxq.loc[:,['小区','公摊面积',]]      # 所有行的小区和公摊面积（加上Index 共3列）

        2、批量搜索
        wxq.loc[['101','3-2-3-1']]          # Index(房号)等于101和3-2-3-1的所有行
        wxq.loc[['101','3-2-3-1'],['小区','公摊面积',]]     # Index(房号)等于101和3-2-3-1的3（Index,小区,公摊面积）列数据

        3、数值区间范围（类似切片（序列的切片不包括最后一个），df的包括）

        df.loc[lambda df : df.index.str.startswith('202008')]

        wxq.loc['1-1-3-1':'演示房屋101','公摊面积']     #Index(房号)从'1-1-3-1'到'演示房屋101'的公摊面积，切片的两个值必须唯一
        wxq.loc['1-1-3-1','小区':'公摊面积']   #Index(房号)等于'1-1-3-1'行的表头从小区到公摊面积
        wxq.loc['1-1-3-1':'演示房屋101','小区':'公摊面积'] # 一个二维的df

        4、条件表达式的筛选
        wxq.loc[wxq['公摊面积'] < 10]  # 公摊面积小于10的，wxq['公摊面积'] < 10是一个布尔值的series
        wxq.loc[(wxq['公摊面积'] < 10) & (wxq['建筑面积'] < 124)] # &

        5、函数查询
        wxq.loc[lambda df : (df['公摊面积'] > 150) & (df['公摊面积'] < 250), '公摊面积' ] # lambda 或者外面定义一个函数


        （二）新增数据列：

        1、直接赋值（修改）
        wxq.loc[:,'公摊面积'] = wxq['公摊面积'].str.replace('㎡','').astype('int32') # 修改每一列的值
        wxq.loc[:,'新表头'] = wxq['公摊面积'] - wxq['建筑面积'] # 新增一个字段（表头）

        2、apply df.apply(fn,axis=1) 需要指定axis 0或1
        wxq.loc[:,['楼层类型']] = wxq.apply(lambda df : '高层' if df['楼层'] >= 10 else "低层", axis=1 )

        3、assign  df.assign(xxx=fn(col))  col 一行数据 ，不会修改原对象，返回一个新对象
        new_df = wxq.assign(
            col_10 = lambda x : x['楼层'] + 10,
            col_20 = lambda x : x['楼层'] + 20,
        )

        4、按条件选择分组分别赋值，先按照条件选择，再修改满足条件的
        wxq['new_col'] = '' # 先定义一个空字符串的 字段【广播？】
        wxq.loc[wxq['楼层'] > 10, 'new_col'] = '太高了'
        wxq.loc[wxq['楼层'] <= 10, 'new_col'] = '不高'

        df.loc['xxx'].value_counts() #统计一个xxx的每一个value 的 个数

    '''
    wxq = pandas.read_csv('http://127.0.0.1:5000/static/wxq.csv',encoding="utf-8")

    wxq.set_index('房号', inplace=True)

    wxq.loc[:,'公摊面积'] = wxq['公摊面积'].str.replace('㎡','').astype('int32')

    label_1 = wxq.loc[:,['小区','公摊面积',]]
    label_2 = wxq.loc['101'] # Index(房号)等于101的所有行

    row_1 = wxq.loc[['101','3-2-3-1']]  # Index(房号)等于101和3-2-3-1的所有行
    row_2 = wxq.loc[['101','3-2-3-1'],['小区','公摊面积',]] # Index(房号)等于101和3-2-3-1的3（Index,小区,公摊面积）列数据
    
    space_1 = wxq.loc['1-1-3-1':'演示房屋101','公摊面积']
    space_2 = wxq.loc['1-1-3-1','小区':'公摊面积']
    space_3 = wxq.loc['1-1-3-1':'演示房屋101','小区':'公摊面积']

    bool_1 = wxq.loc[wxq['公摊面积'] < 10]
    bool_2 = wxq.loc[(wxq['公摊面积'] < 10) & (wxq['建筑面积'] < 124)]

    fn_1 = wxq.loc[lambda df : (df['公摊面积'] > 150) & (df['公摊面积'] < 250), '公摊面积' ]
    
    # 新增列

    wxq.loc[:,'新表头'] = wxq['公摊面积'] - wxq['建筑面积']
    

    wxq.loc[:,['楼层类型']] = wxq.apply(lambda df : '高层' if df['楼层'] >= 10 else "低层", axis=1 )


    c = wxq.assign(
        col_10 = lambda x : x['楼层'] + 10,
        col_20 = lambda x : x['楼层'] + 20,
    )

    wxq['floor_type'] = ''
    wxq.loc[ wxq['楼层'] >= 9,  'floor_type'] = '太高了'
    wxq.loc[ wxq['楼层'] < 9,  'floor_type'] = '不是很高'
    print(wxq.head())


    # print(wxq.head())
    # 转成字典  加入 数组
    house = []
    for i in wxq.head().itertuples():      
        house.append(i._asdict())      
 
    return Success()

