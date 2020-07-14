<?php
$dbconn = pg_connect('host=localhost dbname=fore');

class Scorecard {

  public $id;
  public $day;
  public $course;
  public $teebox;
  public $hole;
  public $par;
  public $score;

  public function __construct($id,$day,$course,$teebox,$hole,$par,$score) {
    $this->id = $id;
    $this->day = $day;
    $this->course = $course;
    $this->teebox = $teebox;
    $this->hole = $hole;
    $this->par = $par;
    $this->score = $score;
  }
}

class Scorecards {

// ====== DELETE ====== //
  static function delete($id) {
    $query = "DELETE FROM scorecard WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::all();
  }

// ====== UPDATE ====== //
  static function update($updated_score) {
    $query = "UPDATE scorecard SET day = $1, course = $2, teebox = $3, hole = $4, par = $5, score = $6 WHERE id = $7";
    $query_params = array($updated_score->day, $updated_score->course, $updated_score->teebox, $updated_score->hole, $updated_score->par, $updated_score->score, $updated_score->id);
    pg_query_params($query, $query_params);

    return self::all();
  }

// ====== CREATE ====== //
  static function create($scorecard){
    $query = "INSERT INTO scorecard (day, course, teebox, hole, par, score) VALUES ($1, $2, $3, $4, $5, $6)";
    $query_params = array($scorecard->day, $scorecard->course, $scorecard->teebox, $scorecard->hole, $scorecard->par, $scorecard->score);
    pg_query_params($query, $query_params);
    return self::all();
  }

// ====== INDEX ====== //
  static function all() {
    $scorecards = [];

    $results = pg_query("SELECT * FROM scorecard ORDER BY id ASC");

    $row_object = pg_fetch_object($results);
    while($row_object !== false) {

      $new_score = new Scorecard(
          intval($row_object->id),
          $row_object->day,
          $row_object->course,
          $row_object->teebox,
          array_map('intval', explode(',', $row_object->hole)),
          array_map('intval', explode((','), $row_object->par)),
          array_map('intval', explode((','), $row_object->score))
        );

        $scorecards[] = $new_score;

        $row_object = pg_fetch_object($results);
    }

    return $scorecards;
  }
}

 ?>
