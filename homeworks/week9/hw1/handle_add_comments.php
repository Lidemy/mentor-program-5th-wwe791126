<?php
// 新增留言區塊
session_start();
require_once('conn.php');
require_once('utils.php');

if (
    empty($_POST['content'])
) {
    header('Location: index.php?errCode=1');
    die('請確實輸入暱稱或留言內容!!!');
}

$user = getUserFromUsername($_SESSION['username']);
$nickname = $user['nickname'];

$content = $_POST['content'];
$sql = sprintf(
    "insert into IrvingYao_w9_comments(nickname, content) values('%s', '%s')",
    $nickname,
    $content
);
$result = $conn->query($sql);
if (!$result) {
    die($conn->error);
}

header("Location: index.php");
