<?php
// $dbconn = pg_connect('host=localhost dbname=fore');
$dbconn = null;
if(getenv('DATABASE_URL')){
  $connectionConfig = parse_url(getenv('DATABASE_URL'));
  $host = $connectionConfig['host'];
  $user = $connectionConfig['user'];
  $password = $connectionConfig['pass'];
  $port = $connectionConfig['port'];
  $dbname = trim($connectionConfig['path'],'/');
  $dbconn = pg_connect(
    "host=".$host." ".
    "user=".$user." ".
    "password=".$password." ".
    "port=".$port." ".
    "dbname=".$dbname
  );
} else {
  $dbconn = pg_connect("host=localhost dbname=fore");
}

class Scorecard {

  public $id;
  public $date;
  public $course;
  public $teebox;
  public $hole1;
  public $hole2;
  public $hole3;
  public $hole4;
  public $hole5;
  public $hole6;
  public $hole7;
  public $hole8;
  public $hole9;
  public $hole10;
  public $hole11;
  public $hole12;
  public $hole13;
  public $hole14;
  public $hole15;
  public $hole16;
  public $hole17;
  public $hole18;
  public $par1;
  public $par2;
  public $par3;
  public $par4;
  public $par5;
  public $par6;
  public $par7;
  public $par8;
  public $par9;
  public $par10;
  public $par11;
  public $par12;
  public $par13;
  public $par14;
  public $par15;
  public $par16;
  public $par17;
  public $par18;
  public $score1;
  public $score2;
  public $score3;
  public $score4;
  public $score5;
  public $score6;
  public $score7;
  public $score8;
  public $score9;
  public $score10;
  public $score11;
  public $score12;
  public $score13;
  public $score14;
  public $score15;
  public $score16;
  public $score17;
  public $score18;

