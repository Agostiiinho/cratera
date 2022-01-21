import Head from "next/head";
import Image from "next/image";
import Category from "../components/Category";
import File from "../components/File";
import React from "react";
import DropdownButton from "../components/DropdownButton";

export default function Home() {
  return (
    <div className="cratera">
      <main>
        <div className="navbar">
          <div className="left-section">
            <h1>Cratera</h1>
          </div>
          <div className="middle-section">
            <input className="searchbar" type="text" placeholder="Search" />
          </div>
          <div className="right-section">
            <button>Upload</button>
            <button>Switch</button>
          </div>
        </div>

        <div className="grid-wrapper">
          <div className="rightbar">
            <div className="cat-add">
              <div className="text2">
                <label>+</label>
                <p>Add categories</p>
              </div>
            </div>
            <div className="categories">
              <Category cat={"Category 1"} />
              <Category cat={"Category 2"} />
              <Category cat={"Category 3"} />
              <Category cat={"Category 4"} />
            </div>
          </div>

          <div className="main-content">
            <div className="type">
              <DropdownButton />
            </div>
            <div className="files-content">
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
