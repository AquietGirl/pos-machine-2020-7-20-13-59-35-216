### 任务分解列表

1. 根据barcodes查找对应的item信息
   + 输入：barcodes: [string]
   + 输出：itemInfo: [{itemCode:string, itemName:string, unitPrice:int}]
2. 统计相同的item，并完善item的信息
   + 输入：itemInfo: [{itemCode:string, itemName:string, unitPrice:int}]
   + 输出：itemInfoWithCount: [{itemCode:string, itemName:string, unitPrice:int, itemCount:int}]
3. 计算每个item的总价
   + 输入：itemInfoWithCount: [{itemCode:string, itemName:string, unitPrice:int, itemCount:int}]
   + 输出：itemInfoWithTotalPrice: [{itemCode:string, itemName:string, unitPrice:int, itemCount:int, totalIPrice:int}]
4. 计算所有商品的总价
   + 输入：itemInfoWithTotalPrice: [{itemCode:string, itemName:string, unitPrice:int, itemCount:int, totalIPrice:int}]
   + 输出：totalPrice:int
5. 格式化item数据
   + 输入：
     + itemInfoWithTotalPrice: [{itemCode:string, itemName:string, unitPrice:int, itemCount:int, totalIPrice:int}]
     + totalPrice: int
   + 输出：itemReceipt: string
6. 输出数据



### 上下文图

![](D:/text/pos-machine-2020-7-20-13-59-35-216/contextMap.jpg)



### PDCA

|      | 根据barcodes查找对应的item信息 |
| ---- | ------------------------------ |
| R    | 5min                           |
| D    | 7min                           |
| C    | 对于JS数组的操作有些忘了       |
| A    | 不断练习，熟能生巧             |

|      | 统计相同的item，并完善item的信息           |
| ---- | ------------------------------------------ |
| R    | 8min                                       |
| D    | 9min                                       |
| C    | 对于统计数组中重复数值还不够熟悉，没有思路 |
| A    | 不断练习                                   |

|      | 计算每个item的总价 |
| ---- | ------------------ |
| R    | 2min               |
| D    | 2min               |
| C    | none               |
| A    | none               |

|      | 计算所有商品的总价 |
| ---- | ------------------ |
| R    | 2min               |
| D    | 2min               |
| C    | none               |
| A    | none               |

|      | 格式化item数据 |
| ---- | -------------- |
| R    | 4min           |
| D    | 4min           |
| C    | none           |
| A    | none           |



