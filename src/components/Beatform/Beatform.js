import React from 'react'
import './Beatform.css';

export default function Beatform() {
  let now_playing =  document.querySelector('.Now-playing');
  let track_name = document.querySelector('.Track-name');
  let track_artist = document.querySelector('.Track-artist');

  let playpause_btn = document.querySelector('.playpause-track');
  let next_btn = document.querySelector('.next-track');
  let prev_btn = document.querySelector('.prev-track');

  let seek_slider = document.querySelector('.slider');
  let volume_slider = document.querySelector('.volume-slider');
  let current_time = document.querySelector('.current-time');
  let total_duration = document.querySelector('.total-duration')
  let randomIcon = document.querySelector('.fa-random')

  let track_index = 0;
  let isPlaying = false;
  let isRandom = false;
  let updatetimer;
  
    
  return (
    <div className='music-Player'>
        <div className='music-wrapper'>
            <div className='details'>
                <div className='Now-playing'></div>
                <div className='Track-name'> Track name</div>
                <div className='Track-artist'>Track Artist</div>
            </div>

            <div className='slider-container'>
                <div className='current-time'>00.00</div>
                <input type="range" min="1" max="100" value="0" class="slider" onChange="seekto()"></input>
                <div className="total-duration">00.00</div>
            </div>

            <div className='slider-container'>
                <i className='fa fa-volume-down'></i>
                <input type="range" min="1" max="100" value="99" class="volume-slider" onchange="setVolume
                ()"></input>
                <i className='fa fa-volume-up'></i>
            </div>

            <div className='buttons'>
                <div className='Random-track' onclick="randomTrack()">
                    <i className='fa fa-random fa-2x' title="random"></i>
                </div>
                <div className='prev-track' onclick="prevTrack()">
                    <i className='fa fa-step-backward fa-2x'></i>
                </div>
                <div className='playpause-track' onclick="playpauseTrack()">
                    <i className='fa fa-play-circle fa-5x'></i>
                </div>
                <div className='next-track' onclick="nextTrack()">
                    <i className='fa fa-step-forward fa-2x'></i>
                </div>
                <div className='Repeat-track' onclick="repeatTrack()">
                    <i className='fa fa-repeat fa-2x' title="repeat"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

