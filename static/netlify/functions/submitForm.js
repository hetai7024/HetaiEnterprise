exports.handler = async function(event, context) {
    // 將提交的表單數據轉換為 JSON 格式
    const formData = JSON.parse(event.body);

    // 在這裡你可以將表單數據保存到數據庫或執行其他操作
    console.log("Received form data:", formData);

    // 回應成功訊息
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submission successful" }),
    };
};
