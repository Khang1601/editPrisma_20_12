import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AvailableStatus } from '@prisma/client';
import { Response } from 'express';

@Controller('categories')
export class CategoriesController {
  
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Res() res: Response, @Body() createCategoryDto: CreateCategoryDto) {

    try {
      let result = await this.categoriesService.create(createCategoryDto);

      if (result.code) {
        return res.status(500).json({
          message: result.meta.cause
        });
        
      }
      res.status(200).json({
        message: ` Post thanh cong id ${result.id}`
      })

    } catch (error) {
      console.log("error",error);
      
    }

    // return this.categoriesService.create(createCategoryDto);

  }

  @Get()
    findAll() {

    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    // try {
 
    //   let result = await this.categoriesService.findOne(+id);

    //   if (result.code) {
    //     return res.status(500).json({
    //       message: result.meta.cause
    //     });
        
    //   }
    //   res.status(200).json({
    //     message: ` Get thanh cong id ${result.id}`
    //   })

    // } catch (error) {
    //   console.log("error",error);
      
    // }

    return this.categoriesService.findOne(+id);
  }

  // @Get('/findActive/:status')
  // findActive(@Param('id') activeUser: string){
  //   return this.categoriesService.findActive(activeUser);
  // }
  @Get()
  async findActive(@Res() res: Response, @Query('status') AvailableStatus: string) {

    console.log("AvailableStatus",AvailableStatus);

    try {
      let result = await this.categoriesService.findActive(AvailableStatus);

      if (result.code) {
        return res.status(500).json({
          message: result.meta.cause
        });
        
      }
      res.status(200).json({
        message: ` findActive thanh cong id ${result.id}`
      })

    } catch (error) {
      console.log("error",error);
      
    }
    

    // return this.categoriesService.findActive(AvailableStatus);

    // return this.categoriesService.findAll();
  }

  @Patch(':id')
  async update(@Res() res: Response, @Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {

    try {
      let result = await this.categoriesService.update(+id, updateCategoryDto);

      if (result.code) {
        return res.status(500).json({
          message: result.meta.cause
        });
        
      }

      res.status(200).json({
        message: ` Patch thanh cong id ${result.id}`
      })
    } catch (error) {
      console.log("error",error);
      
    }


    // return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Res() res: Response, @Param('id') id: string) {
    // console.log("id",id);

    try {
      let result = await this.categoriesService.remove(+id);
      // console.log("result cccccccccccccccccccccccccc",result);

      if (result.code) {
        // console.log("result.code..................",result.code);
        return res.status(500).json({
          message: result.meta.cause
        });
        
      }
      
      res.status(200).json({
        message: ` Delete thanh cong id ${result.id}`
      })
    } catch (error) {
      console.log("error",error);
      
    }
    
    //return this.categoriesService.remove(+id);
  }
}
