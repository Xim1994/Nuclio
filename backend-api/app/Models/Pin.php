<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pin extends Model {
    protected $table = 'pins';

    protected $fillable = [
        'name',
        'description',
        'image_url'
    ];

    protected function board() {
        return $this->belongsTo(Board::class);
    }
}
