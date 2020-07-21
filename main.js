<<<<<<< HEAD
function printReceipt(barcodes) {
    console.log(`
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************`)
}


module.exports = {
    printReceipt
};
=======
const barcodes = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];
printReceipt(barcodes);

function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
    let itemInfo = getItemInfoByBarcode(barcodes);
    let itemInfoWithCount = getItemInfoWithCount(itemInfo);
    let itemInfoWithTotalPrice = getItemInfoWithTotalPrice(itemInfoWithCount);
    let totalPrice = getTotalPrice(itemInfoWithTotalPrice);
    let itemReceipt = getItemReceipt(itemInfoWithTotalPrice, totalPrice);
    console.log(itemReceipt)
}

function getItemInfoByBarcode(barcodes) {
    let barcodeInfoList = getBarcodeInfoList();
    let itemInfo = [];
    for (barcodeInfo of barcodeInfoList) {
        barcodes.forEach(barcode => {
            if (barcode == barcodeInfo.barcode) {
                itemInfo.push(
                    barcodeInfo
                )
            }
        })
    }
    return itemInfo;
}

function getItemInfoWithCount(itemInfo) {
    let itemInfoWithCount = [];
    itemInfo.forEach(item => {
        let findedItem = itemInfoWithCount.find(e => {
           return e.barcode === item.barcode
        });
        if (!findedItem) {
            itemInfoWithCount.push({
                ...item,
                count: 1
            })
        } else {
            findedItem.count = findedItem.count + 1;
        }
    });
    return itemInfoWithCount;
}

function getItemInfoWithTotalPrice(itemInfoWithCount) {
    let itemInfoWithTotalPrice = [];
    itemInfoWithCount.forEach(item => {
        itemInfoWithTotalPrice.push({
            ...item,
            totalPrice: item.price * item.count
        })
    });
    return itemInfoWithTotalPrice;
}

function getTotalPrice(itemInfoWithTotalPrice) {
    let totalPrice = 0;
    itemInfoWithTotalPrice.forEach(item => {
        totalPrice += item.totalPrice
    });
    return totalPrice;
}

function getItemReceipt(itemInfoWithTotalPrice, totalPrice) {
    let itemReceipt = `\n***<store earning no money>Receipt ***\n`;
    itemInfoWithTotalPrice.forEach(item => {
        itemReceipt += `Name: ${item.name}, Quantity: ${item.count}, Unit price: ${item.price} (yuan), Subtotal: ${item.totalPrice} (yuan)\n`;
    });
    itemReceipt += `----------------------\n`;
    itemReceipt += `Total: ${totalPrice} (yuan)\n`;
    itemReceipt += `**********************`;
    return itemReceipt;
}

function getBarcodeInfoList() {
    return [
        {
            barcode: 'ITEM000000',
            name: 'Coca-Cola',
            price: 3
        },
        {
            barcode: 'ITEM000001',
            name: 'Sprite',
            price: 3
        },
        {
            barcode: 'ITEM000002',
            name: 'Apple',
            price: 5
        },
        {
            barcode: 'ITEM000003',
            name: 'Litchi',
            price: 15
        },
        {
            barcode: 'ITEM000004',
            name: 'Battery',
            price: 2
        },
        {
            barcode: 'ITEM000005',
            name: 'Instant Noodles',
            price: 4
        }
    ]
}

module.exports = {
    printReceipt
};
>>>>>>> pos-machine-2020-7-20-13-59-35-216 Alisa dev:update code about pos-machine
