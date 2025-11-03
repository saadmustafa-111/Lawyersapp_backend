import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Req } from '@nestjs/common';
import { LawyerProfileService } from './lawyer-profile.service';
import { CreateLawyerProfileDto } from './dto/create-lawyer-profile.dto';
import { UpdateLawyerProfileDto } from './dto/update-lawyer-profile.dto';
import { JwtAuthGuard } from 'src/login/guards/auth.guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@Controller('lawyer-profile')
export class LawyerProfileController {
  constructor(private readonly lawyerProfileService: LawyerProfileService) {}
@UseGuards(JwtAuthGuard)
  @ApiBearerAuth() 
  @Post()
  create(@Req() req,@Body() createLawyerProfileDto: CreateLawyerProfileDto) {
    const userId = req.user.userId;
    return this.lawyerProfileService.create({...createLawyerProfileDto,user:userId});
  }

  @Get()
  findAll() {
    return this.lawyerProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerProfileDto: UpdateLawyerProfileDto) {
    return this.lawyerProfileService.update(+id, updateLawyerProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerProfileService.remove(+id);
  }
}
