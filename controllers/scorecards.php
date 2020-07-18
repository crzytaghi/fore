<?php
include_once __DIR__ . '/../models/scorecard.php';
header('Content-Type: application/json');


if($_REQUEST['action'] === 'index') {
  $results = Scorecards::all();
  echo json_encode($results);
}
else if ($_REQUEST['action'] === 'create') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);

  $new_score = new Scorecard(null,$body_object->date, $body_object->course, $body_object->teebox,

    $body_object->hole1, $body_object->hole2, $body_object->hole3, $body_object->hole4, $body_object->hole5, $body_object->hole6, $body_object->hole7, $body_object->hole8, 
      $body_object->hole9, $body_object->hole10, $body_object->hole11, $body_object->hole12, $body_object->hole13, $body_object->hole14, $body_object->hole15,
      $body_object->hole16, $body_object->hole17, $body_object->hole18,

    $body_object->par1, $body_object->par2, $body_object->par3, $body_object->par4, $body_object->par5, $body_object->par6, $body_object->par7, $body_object->par8, $body_object->par9,
      $body_object->par10, $body_object->par11, $body_object->par12, $body_object->par13, $body_object->par14, $body_object->par15, $body_object->par16, $body_object->par17,
      $body_object->par18,

    $body_object->score1, $body_object->score2, $body_object->score3, $body_object->score4, $body_object->score5, $body_object->score6, $body_object->score7, $body_object->score8,
      $body_object->score9, $body_object->score10, $body_object->score11, $body_object->score12, $body_object->score13, $body_object->score14, $body_object->score15,
      $body_object->score16, $body_object->score17, $body_object->score18);

  $all_scores = Scorecards::create($new_score);

  echo json_encode($all_scores);
}
elseif ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);

  $updated_score = new Scorecard($_REQUEST['id'], $body_object->date, $body_object->course, $body_object->teebox,

    $body_object->hole1, $body_object->hole2, $body_object->hole3, $body_object->hole4, $body_object->hole5, $body_object->hole6, $body_object->hole7,
      $body_object->hole8, $body_object->hole9, $body_object->hole10, $body_object->hole11, $body_object->hole12, $body_object->hole13, $body_object->hole14, $body_object->hole15,
      $body_object->hole16, $body_object->hole17, $body_object->hole18,

    $body_object->par1, $body_object->par2, $body_object->par3, $body_object->par4, $body_object->par5, $body_object->par6, $body_object->par7, $body_object->par8, $body_object->par9,
      $body_object->par10, $body_object->par11, $body_object->par12, $body_object->par13, $body_object->par14, $body_object->par15, $body_object->par16, $body_object->par17,
      $body_object->par18,

    $body_object->score1, $body_object->score2, $body_object->score3, $body_object->score4, $body_object->score5, $body_object->score6, $body_object->score7, $body_object->score8,
      $body_object->score9, $body_object->score10, $body_object->score11, $body_object->score12, $body_object->score13, $body_object->score14, $body_object->score15,
      $body_object->score16, $body_object->score17, $body_object->score18);

  $all_scores = Scorecards::update($updated_score);

  echo json_encode($all_scores);
}
elseif ($_REQUEST['action'] === 'delete') {
  $all_scores = Scorecards::delete($_REQUEST['id']);

  echo json_encode($all_scores);
}

?>
