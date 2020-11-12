<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
  protected $fillable = [
    'service_name','icon'
  ];
  public function flats()
  {
    return $this -> belongsToMany(Flat::class)-> withPivot('id','service_id','flat_id');;
  }
}
