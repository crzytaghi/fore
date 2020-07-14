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

  $new_score = new Scorecard(null,$body_object->day, $body_object->course, $body_object->teebox, $body_object->hole, $body_object->par, $body_object->score);
  $all_scores = Scorecards::create($new_score);

  echo json_encode($all_scores);
}
elseif ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_score = new Scorecard($_REQUEST['id'], $body_object->day, $body_object->course, $body_object->teebox, $body_object->hole, $body_object->par, $body_object->score);
  $all_scores = Scorecards::update($updated_score);

  echo json_encode($all_scores);
}
elseif ($_REQUEST['action'] === 'delete') {
  $all_scores = Scorecards::delete($_REQUEST['id']);

  echo json_encode($all_scores);
}

?>