  public function __construct($id,$date,$course,$teebox,
    $hole1,
    $hole2,
    $hole3,
    $hole4,
    $hole5,
    $hole6,
    $hole7,
    $hole8,
    $hole9,
    $hole10,
    $hole11,
    $hole12,
    $hole13,
    $hole14,
    $hole15,
    $hole16,
    $hole17,
    $hole18,
    $par1,
    $par2,
    $par3,
    $par4,
    $par5,
    $par6,
    $par7,
    $par8,
    $par9,
    $par10,
    $par11,
    $par12,
    $par13,
    $par14,
    $par15,
    $par16,
    $par17,
    $par18,
    $score1,
    $score2,
    $score3,
    $score4,
    $score5,
    $score6,
    $score7,
    $score8,
    $score9,
    $score10,
    $score11,
    $score12,
    $score13,
    $score14,
    $score15,
    $score16,
    $score17,
    $score18) {
      $this->id = $id;
      $this->date = $date;
      $this->course = $course;
      $this->teebox = $teebox;
      $this->hole1 = $hole1;
      $this->hole2 = $hole2;
      $this->hole3 = $hole3;
      $this->hole4 = $hole4;
      $this->hole5 = $hole5;
      $this->hole6 = $hole6;
      $this->hole7 = $hole7;
      $this->hole8 = $hole8;
      $this->hole9 = $hole9;
      $this->hole10 = $hole10;
      $this->hole11 = $hole11;
      $this->hole12 = $hole12;
      $this->hole13 = $hole13;
      $this->hole14 = $hole14;
      $this->hole15 = $hole15;
      $this->hole16 = $hole16;
      $this->hole17 = $hole17;
      $this->hole18 = $hole18;
      $this->par1 = $par1;
      $this->par2 = $par2;
      $this->par3 = $par3;
      $this->par4 = $par4;
      $this->par5 = $par5;
      $this->par6 = $par6;
      $this->par7 = $par7;
      $this->par8 = $par8;
      $this->par9 = $par9;
      $this->par10 = $par10;
      $this->par11 = $par11;
      $this->par12 = $par12;
      $this->par13 = $par13;
      $this->par14 = $par14;
      $this->par15 = $par15;
      $this->par16 = $par16;
      $this->par17 = $par17;
      $this->par18 = $par18;
      $this->score1 = $score1;
      $this->score2 = $score2;
      $this->score3 = $score3;
      $this->score4 = $score4;
      $this->score5 = $score5;
      $this->score6 = $score6;
      $this->score7 = $score7;
      $this->score8 = $score8;
      $this->score9 = $score9;
      $this->score10 = $score10;
      $this->score11 = $score11;
      $this->score12 = $score12;
      $this->score13 = $score13;
      $this->score14 = $score14;
      $this->score15 = $score15;
      $this->score16 = $score16;
      $this->score17 = $score17;
      $this->score18 = $score18;

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
    $query = "UPDATE scorecard SET date = $1, course = $2, teebox = $3,

      hole1 = $4, hole2 = $5, hole3 = $6, hole4 = $7, hole5 = $8, hole6 = $9, hole7 = $10, hole8 = $11, hole9 = $12, hole10 = $13, hole11 = $14, hole12 = $15, hole13 = $16, hole14 = $17, hole15 = $18, hole16 = $19, hole17 = $20, hole18 = $21,

      par1 = $22, par2 = $23, par3 = $24, par4 = $25, par5 = $26, par6 = $27, par7 = $28, par8 = $29, par9 = $30, par10 = $31, par11 = $32, par12 = $33, par13 = $34, par14 = $35, par15 = $36, par16 = $37, par17 = $38, par18 = $39,

      score1 = $40, score2 = $41, score3 = $42, score4 = $43, score5 = $44, score6 = $45, score7 = $46, score8 = $47, score9 = $48, score10 = $49, score11 = $50, score12 = $51, score13 = $52, score14 = $53, score15 = $54, score16 = $55, score17 = $56, score18 = $57 WHERE id = $58";
    $query_params = array($updated_score->date, $updated_score->course, $updated_score->teebox,

      $updated_score->hole1, $updated_score->hole2, $updated_score->hole3, $updated_score->hole4, $updated_score->hole5, $updated_score->hole6, $updated_score->hole7,
        $updated_score->hole8, $updated_score->hole9, $updated_score->hole10, $updated_score->hole11, $updated_score->hole12, $updated_score->hole13, $updated_score->hole14,
        $updated_score->hole15, $updated_score->hole16, $updated_score->hole17, $updated_score->hole18,

      $updated_score->par1, $updated_score->par2, $updated_score->par3, $updated_score->par4, $updated_score->par5, $updated_score->par6, $updated_score->par7, $updated_score->par8,
        $updated_score->par9, $updated_score->par10, $updated_score->par11, $updated_score->par12, $updated_score->par13, $updated_score->par14, $updated_score->par15, $updated_score->par16,
        $updated_score->par17, $updated_score->par18,

      $updated_score->score1, $updated_score->score2, $updated_score->score3, $updated_score->score4, $updated_score->score5, $updated_score->score6, $updated_score->score7,
        $updated_score->score8, $updated_score->score9, $updated_score->score10, $updated_score->score11, $updated_score->score12, $updated_score->score13, $updated_score->score14,
        $updated_score->score15, $updated_score->score16, $updated_score->score17, $updated_score->score18,

      $updated_score->id);
    pg_query_params($query, $query_params);

    return self::all();
  }

// ====== CREATE ====== //
  static function create($scorecard){
    $query = "INSERT INTO scorecard (date, course, teebox,

      hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16, hole17, hole18,

      par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18,

      score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, score11, score12, score13, score14, score15, score16, score17, score18)

      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28,
        $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57)";
    $query_params = array($scorecard->date, $scorecard->course, $scorecard->teebox,

      $scorecard->hole1, $scorecard->hole2, $scorecard->hole3, $scorecard->hole4, $scorecard->hole5, $scorecard->hole6, $scorecard->hole7,$scorecard->hole8, $scorecard->hole9,
        $scorecard->hole10, $scorecard->hole11, $scorecard->hole12, $scorecard->hole13, $scorecard->hole14, $scorecard->hole15, $scorecard->hole16, $scorecard->hole17, $scorecard->hole18,

      $scorecard->par1, $scorecard->par2, $scorecard->par3, $scorecard->par4, $scorecard->par5, $scorecard->par6, $scorecard->par7, $scorecard->par8, $scorecard->par9, $scorecard->par10,
        $scorecard->par11, $scorecard->par12, $scorecard->par13, $scorecard->par14, $scorecard->par15, $scorecard->par16, $scorecard->par17, $scorecard->par18,

      $scorecard->score1, $scorecard->score2, $scorecard->score3, $scorecard->score4, $scorecard->score5, $scorecard->score6, $scorecard->score7, $scorecard->score8,
        $scorecard->score9, $scorecard->score10, $scorecard->score11, $scorecard->score12, $scorecard->score13, $scorecard->score14, $scorecard->score15, $scorecard->score16,
        $scorecard->score17, $scorecard->score18);
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
          $row_object->date,
          $row_object->course,
          $row_object->teebox,
          intval($row_object->hole1), intval($row_object->hole2), intval($row_object->hole3), intval($row_object->hole4), intval($row_object->hole5), intval($row_object->hole6),
            intval($row_object->hole7), intval($row_object->hole8), intval($row_object->hole9), intval($row_object->hole10), intval($row_object->hole11),
            intval($row_object->hole12), intval($row_object->hole13), intval($row_object->hole14), intval($row_object->hole15), intval($row_object->hole16), intval($row_object->hole17),
            intval($row_object->hole18),

          intval($row_object->par1), intval($row_object->par2), intval($row_object->par3), intval($row_object->par4), intval($row_object->par5), intval($row_object->par6),
            intval($row_object->par7), intval($row_object->par8), intval($row_object->par9), intval($row_object->par10), intval($row_object->par11),intval($row_object->par12),
            intval($row_object->par13), intval($row_object->par14), intval($row_object->par15), intval($row_object->par16), intval($row_object->par17), intval($row_object->par18),

          intval($row_object->score1), intval($row_object->score2), intval($row_object->score3), intval($row_object->score4), intval($row_object->score5), intval($row_object->score6),
            intval($row_object->score7), intval($row_object->score8), intval($row_object->score9), intval($row_object->score10), intval($row_object->score11), intval($row_object->score12),
            intval($row_object->score13), intval($row_object->score14), intval($row_object->score15), intval($row_object->score16), intval($row_object->score17), intval($row_object->score18)
        );

        $scorecards[] = $new_score;

        // var_dump($new_score);

        $row_object = pg_fetch_object($results);
    }

    return $scorecards;
  }
}

 ?>
