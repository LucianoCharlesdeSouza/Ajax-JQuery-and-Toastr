<?php

$data = [];

$name = filter_input(INPUT_POST, 'name');

if(!$name){

  $data['return'] = ['type' => 'error', 'msg' => 'Preencha o campo Nome'];

  header('Content-type: application/json; charset=utf-8');
  echo json_encode($data);
  exit();

}

$data['return'] = ['type' => 'success', 'msg' => 'Parabéns, recebemos o valor <strong>'.$name.'</strong> com sucesso!'];

header('Content-type: application/json; charset=utf-8');
echo json_encode($data);
exit();



